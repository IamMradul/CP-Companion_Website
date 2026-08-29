import { useEffect, useRef } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4';
const SENSITIVITY = 1.8; // Increased for much faster rotation
const LERP_FACTOR = 0.15; // Increased for faster reactivity to mouse pointer

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
    const SEEK_THROTTLE = 50; // Decreased to update video more frequently for smoothness

    const updateVideo = (now: number) => {
      if (video.duration && !isNaN(video.duration)) {
        smoothTime += (targetTimeRef.current - smoothTime) * LERP_FACTOR;

        if (
          !isSeekingRef.current &&
          Math.abs(smoothTime - video.currentTime) > 0.02 &&
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
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
    />
  );
}
