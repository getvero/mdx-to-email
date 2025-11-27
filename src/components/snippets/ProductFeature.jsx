import React from 'react';
import { MjmlImage } from '@faire/mjml-react';
import { MjmlText } from '@faire/mjml-react';
import H3 from '../content/H3.jsx';

// Section with an image followed by content
const ProductFeature = ({ children, title, imageUrl, linkUrl, altText = '', padding = '0 16px 16px 0' }) => {
  // Clone children and pass padding prop to them
  const childrenWithPadding = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {padding});
    }
    return child;
  });

  return (
    <>
      <MjmlImage
        href={linkUrl}
        src={imageUrl}
        alt={altText}
        padding={padding}
      />
      <H3 padding={padding}>{title}</H3>
      {childrenWithPadding}
      <MjmlText
        fontSize="15px"
        lineHeight="1.8"
        cssClass="paragraph"
        color="#16184B"
        padding={padding}
      >
        <a href={linkUrl}>Read the post →</a>
      </MjmlText>
    </>
  );
};

export default ProductFeature;