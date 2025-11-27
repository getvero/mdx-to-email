import React from 'react';
import { MjmlSection, MjmlColumn } from '@faire/mjml-react';

// Section with an image followed by content
const IntroBlueBackground = ({children}) => (
  <MjmlSection padding="20px 30px 20px 30px" backgroundColor="#EAEBF6" borderRadius="10px">
    <MjmlColumn width="100%" cssClass="text-primary-dark">
      {children}
    </MjmlColumn>
  </MjmlSection>
);

export default IntroBlueBackground;