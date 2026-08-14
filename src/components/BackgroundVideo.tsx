import { useEffect, useRef } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4';
const SENSITIVITY = 0.8;
const LERP_FACTOR = 0.04; // Decreased from 0.08 for even smoother, floatier interpolation

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;
    let smoothTime = targetTimeRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!video.duration || isNaN(video.duration)) return;

      const currentX = e.clientX;
      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const timeOffset =
        (delta / window.innerWidth) * SENSITIVITY * video.duration;
      let newTarget = targetTimeRef.current + timeOffset;

      newTarget = Math.max(0, Math.min(video.duration, newTarget));
      targetTimeRef.current = newTarget;
    };

    let lastSeekTime = 0;
    const SEEK_THROTTLE = 66; // Approx 15fps max seek rate (1000ms / 15)

    const updateVideo = (now: number) => {
      if (video.duration && !isNaN(video.duration)) {
        smoothTime += (targetTimeRef.current - smoothTime) * LERP_FACTOR;

        if (
          !isSeekingRef.current &&
          Math.abs(smoothTime - video.currentTime) > 0.05 &&
          now - lastSeekTime > SEEK_THROTTLE
        ) {
          isSeekingRef.current = true;
          lastSeekTime = now;
          video.currentTime = smoothTime;
        }
      }
      animationFrameId = requestAnimationFrame(updateVideo);
    };

    animationFrameId = requestAnimationFrame(updateVideo);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleSeeked = () => {
    isSeekingRef.current = false;
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      targetTimeRef.current = video.currentTime || 0;
    }
  };

  return (
    <video
      ref={videoRef}
      src={VIDEO_URL}
      muted
      playsInline
      preload="auto"
      onSeeked={handleSeeked}
      onLoadedMetadata={handleLoadedMetadata}
      className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      style={{
        objectPosition: '70% center',
      }}
    />
  );
}
