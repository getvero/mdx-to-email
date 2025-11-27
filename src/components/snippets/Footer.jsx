import React from 'react';
import { MjmlSection, MjmlColumn, MjmlText, MjmlDivider } from '@faire/mjml-react';

// Section with an image followed by content
const Footer = ({reason}) => {
  const defaultReason = `{%if user.original_source == 'blog-subscribers'%}You are receiving this email as you previously subscribed to Vero's blog{%elsif user.original_source == 'ex-trial' or user.original_source == 'ex-customer'%}You are receiving this email as you previously signed up to Vero{%else%}You are receiving this email as you previously subscribed to receive emails from Vero{%endif%}.`;
  
  return (
  <MjmlSection padding="10px 20px 30px">
    <MjmlColumn width="100%">
      <MjmlDivider 
        borderColor="#ebebeb" 
        borderWidth="1px" 
        padding="20px 0 40px"
      />
      <MjmlText
        fontSize="11px"
        lineHeight="1.4"
        color="#A2A3B7"
        cssClass="paragraph"
        padding="0 0 0 0"
      >
        {reason || defaultReason}
        <br/>Unsubscribe at any time by <a href="{{url.unsubscribe_link}}" style={{color: '#a2a3b7'}}>clicking here</a>.
      </MjmlText>
      <MjmlText
        fontSize="11px"
        lineHeight="1.4"
        color="#A2A3B7"
        cssClass="paragraph"
        padding="20px 0 0 0"
      >
        Vero Holdings Australia Pty Ltd<br />
        PO Box 338<br />
        Strawberry Hills, NSW 2012<br />
        Australia
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
  );
};

export default Footer;