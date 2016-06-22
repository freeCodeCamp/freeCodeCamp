import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PureComponent from 'react-pure-render/component';
import { InputGroup, FormControl, Button, Row } from 'react-bootstrap';
import classnames from 'classnames';
import {
  clearFilter,
  updateFilter,
  collapseAll,
  expandAll
} from '../../redux/actions';

const ESC = 27;
const clearIcon = <i className='fa fa-times' />;
const searchIcon = <i className='fa fa-search' />;
const bindableActions = {
  clearFilter,
  updateFilter,
  collapseAll,
  expandAll
};
const mapStateToProps = state => ({
  isAllCollapsed: state.challengesApp.mapUi.isAllCollapsed,
  filter: state.challengesApp.filter
});
export class Header extends PureComponent {
  constructor(...props) {
    super(...props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  static displayName = 'MapHeader';
  static propTypes = {
    isAllCollapsed: PropTypes.bool,
    filter: PropTypes.string,
    clearFilter: PropTypes.func,
    updateFilter: PropTypes.func,
    collapseAll: PropTypes.func,
    expandAll: PropTypes.func
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
      filter,
      updateFilter,
      clearFilter,
      collapseAll,
      expandAll,
      isAllCollapsed
    } = this.props;
    const inputClass = classnames({
      'map-filter': true,
      filled: !!filter
    });
    const buttonClass = classnames({
      'center-block': true,
      active: isAllCollapsed
    });
    const buttonCopy = isAllCollapsed ?
      'Expand all challenges' :
      'Collapse all challenges';
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
              className={ buttonClass }
              onClick={ isAllCollapsed ? expandAll : collapseAll }
              >
                { buttonCopy }
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
export default connect(mapStateToProps, bindableActions)(Header);
