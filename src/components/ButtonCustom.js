import React from 'react';
import { useCustomHookButton } from './hooks/useCustomHookButton';

export function ButtonCustomHook() {
  const { toggle, handleClick } = useCustomHookButton(false);

  return (
    <>
      <button type="button" onClick={() => handleClick(toggle)}>
        Custom Hook
      </button>
      {toggle && <h3>Content</h3>}
    </>
  );
}
