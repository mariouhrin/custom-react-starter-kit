import React, { useState, useEffect } from 'react';
import { getRandomColor } from '../helpers/getRandomColor';
// import { useShowHeader } from './customHook';

export function TestComponent() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  // const [showDelay, setShowDelay] = useState(show);
  // const [showHeader, setShowHeader] = useState(show);
  // const [changeBackground, setBackground] = useState(show);

  // useEffect(
  //   () => {
  //     const timer = setTimeout(() => {
  //       setShowDelay(show);
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   },
  //   [show]
  // );
  useEffect(
    () => {
      const timer = setTimeout(() => {
        document.body.style = `background: ${getRandomColor()};`;
      }, 1000);

      return () => clearTimeout(timer);
    },
    [show]
  );

  // useEffect(
  //   () => {
  //     const timer = setTimeout(() => {
  //       setShowHeader(show);
  //     }, 1000);

  //     return () => clearTimeout(timer);
  //   },
  //   [show]
  // );

  // const showSecondHeader = useShowHeader(showHeader, 1000);

  // const toggle = useToggleDelay(showModal, 1000);
  // console.log('## show ##');
  // console.log(show);
  // console.log('## show delay ##');
  // console.log(showDelay);

  return (
    <>
      <button type="button" onClick={() => setShow(!show)}>
        Changed background
      </button>
      <button type="button" onClick={() => setShow2(!show2)}>
        fake test
      </button>
      {/* <button type="button" onClick={() => setShowModalTwo(!showModalTwo)}>
        Show Modal Two
      </button> */}
      {/* {showHeader && changeBackground()}
      {showSecondHeader && <h1>This is a Second header</h1>} */}
      {/* {showDelay && <div>Modal One</div>} */}
      {/* {<div>Current count is: {count}</div>} */}
    </>
  );
}
