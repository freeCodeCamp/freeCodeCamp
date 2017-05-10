import React, { PropTypes, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { InputGroup, FormControl, Button, Row } from 'react-bootstrap';
import classnames from 'classnames';
import {
  clearFilterPressed,
  collapseAll,
  escapeKeyInFilter,
  expandAll,
  updateFilter,

  allColapsedSelector,
  filterSelector
} from './redux';

const ESC = 27;
const clearIcon = <i className='fa fa-times' />;
const searchIcon = <i className='fa fa-search' />;

const mapStateToProps = state => ({
  isAllCollapsed: allColapsedSelector(state),
  filter: filterSelector(state)
});

function mapDispatchToProps(dispatch) {
  const dispatchers = bindActionCreators({
    collapseAll,
    expandAll,
    updateFilter
  }, dispatch);
  dispatchers.escapeKeyInFilter = e => {
    if (e.keyCode === ESC) {
      e.preventDefault();
      dispatch(escapeKeyInFilter());
    }
  };
  dispatchers.clearFilterPressed = e => {
    e.preventDefault();
    dispatch(clearFilterPressed());
  };
  return () => dispatchers;
}
const propTypes = {
  clearFilterPressed: PropTypes.func,
  collapseAll: PropTypes.func,
  escapeKeyInFilter: PropTypes.func,
  expandAll: PropTypes.func,
  filter: PropTypes.string,
  isAllCollapsed: PropTypes.bool,
  updateFilter: PropTypes.func
};

export class Header extends PureComponent {
  renderSearchAddon(filter, clearFilterPressed) {
    if (!filter) {
      return searchIcon;
    }
    return <span onClick={ clearFilterPressed }>{ clearIcon }</span>;
  }

  render() {
    const {
      clearFilterPressed,
      collapseAll,
      escapeKeyInFilter,
      expandAll,
      filter,
      isAllCollapsed,
      updateFilter
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
      'Hide all challenges';
    return (
      <div>
        <div className='text-center'>
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
                autoComplete='off'
                className={ inputClass }
                onChange={ updateFilter }
                onKeyDown={ escapeKeyInFilter }
                placeholder='Type a challenge name'
                type='text'
                value={ filter }
              />
              <InputGroup.Addon>
                { this.renderSearchAddon(filter, clearFilterPressed) }
              </InputGroup.Addon>
            </InputGroup>
          </Row>
          <hr />
        </div>
      </div>
    );
  }
}

Header.displayName = 'MapHeader';
Header.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
