import React from 'react';
import { MjmlText } from '@faire/mjml-react';

function H2({ children }) {
  return (
    <MjmlText
      fontSize="18px"
      lineHeight="1.5"
      cssClass="h2"
      color="#16184B"
      padding="23px 0 13px 0"
      fontWeight="bold"
    >
      {children}
    </MjmlText>
  );
}

export default H2; 

