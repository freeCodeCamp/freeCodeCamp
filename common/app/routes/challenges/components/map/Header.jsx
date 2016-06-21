import React, { PropTypes } from 'react';
import { InputGroup, FormControl, Button, Row } from 'react-bootstrap';
import classnames from 'classnames';

const clearIcon = <i className='fa fa-times' />;
const searchIcon = <i className='fa fa-search' />;
const ESC = 27;
export default class Header extends React.Component {
  constructor(...props) {
    super(...props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  static displayName = 'MapHeader';
  static propTypes = {
    filter: PropTypes.string,
    clearFilter: PropTypes.func,
    updateFilter: PropTypes.func
  };

  handleKeyDown(e) {
    if (e.keyCode === ESC) {
      this.props.clearFilter();
    }
  }

  renderSearchAddon(filter, clearFilter) {
    if (!filter) {
      return searchIcon;
    }
    return <span onClick={ clearFilter }>{ clearIcon }</span>;
  }

  render() {
    const {
      updateFilter,
      clearFilter,
      filter
    } = this.props;
    const inputClass = classnames({
      'map-filter': true,
      filled: !!filter
    });
    return (
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
    );
  }
}
