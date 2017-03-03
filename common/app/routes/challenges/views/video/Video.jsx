import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { createSelector } from 'reselect';

import Lecture from './Lecture.jsx';
import Questions from './Questions.jsx';
import { resetUi } from '../../redux/actions';
import { updateTitle } from '../../../../redux/actions';
import { challengeSelector } from '../../redux/selectors';

const bindableActions = { resetUi, updateTitle };
const mapStateToProps = createSelector(
  challengeSelector,
  state => state.challengesApp.shouldShowQuestions,
  ({ title }, shouldShowQuestions) => ({
    title,
    shouldShowQuestions
  })
);
const propTypes = {
  params: PropTypes.object,
  resetUi: PropTypes.func,
  shouldShowQuestions: PropTypes.bool,
  title: PropTypes.string,
  updateTitle: PropTypes.func
};

export class Video extends React.Component {
  componentWillMount() {
    const { updateTitle, title } = this.props;
    updateTitle(title);
  }

  componentWillUnmount() {
    this.props.resetUi();
  }

  componentWillReceiveProps({ title }) {
    if (this.props.title !== title) {
      this.props.resetUi();
    }
  }

  renderBody(showQuestions) {
    if (showQuestions) {
      return <Questions />;
    }
    return <Lecture />;
  }

  render() {
    const {
      title,
      shouldShowQuestions
    } = this.props;
    return (
      <Col xs={ 12 }>
        <header className='text-center'>
          <h4>{ title }</h4>
        </header>
        <hr />
        <div className='spacer' />
        <section
          className={ 'text-center' }
          title={ title }
          >
          { this.renderBody(shouldShowQuestions) }
        </section>
      </Col>
    );
  }
}

Video.displayName = 'Video';
Video.propTypes = propTypes;

export default connect(
  mapStateToProps,
  bindableActions
)(Video);
