import React from 'react';
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlStyle,
  MjmlText,
  MjmlTitle,
  MjmlWrapper
} from '@faire/mjml-react';
import Header from '../components/snippets/Header.jsx';
import Footer from '../components/snippets/Footer.jsx';

function Template({ children, frontmatter, globalCss }) {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>{frontmatter.title}</MjmlTitle>
        {frontmatter.previewText && <MjmlPreview>{frontmatter.previewText}</MjmlPreview>}
        <MjmlAttributes>
          <MjmlAll fontFamily="Arial, sans-serif" />
        </MjmlAttributes>
        <MjmlStyle inline="true">{globalCss}</MjmlStyle>
      </MjmlHead>
      <MjmlBody width={800} backgroundColor="#ffffff">
        <MjmlWrapper backgroundColor="#ffffff" cssClass="body-section">
          <Header />
          <MjmlSection padding="20px 30px 0px">
            <MjmlColumn width="100%">
              <MjmlText
                fontSize="22px"
                lineHeight="1.2"
                cssClass="h1"
                color="#16184B"
                padding="10px 0 10px 0"
                fontWeight="bold"
              >
                {frontmatter.title}
              </MjmlText>
              <MjmlText
                fontSize="18px"
                lineHeight="1"
                cssClass="h2"
                color="#16184B"
                padding="10px 0 10px 0"
              >
                {frontmatter.previewText}
              </MjmlText>
              <MjmlText
                fontSize="14px"
                lineHeight="1.4"
                color="#16184B"
                cssClass="paragraph"
                padding="10px 0 10px 0"
                fontStyle="italic"
              >
                By Chris Hexton, CEO and Co-Founder, Vero. <a href={frontmatter.permalink}>Read this post online</a> or <a href="{{url.unsubscribe_link}}">unsubscribe</a> instantly.
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          {children}
          <Footer />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}

export default Template;
