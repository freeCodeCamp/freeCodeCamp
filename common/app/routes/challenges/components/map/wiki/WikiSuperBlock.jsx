import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';
import FA from 'react-fontawesome';
import { Panel } from 'react-bootstrap';

import WikiBlock from './WikiBlock.jsx';
import SKWave from '../../../../../components/SK-Wave.jsx';

import { toggleThisPanel } from '../../../redux/actions';
import {
  makePanelOpenSelector,
  makePanelHiddenSelector
} from '../../../redux/selectors';

const mapStateToProps = () => {
  return createSelector(
    state => state.entities.wiki.wikiMap,
    makePanelOpenSelector(),
    makePanelHiddenSelector(),
    (wikiMap = {}, isOpen, isHidden) => ({
      isOpen,
      isHidden,
      wikiMap
    })
  );
};

const mapDispatchToProps = {
  toggleThisPanel
};

const propTypes = {
  isHidden: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggleThisPanel: PropTypes.func.isRequired,
  wikiMap: PropTypes.object
};

export class WikiSuperBlock extends PureComponent {
  constructor(...props) {
    super(...props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey, e) {
    e.preventDefault();
    this.props.toggleThisPanel(eventKey);
  }

  renderHeader(isOpen, title) {
    return (
      <h2>
        <FA
          className='no-link-underline'
          name={ isOpen ? 'caret-down' : 'caret-right' }
        />
        { title }
      </h2>
    );
  }

  renderCategories(categories) {
    if (!Object.keys(categories).length) {
      return <SKWave />;
    }
    return Object.keys(categories).map((category, i) => {
      const { dashedName, title } = categories[category];
      return (
        <WikiBlock
          dashedName={ dashedName }
          key={ i + dashedName }
          title= { title }
        />
      );
    });
  }

  render() {
    const {
      isOpen = true,
      isHidden,
      wikiMap
    } = this.props;
    const title = 'Forum Wiki';
    if (isHidden) {
      return null;
    }
    return (
      <Panel
        bsClass='map-accordion-panel'
        collapsible={ true }
        eventKey={ title }
        expanded={ isOpen }
        header={ this.renderHeader(isOpen, title) }
        id={ title }
        key={ title }
        onSelect={ this.handleSelect }
        >
        <div
          className='map-accordion-block'
          >
          { this.renderCategories(wikiMap) }
        </div>
      </Panel>
    );
  }
}

WikiSuperBlock.dsiplayName = 'WikiSuperBlock';
WikiSuperBlock.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WikiSuperBlock);
