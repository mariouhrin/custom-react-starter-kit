import { useState, useEffect } from 'react';

export function useShowHeader(show, delay) {
  const [showHeader, setShowHeader] = useState(show);
  useEffect(
    () => {
      const timer = setTimeout(() => {
        setShowHeader(show);
      }, 1000);

      return () => clearTimeout(timer);
    },
    [show]
  );

  return showHeader;
}
