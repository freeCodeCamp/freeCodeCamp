import { Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import GreenPass from '../../../../assets/icons/green-pass';
import Fail from '../../../../assets/icons/fail';
import Spacer from '../../../../components/helpers/spacer';
import { submitChallenge } from '../../redux/actions';
import { examResultsSelector } from '../../redux/selectors';

interface ExamResultQuestion {
  question: string;
  answer: string;
  correct: boolean;
}

interface ExamResults {
  timeInSeconds: number;
  results: ExamResultQuestion[];
}

interface ExamResultsProps {
  examResults: ExamResults;
  submitExamResults: () => void;
  title: string;
  submitChallenge: () => void;
}

const mapStateToProps = createSelector(
  examResultsSelector,
  (examResults: ExamResults) => ({
    examResults
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      submitChallenge
    },
    dispatch
  );

function ExamResults({
  examResults: { timeInSeconds, results },
  title,
  submitExamResults
}: ExamResultsProps): JSX.Element {
  const { t } = useTranslation();

  const correctAnswers = results.filter(r => r.correct);
  const correctPercent = (correctAnswers.length / results.length) * 100;

  return (
    <div className='exam-wrapper'>
      <div className='exam-header'>
        <div>{title} Results</div>
      </div>
      <hr />
      <Spacer size='medium' />

      <div className='exam-results'>
        <div>Time: {timeInSeconds}</div>
        <div>
          {correctAnswers.length} of {results.length} correct answers |{' '}
          {correctPercent}%
        </div>
        <Spacer size='medium' />
        {results.map((result, index) => (
          <>
            <div className='exam-result' key={index}>
              <div className='exam-result-icon'>
                {result.correct ? <GreenPass /> : <Fail />}
              </div>

              <div className='exam-result-questions'>
                <div className='exam-result-question-label'>
                  Question {index + 1}
                </div>
                <div className='exam-result-question'>{result.question}</div>
                <div className='exam-result-answer-label'>Your Answer:</div>
                <div className='exam-result-answer'>{result.answer}</div>
              </div>
            </div>
            <Spacer size='medium' />
          </>
        ))}
      </div>
      <Spacer size='medium' />
      <div className='exam-buttons'>
        <Button
          block={true}
          className='exam-button'
          bsStyle='primary'
          data-cy='submit-exam-results'
          onClick={submitExamResults}
        >
          {t('buttons.submit-exam-results')}
        </Button>
      </div>
    </div>
  );
}

ExamResults.displayName = 'ExamResults';

export default connect(mapStateToProps, mapDispatchToProps)(ExamResults);
