import React from 'react';
import { MjmlText } from '@faire/mjml-react';

function Ol({children}) {
  return (
    <MjmlText
      fontSize="14px"
      lineHeight="1.5"
      color="#16184B"
      cssClass="paragraph"
      padding="0"
    >
      <ol>{children}</ol>
    </MjmlText>
  );
}

export default Ol; 