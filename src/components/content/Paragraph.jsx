import React from 'react';
import { MjmlText } from '@faire/mjml-react';

function Paragraph({ children, padding = "7px 0 7px 0" }) {
  return (
    <MjmlText
      fontSize="15px"
      lineHeight="1.8"
      cssClass="paragraph"
      color="#16184B"
      padding={padding}
    >
      {children}
    </MjmlText>
  );
}

export default Paragraph; 

