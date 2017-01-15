import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { Panel } from 'react-bootstrap';

const propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

class WikiArticle extends PureComponent {

  render() {
    const { title, body } = this.props;
    return (
      <Panel header={ title }>
        { body }
      </Panel>
    );
  }
}

WikiArticle.defaultProps = {
  title: 'Your wiki article has gone amiss',
  body: 'Please try again soon. If you continue to have issues, please raise ' +
    'a bug/issue.'
};
WikiArticle.displayName = 'WikiArticle';
WikiArticle.propTypes = propTypes;

export default WikiArticle;
