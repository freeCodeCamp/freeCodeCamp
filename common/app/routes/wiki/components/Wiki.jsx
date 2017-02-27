import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';
import { Col } from 'react-bootstrap';

import WikiArticle from './WikiArticle.jsx';
import WikiMenu from './WikiMenu.jsx';

import defaultTopic from '../defaultTopic';
import { updateTitle } from '../../../redux/actions';
import * as styles from '../styles';

const mapActionsToDispatch = {
  updateTitle
};
const mapStateToProps = createSelector(
  (_, props) => props.params.wikiBlock,
  (_, props) => props.params.wikiDashedName,
  state => state.entities.wiki.wikiTopics,
  (block = '', dashedName = '', topicMap = {}) => {
    const topics = topicMap[block] || [];
    const topicIndex = topics
      .findIndex(topic => topic.dashedName === dashedName);
    return {
      topic: Object.keys(topicMap).length > 0 ?
        topicMap[block][topicIndex] :
        defaultTopic
    };
  }
);

const propTypes = {
  block: PropTypes.string,
  dashedName: PropTypes.string,
  topic: PropTypes.object,
  updateTitle: PropTypes.func.isRequired
};

class Wiki extends PureComponent {
  componentWillMount() {
    const title = this.props.topic.title ?
      `Wiki - ${this.props.topic.title}` :
      'Wiki';
    this.props.updateTitle(title);
  }

  componentWillReceiveProps(nextProps) {
    const { topic, updateTitle } = nextProps;
    if (topic.title !== this.props.topic.title) {
      updateTitle(`Wiki - ${topic.title}`);
    }
  }

  render() {
    const {
      topic
    } = this.props;
    return (
      <div style={ styles.parent }>
        <Col md={ 4 } style={ styles.menuParent } xs={ 12 } >
          <WikiMenu />
        </Col>
        <Col md={ 8 } xs={ 12 } >
          <WikiArticle body={ topic.body } title={ topic.title } />
        </Col>
      </div>
  );
  }
}

Wiki.displayName = 'Wiki';
Wiki.propTypes = propTypes;

export default connect(mapStateToProps, mapActionsToDispatch)(Wiki);
