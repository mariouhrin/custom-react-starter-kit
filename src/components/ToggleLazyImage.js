import React, { Suspense, lazy, useState } from 'react';

const LazyImage = lazy(() => import('../components/LazyImage'));

export const ToggleLazyImage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section>
      <button type="button" className="show-image-button" onClick={() => setToggle(!toggle)}>
        Show Image
      </button>
      {toggle && (
        <Suspense fallback={<div>loading...</div>}>
          <LazyImage />
        </Suspense>
      )}
    </section>
  );
};
