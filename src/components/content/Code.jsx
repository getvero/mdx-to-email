import React from 'react';

function Code({ children }) {
  return (
    <span
      style={{
        fontFamily: 'Consolas, Monaco, Courier New, monospace',
        color: '#e83e8c'
      }}
    >
      {children}
    </span>
  );
}

export default Code;

