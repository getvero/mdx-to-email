import React from 'react';
import { MjmlText } from '@faire/mjml-react';

function H3({ children, padding = '20px 0 10px 0' }) {
  return (
    <MjmlText
      fontSize="16px"
      lineHeight="1.5"
      cssClass="h2"
      color="#16184B"
      padding={padding}
      fontWeight="bold"
    >
      {children}
    </MjmlText>
  );
}

export default H3; 

