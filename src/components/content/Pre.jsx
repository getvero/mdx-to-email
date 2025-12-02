import React from 'react';
import { MjmlText, MjmlSpacer } from '@faire/mjml-react';

function Pre({ children }) {
  return (
    <>
      <MjmlSpacer height="10px"/>
      <MjmlText
        fontFamily="Consolas, Monaco, Courier New, monospace"
        fontSize="15px"
        lineHeight="1.8"
        cssClass="code-block"
        color="#333333"
        padding="16px"
        borderRadius="4px"
        backgroundColor="#f6f8fa"
        containerBackgroundColor="#f6f8fa"
      >
        {children}
      </MjmlText>
      <MjmlSpacer height="10px"/>
    </>
  );
}

export default Pre;

