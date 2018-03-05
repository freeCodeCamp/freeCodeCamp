import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import ns from './ns.json';
import { Loader } from '../helperComponents';
import SuperBlock from './Super-Block.jsx';
import { currentChallengeSelector, superBlocksSelector } from '../redux';
import { fetchMapUi } from './redux';

const mapStateToProps = state => ({
  currentChallenge: currentChallengeSelector(state),
  superBlocks: superBlocksSelector(state)
});

const mapDispatchToProps = { fetchMapUi };
const propTypes = {
  currentChallenge: PropTypes.string,
  fetchMapUi: PropTypes.func.isRequired,
  params: PropTypes.object,
  superBlocks: PropTypes.array
};

export class ShowMap extends PureComponent {
  componentDidMount() {
    this.setupMapScroll();
  }

  componentDidUpdate() {
    this.setupMapScroll();
  }

  setupMapScroll() {
    this.updateMapScrollAttempts = 0;
    this.updateMapScroll();
  }

  updateMapScroll() {
    const { currentChallenge } = this.props;
    const rowNode = this._row;
    const challengeNode = rowNode.querySelector(
      `[data-challenge="${currentChallenge}"]`
    );

    if ( !challengeNode ) {
      this.retryUpdateMapScroll();
      return;
    }

    const containerScrollHeight = rowNode.scrollHeight;
    const containerHeight = rowNode.clientHeight;

    const offset = 100;
    const itemTop = challengeNode.offsetTop;
    const itemBottom = itemTop + challengeNode.clientHeight;

    const currentViewBottom = rowNode.scrollTop + containerHeight;

    if ( itemBottom + offset < currentViewBottom ) {
      // item is visible with enough offset from bottom => no need to scroll
      return;
    }

    if ( containerHeight === containerScrollHeight ) {
      /*
      * During a first run containerNode scrollHeight may be not updated yet.
      * In this case containerNode ignores changes of scrollTop property.
      * So we have to wait some time before scrollTop can be updated
      * */
      this.retryUpdateMapScroll();
      return;
    }

    const scrollTop = itemBottom + offset - containerHeight;
    rowNode.scrollTop = scrollTop;
  }

  retryUpdateMapScroll() {
    const maxAttempts = 5;
    this.updateMapScrollAttempts++;

    if (this.updateMapScrollAttempts < maxAttempts) {
      setTimeout(() => this.updateMapScroll(), 300);
    }
  }

  renderSuperBlocks() {
    const { superBlocks } = this.props;
    if (!Array.isArray(superBlocks) || !superBlocks.length) {
      return (
        <div style={{ height: '300px' }}>
          <Loader />
        </div>
      );
    }
    return superBlocks.map(dashedName => (
      <SuperBlock
        dashedName={ dashedName }
        key={ dashedName }
      />
    ));
  }

  render() {
    return (
      <div className = { `${ns}-container`} ref={ ref => { this._row = ref; }}>
        <Row>
          <Col xs={ 12 }>
            <div className={ `${ns}-accordion center-block` }>
              { this.renderSuperBlocks() }
              <div className='spacer' />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

ShowMap.displayName = 'Map';
ShowMap.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowMap);
