import React, { PropTypes, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { createSelector } from 'reselect';

import {
  selectChoice,
  incrementCorrect
} from './redux';

const mapStateToProps = createSelector(
  () => ({})
);

function mapDispatchToProps(dispatch) {
  return () => bindActionCreators({
    selectChoice,
    incrementCorrect
  }, dispatch);
}

const propTypes = {
  choice: PropTypes.string,
  choiceIndex: PropTypes.number,
  incrementCorrect: PropTypes.func,
  isChoiceSelected: PropTypes.bool,
  isCorrectChoice: PropTypes.bool,
  selectChoice: PropTypes.func,
  selected: PropTypes.bool
};

export class Choice extends PureComponent {

  constructor(props) {
    super(props);
    this.selectChoice = this.selectChoice.bind(this);
  }

  selectChoice() {
    if (this.props.isChoiceSelected) {
      return;
    }
    if (this.props.isCorrectChoice) {
      this.props.incrementCorrect();
    }
    this.props.selectChoice(this.props.choiceIndex);
  }

  render() {
    const choiceClass = classnames({
      choice: true,
      selected: this.props.selected,
      correct: this.props.isCorrectChoice,
      reveal: this.props.isChoiceSelected
    });

    return (
      <div
        className={choiceClass}
        onClick={this.selectChoice}
        >
        <div className='radio'>
          <div className='inside' />
        </div>

        <div
          className='text'
          dangerouslySetInnerHTML={{__html: this.props.choice}}
        />
      </div>
    );
  }
}

Choice.displayName = 'Choice';
Choice.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choice);
