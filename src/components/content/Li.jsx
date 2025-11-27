import React from 'react';

function Li({children}) {
  return (
    <>
      <li 
        style={{padding: "0 0 5px 0"}}
      >
        {children}
      </li>
    </>
  );
}

export default Li; 