import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { Input, Button, Row } from 'react-bootstrap';

import SuperBlock from './Super-Block.jsx';
import FullStack from './Full-Stack.jsx';
import CodingPrep from './Coding-Prep.jsx';

export default class ShowMap extends PureComponent {
  static displayName = 'Map';
  static propTypes = {
    superBlocks: PropTypes.array
  };

  renderSuperBlocks(superBlocks) {
    if (!Array.isArray(superBlocks) || !superBlocks.length) {
      return <div>No Super Blocks</div>;
    }
    return superBlocks.map((superBlock) => {
      return (
        <SuperBlock
          key={ superBlock.title }
          { ...superBlock }/>
      );
    });
  }

  render() {
    const { superBlocks } = this.props;
    return (
      <div>
        <div className='map-wrapper'>
          <div
            className='text-center map-fixed-header'
            style={{ top: '50px' }}>
            <p>Challenges required for certifications are marked with a *</p>
            <Row className='map-buttons'>
              <Button
                block={ true }
                bsStyle='primary'
                className='active center-block'>
                Collapse all challenges
              </Button>
            </Row>
            <Row className='map-buttons'>
              <Input
                addonAfter={ <span><i className='fa fa-search' /></span> }
                autocompleted='off'
                className='map-filter'
                placeholder='Type a challenge name'
                type='text' />
            </Row>
            <hr />
          </div>
        </div>
        <div
          className='map-accordion'>
          { this.renderSuperBlocks(superBlocks) }
          <FullStack />
          <CodingPrep />
        </div>
      </div>
    );
  }
}
