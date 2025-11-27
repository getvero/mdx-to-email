import React from 'react';
import { MjmlSection, MjmlColumn, MjmlImage, MjmlText } from '@faire/mjml-react';

// Section with an image followed by content
const Header = ({title}) => (
  <MjmlSection padding="50px 30px 30px 30px">
    <MjmlColumn 
      width="50%"
    >
      <MjmlImage
        src="https://message-cdn.getvero.com/uploads/ac0e9478875811daa1da261d75df0f52/fullsize/4ca24f4c-c2e0-499d-b7dc-d1717fa4932a-logo.png"
        alt="Vero Logo"
        align="left"
        padding="0"
        width="100px"
      />
    </MjmlColumn>
    <MjmlColumn 
      width="50%"
    >
      <MjmlText
        fontSize="16px"
        lineHeight="25px"
        cssClass="h2"
        color="#16184B"
        padding="0"
        fontWeight="bold"
        align="right"
      >
        {title}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export default Header;