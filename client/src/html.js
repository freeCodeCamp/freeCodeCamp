import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html id='__fcc-html' {...this.props.htmlAttributes} lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta content='ie=edge' httpEquiv='x-ua-compatible' />
          <meta
            content='width=device-width, initial-scale=1.0, shrink-to-fit=no'
            name='viewport'
          />
          <link as='style' href='/css/bootstrap.min.css' rel='preload' />
          <link href='/css/bootstrap.min.css' rel='stylesheet' />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                var preferredTheme;
                
                window.__onThemeChange = function() {};
                window.__onThemeChangeEditor = function() {};

                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);
                  window.__onThemeChangeEditor(newTheme);
                }

                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }

                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }

                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });

                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `
            }}
          />
          {this.props.preBodyComponents}
          <div
            className='tex2jax_ignore'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            id='___gatsby'
            key={'body'}
          />
          {this.props.postBodyComponents}
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
