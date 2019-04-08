import { useEffect } from 'react';
import { getRandomColor } from '../../helpers/getRandomColor';

export function useShowHeader(show, delay) {
  useEffect(
    () => {
      const timer = setTimeout(() => {
        document.body.style = `background: ${getRandomColor()};`;
      }, 1000);

      return () => clearTimeout(timer);
    },
    [show]
  );
}
