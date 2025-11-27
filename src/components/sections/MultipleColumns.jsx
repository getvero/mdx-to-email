import React from 'react';
import { MjmlSection } from '@faire/mjml-react';

function MultipleColumns({ children, padding = "0 30px 20px", borderBottom }) {
  return (
    <MjmlSection padding={padding} border-bottom={borderBottom}>
      {children}
    </MjmlSection>
  );
}

export default MultipleColumns; 

