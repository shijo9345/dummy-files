import React, { useState } from 'react';

function PasteExample() {
  const [pastedText, setPastedText] = useState('');

  const handlePaste = (event) => {
    const pastedData = event.clipboardData.getData('text');
    setPastedText(pastedData);
    console.log(pastedData);
  };

  return (
    <div>
      <input type="text" onPaste={handlePaste} placeholder="Paste text here" />
      <p>Pasted Text: {pastedText}</p>
    </div>
  );
}

export default PasteExample;
