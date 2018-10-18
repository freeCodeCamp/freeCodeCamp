import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    const { htmlAttributes, headComponents, bodyAttributes, preBodyComponents, postBodyComponents, body } = this.props;
    return (
      <html id='__fcc-html' {...htmlAttributes} lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta content='ie=edge' httpEquiv='x-ua-compatible' />
          <meta
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
            name='viewport'
          />
          <link
            href={
              'https://cdn.freecodecamp.org/compiled/bootstrap/v3/css/' +
              'bootstrap.min.css'
            }
            rel='stylesheet'
          />
          {headComponents}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div
            dangerouslySetInnerHTML={{ __html: body }}
            id='___gatsby'
            key={'body'}
          />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  body: PropTypes.string,
  bodyAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  htmlAttributes: PropTypes.object,
  postBodyComponents: PropTypes.array,
  preBodyComponents: PropTypes.array
};
