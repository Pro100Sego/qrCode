// src/client/main.tsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [text, setSetext] = useState('');
  const [qr, setQR] = useState('');

  const generate = async () => {
    const res = await fetch('/api/qr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setQR(data.qr);
  };

  return (
    <div>
      <h1>QR Generator</h1>
      <input value={text} onChange={(e) => setSetext(e.target.value)} />
      <button onClick={generate}>Generate</button>
      {qr && <img src={qr} alt="QR Code" />}
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
