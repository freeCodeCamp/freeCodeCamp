import React from 'react';
import PropTypes from 'prop-types';

import preloads from './head/preloads';

// These props are coming from Gatsby, we shouldn't have to worry about them
const propTypes = {
  body: PropTypes.any,
  bodyAttributes: PropTypes.any,
  headComponents: PropTypes.any,
  htmlAttributes: PropTypes.any,
  postBodyComponents: PropTypes.any,
  preBodyComponents: PropTypes.any
};

function HTML(props) {
  const {
    htmlAttributes,
    body,
    bodyAttributes,
    headComponents,
    preBodyComponents,
    postBodyComponents
  } = props;
  return (
    <html {...htmlAttributes}>
      <head>
        {preloads}
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          className='tex2jax_ignore'
          dangerouslySetInnerHTML={{ __html: body }}
          id='___gatsby'
          key={'body'}
        />
        {postBodyComponents}
        <script async={true} id='stripe-js' src='https://js.stripe.com/v3/' />
      </body>
    </html>
  );
}

HTML.displayName = 'HMTL';
HTML.propTypes = propTypes;

export default HTML;
