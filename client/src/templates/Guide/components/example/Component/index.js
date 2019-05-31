import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import ArticleLayout from '../../ArticleLayout';

const propTypes = {
  data: PropTypes.object
};

class CustomClickCounter extends React.Component {
  state = {
    init: false,
    span: null,
    div: null,
    counter: 0
  };

  initComponent() {
    const span = document.getElementById('example-component_span');
    const div = document.getElementById('example-component_div');
    this.setState({ init: true, span, div });
  }

  handleClick = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  componentDidMount() {
    this.initComponent();
  }

  render() {
    if (!this.state.init) {
      return null;
    }
    return (
      <div>
        {ReactDOM.createPortal(this.state.counter, this.state.span)}
        {ReactDOM.createPortal(
          <button onClick={this.handleClick}>Click me!</button>,
          this.state.div
        )}
      </div>
    );
  }
}

const ExampleComponent = props => {
  const {
    data: {
      markdownRemark: { html }
    }
  } = props;
  return (
    <ArticleLayout {...props}>
      <article
        className='article'
        dangerouslySetInnerHTML={{ __html: html }}
        id='article'
        tabIndex='-1'
      />
      <CustomClickCounter />
    </ArticleLayout>
  );
};

ExampleComponent.displayName = 'ExampleComponent';
ExampleComponent.propTypes = propTypes;
export default ExampleComponent;

export const pageQuery = graphql`
  query ExampleComponent($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      ...ArticleLayout
    }
  }
`;
