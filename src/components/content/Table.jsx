import React from 'react';
import { MjmlTable } from '@faire/mjml-react';

function Table({children}) {
  return (
    <MjmlTable
      fontSize="14px"
      lineHeight="1.5"
      color="#16184B"
      cssClass="paragraph"
      padding="0"
    >
      {children}
    </MjmlTable>
  );
}

export default Table; 