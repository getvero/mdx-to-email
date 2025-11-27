import React from 'react';
import { MjmlImage } from '@faire/mjml-react';
import H3 from '../content/H3.jsx';

// Section with an image followed by content
const ProductFeature = ({ children, title, imageUrl, linkUrl, altText = '', padding = '0 0 16px 0' }) => {
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
    </>
  );
};

export default ProductFeature;