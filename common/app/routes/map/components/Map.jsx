import React, { PropTypes } from 'react';
import FA from 'react-fontawesome';
import PureComponent from 'react-pure-render/component';
import {
  Input,
  Button,
  Row,
  Panel
} from 'react-bootstrap';

const challengeClassName = `
  text-primary
  padded-ionic-icon
  negative-15
  challenge-title
  ion-checkmark-circled
`.replace(/[\n]/g, '');

export default class ShowMap extends PureComponent {
  static displayName = 'Map';
  static propTypes = {
    superBlocks: PropTypes.array
  };

  renderChallenges(challenges) {
    if (!Array.isArray(challenges) || !challenges.length) {
      return <div>No Challenges Found</div>;
    }
    return challenges.map(challenge => {
      const { title, dashedName } = challenge;
      return (
        <p
          className={ challengeClassName }
          key={ title }>
          <a href={ `/challenges/${dashedName}` }>
            { title }
            <span className='sr-only'>complete</span>
          </a>
        </p>
      );
    });
  }

  renderBlocks(blocks) {
    if (!Array.isArray(blocks) || !blocks.length) {
      return <div>No Blocks Found</div>;
    }
    return blocks.map(block => {
      const { title, time, challenges } = block;
      return (
        <Panel
          bsClass='map-accordion-panel-nested'
          collapsible={ true }
          expanded={ true }
          header={
            <div>
              <h3><FA name='caret-right' />{ title }</h3>
              <span className='challenge-block-time'>({ time })</span>
            </div>
          }
          id={ title }
          key={ title }>
          { this.renderChallenges(challenges) }
        </Panel>
      );
    });
  }

  renderSuperBlocks(superBlocks) {
    if (!Array.isArray(superBlocks) || !superBlocks.length) {
      return <div>No Super Blocks</div>;
    }
    return superBlocks.map((superBlock) => {
      const { title, blocks } = superBlock;
      return (
        <Panel
          bsClass='map-accordion-panel'
          collapsible={ true }
          expanded={ true }
          header={ <h2><FA name='caret-right' />{ title }</h2> }
          id={ title }
          key={ title }>
          <div
            className='map-accordion-block'>
            { this.renderBlocks(blocks) }
          </div>
        </Panel>
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
        </div>
      </div>
    );
  }
}
