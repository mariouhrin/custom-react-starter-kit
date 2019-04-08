import { useState } from 'react';

export function useCustomHookButton(initValue) {
  const [toggle, setToggle] = useState(initValue);

  const handleClick = () => setToggle(!toggle);

  return { toggle, handleClick };
}
