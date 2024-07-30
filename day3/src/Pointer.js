import React from 'react';

function PointerEventsExample() {
  const handlePointerDown = (event) => {
    console.log('Pointer down:', event.type);
  };

  const handlePointerMove = (event) => {
    console.log('Pointer move:', event.type);
  };

  const handlePointerUp = (event) => {
    console.log('Pointer up:', event.type);
  };

  const handlePointerEnter = (event) => {
    console.log('Pointer enter:', event.type);
  };

  const handlePointerLeave = (event) => {
    console.log('Pointer leave:', event.type);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      Hover over and click here
    </div>
  );
}

export default PointerEventsExample;
