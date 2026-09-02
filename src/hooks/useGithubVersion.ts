import { useState, useEffect } from 'react';

export function useGithubVersion(fallbackVersion = '3.1.5') {
  const [version, setVersion] = useState(fallbackVersion);

  useEffect(() => {
    fetch('https://api.github.com/repos/IamMradul/CP-Companion/releases/latest')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.tag_name) {
          const v = data.tag_name.startsWith('v') ? data.tag_name.slice(1) : data.tag_name;
          setVersion(v);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch github release version', err);
      });
  }, []);

  return version;
}
