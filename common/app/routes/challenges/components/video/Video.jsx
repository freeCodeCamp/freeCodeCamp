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
  ({ challenge: { title } }, shouldShowQuestions) => ({
    title,
    shouldShowQuestions
  })
);

// export plain component for testing
export class Video extends React.Component {
  static displayName = 'Video';

  static propTypes = {
    // actions
    resetUi: PropTypes.func,
    // ui
    title: PropTypes.string,
    params: PropTypes.object,
    shouldShowQuestions: PropTypes.bool,
    updateTitle: PropTypes.func
  };

  componentWillMount() {
    const { updateTitle } = this.props;
    updateTitle(this.props.title);
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

// export redux aware component
export default connect(
  mapStateToProps,
  bindableActions
)(Video);
