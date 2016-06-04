import React, { PropTypes } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import Youtube from 'react-youtube';
import PureComponent from 'react-pure-render/component';
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';

import { challengeSelector } from '../../redux/selectors';

const bindableActions = {};

const mapStateToProps = createSelector(
  challengeSelector,
  state => state.app.windowHeight,
  state => state.app.navHeight,
  state => state.app.isSignedIn,
  state => state.challengesApp.tests,
  state => state.challengesApp.output,
  (
    {
      challenge: {
        id,
        title,
        description,
        challengeSeed: [ videoId = ''] = []
      } = {}
    },
    windowHeight,
    navHeight,
    isSignedIn,
    tests,
    output
  ) => ({
    id,
    videoId,
    title,
    description,
    height: windowHeight - navHeight - 20,
    tests,
    output,
    isSignedIn
  })
);

export class Project extends PureComponent {
  static displayName = 'Project';
  static propTypes = {
    id: PropTypes.string,
    videoId: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    isCompleted: PropTypes.bool,
    isSignedIn: PropTypes.bool
  };

  renderIcon(isCompleted) {
    if (!isCompleted) {
      return null;
    }
    return (
      <i
        className='ion-checkmark-circled text-primary'
        title='Completed'
      />
    );
  }

  renderDescription(title = '', description = []) {
    return description
      .map((line, index) => (
        <Row
          className='checklist-element'
          id={ title + index }
          key={ title.slice(6) + index }
        >
          <Col
            className='padded-ionic-icon text-center'
            md={ 2 }
            sm={ 1 }
            xs={ 3 }
          >
            <input
              className='challenge-list-checkbox'
              type='checkbox'
            />
          </Col>
          <Col
            md={ 10 }
            sm={ 11 }
            xs={ 9 }
          >
            <li
              className='step-text wrappable'
              dangerouslySetInnerHTML={{ __html: line }}
            />
          </Col>
        </Row>
      ));
  }

  render() {
    const {
      id,
      title,
      videoId,
      isCompleted,
      description,
      isSignedIn
    } = this.props;


    const buttonCopy = isSignedIn ?
      "I've completed this challenge" :
      'Go to my next challenge';
    return (
      <div>
        <Col md={ 4 }>
          <h4 className='text-center challenge-instructions-title'>
            { title }
            { this.renderIcon(isCompleted) }
          </h4>
          <hr />
          <ol>
            { this.renderDescription(title, description) }
          </ol>
        </Col>
        <Col
          md={ 8 }
          xs={ 12 }
        >
          <div className='embed-responsive embed-responsive-16by9'>
            <Youtube
              className='embed-responsive-item'
              id={ id }
              videoId={ videoId }
            />
          </div>
          <br />
          <Button
            block={ true }
            bsStyle='primary'
            className='btn-big'
          >
            { buttonCopy } (ctrl + enter)
          </Button>
          <div className='button-spacer' />
          <ButtonGroup justified={ true }>
            <Button
              bsStyle='primary'
              className='btn-primary-ghost btn-big'
              componentClass='div'
              >
              Help
            </Button>
            <Button
              bsStyle='primary'
              className='btn-primary-ghost btn-big'
              componentClass='div'
              >
              Bug
            </Button>
          </ButtonGroup>
          <br />
        </Col>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  bindableActions
)(Project);
