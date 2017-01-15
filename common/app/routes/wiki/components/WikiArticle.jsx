import React, { PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  body: PropTypes.string,
  title: PropTypes.string
};

function WikiArticle(props) {
  const { title, body } = props;
  return (
    <div style={{ overflowY: 'auto' }}>
      <Panel
        bsStyle='success'
        header={ title }
        style={{ backgroundColor: '#fff' }}
        >
        { ReactHtmlParser(body) }
      </Panel>
    </div>
  );
}

WikiArticle.displayName = 'WikiArticle';
WikiArticle.propTypes = propTypes;

export default WikiArticle;
