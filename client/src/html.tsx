import React from 'react';

interface HTMLProps {
  body: string;
  bodyAttributes?: Record<string, unknown>;
  headComponents?: React.ReactNode[];
  htmlAttributes?: Record<string, unknown>;
  postBodyComponents?: React.ReactNode[];
  preBodyComponents?: React.ReactNode[];
}

export default class HTML extends React.Component<HTMLProps> {
  render(): JSX.Element {
    return (
      <html id='__fcc-html' {...this.props.htmlAttributes} lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta content='ie=edge' httpEquiv='x-ua-compatible' />
          <meta
            content='width=device-width, initial-scale=1.0, shrink-to-fit=no'
            name='viewport'
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
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
