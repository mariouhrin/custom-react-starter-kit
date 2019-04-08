import React, { createContext, useContext, useState } from 'react';

const TestContext = createContext();

function ContextDisplay() {
  const { toggle, setToggle } = useContext(TestContext);

  return (
    <>
      <button type="button" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <h2>Show Content</h2>}
    </>
  );
}

function ContextWrapper1(props) {
  return <div>{props.children}</div>;
}

function ContextWrapper2(props) {
  return <div>{props.children}</div>;
}

export function ContextProvider() {
  const [toggle, setToggle] = useState(false);

  return (
    <TestContext.Provider value={{ toggle, setToggle }}>
      <ContextWrapper1>
        <ContextWrapper2>
          <ContextDisplay />
        </ContextWrapper2>
      </ContextWrapper1>
    </TestContext.Provider>
  );
}
