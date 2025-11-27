import React from 'react';
import { MjmlText } from '@faire/mjml-react';

function H1({ children }) {
  return (
    <MjmlText
      fontSize="22px"
      lineHeight="1.2"
      cssClass="h1"
      color="#16184B"
      padding="10px 0 10px 0"
      fontWeight="bold"
    >
      {children}
    </MjmlText>
  );
}

export default H1; 

