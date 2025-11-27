import React from 'react';
import { MjmlSection, MjmlColumn } from '@faire/mjml-react';

function SingleColumn({ children }) {
  return (
    <MjmlSection padding="20px 30px">
      <MjmlColumn width="100%">
        {children}
      </MjmlColumn>
    </MjmlSection>
  );
}

export default SingleColumn; 

