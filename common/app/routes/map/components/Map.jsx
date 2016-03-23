import React, { PropTypes } from 'react';
import classnames from 'classnames';
import PureComponent from 'react-pure-render/component';
import { Input, Button, Row } from 'react-bootstrap';

import SuperBlock from './Super-Block.jsx';
import FullStack from './Full-Stack.jsx';
import CodingPrep from './Coding-Prep.jsx';

const clearIcon = <i className='fa fa-times' />;
const searchIcon = <i className='fa fa-search' />;
export default class ShowMap extends PureComponent {
  static displayName = 'Map';
  static propTypes = {
    clearFilter: PropTypes.func,
    filter: PropTypes.string,
    superBlocks: PropTypes.array,
    updateFilter: PropTypes.func
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
    const { superBlocks, updateFilter, clearFilter, filter } = this.props;
    const inputIcon = !filter ?
      searchIcon :
      <span onClick={ clearFilter }>{ clearIcon }</span>;
    const inputClass = classnames({
      'map-filter': true,
      filled: !!filter
    });
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
                className='center-block'>
                Collapse all challenges
              </Button>
            </Row>
            <Row className='map-buttons'>
              <Input
                addonAfter={ inputIcon }
                autocompleted='off'
                className={ inputClass }
                onChange={ updateFilter }
                placeholder='Type a challenge name'
                type='text'
                value={ filter }/>
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
