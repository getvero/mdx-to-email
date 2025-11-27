import React from 'react';
import { MjmlColumn } from '@faire/mjml-react';

function Column({ children, width, padding, backgroundColor }) {
  return (
    <MjmlColumn
      width={width}
      padding={padding}
      backgroundColor={backgroundColor}
    >
      {children}
    </MjmlColumn>
  );
}

export default Column; 