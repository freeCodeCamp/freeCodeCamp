import React, { PropTypes } from 'react';
import classnames from 'classnames';
import PureComponent from 'react-pure-render/component';
import { InputGroup, FormControl, Button, Row } from 'react-bootstrap';

import SuperBlock from './Super-Block.jsx';
import FullStack from './Full-Stack.jsx';
import CodingPrep from './Coding-Prep.jsx';

const clearIcon = <i className='fa fa-times' />;
const searchIcon = <i className='fa fa-search' />;
const ESC = 27;
export default class ShowMap extends PureComponent {
  constructor(...props) {
    super(...props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  static displayName = 'Map';
  static propTypes = {
    clearFilter: PropTypes.func,
    filter: PropTypes.string,
    superBlocks: PropTypes.array,
    updateFilter: PropTypes.func
  };

  handleKeyDown(e) {
    if (e.keyCode === ESC) {
      this.props.clearFilter();
    }
  }

  renderSuperBlocks(superBlocks, updateCurrentChallenge) {
    if (!Array.isArray(superBlocks) || !superBlocks.length) {
      return <div>No Super Blocks</div>;
    }
    return superBlocks.map((superBlock) => {
      return (
        <SuperBlock
          key={ superBlock.title }
          updateCurrentChallenge={ updateCurrentChallenge }
          { ...superBlock }
        />
      );
    });
  }

  renderSearchAddon(filter, clearFilter) {
    if (!filter) {
      return searchIcon;
    }
    return <span onClick={ clearFilter }>{ clearIcon }</span>;
  }

  render() {
    const {
      updateCurrentChallenge,
      superBlocks,
      updateFilter,
      clearFilter,
      filter
    } = this.props;
    const inputClass = classnames({
      'map-filter': true,
      filled: !!filter
    });
    return (
      <div>
        <div className='map-wrapper'>
          <div
            className='text-center map-fixed-header'
            style={{ top: '50px' }}
            >
            <p>Challenges required for certifications are marked with a *</p>
            <Row className='map-buttons'>
              <Button
                block={ true }
                bsStyle='primary'
                className='center-block'
                >
                Collapse all challenges
              </Button>
            </Row>
            <Row className='map-buttons'>
              <InputGroup>
                <FormControl
                  autocompleted='off'
                  className={ inputClass }
                  onChange={ updateFilter }
                  onKeyDown={ this.handleKeyDown }
                  placeholder='Type a challenge name'
                  type='text'
                  value={ filter }
                />
                <InputGroup.Addon>
                  { this.renderSearchAddon(filter, clearFilter) }
                </InputGroup.Addon>
              </InputGroup>
            </Row>
            <hr />
          </div>
        </div>
        <div
          className='map-accordion'
          >
          { this.renderSuperBlocks(superBlocks, updateCurrentChallenge) }
          <FullStack />
          <CodingPrep />
        </div>
      </div>
    );
  }
}
