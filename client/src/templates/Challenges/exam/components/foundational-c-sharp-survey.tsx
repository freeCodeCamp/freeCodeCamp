import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Button, Modal } from '@freecodecamp/ui';

import { SurveyResults, SurveyResponse } from '../../../../redux/prop-types';
import { Spacer } from '../../../../components/helpers';
import { setIsProcessing, submitSurvey } from '../../../../redux/actions';
import { closeModal } from '../../redux/actions';
import { isProcessingSelector } from '../../../../redux/selectors';

interface FoundationalCSharpSurveyProps {
  closeSurveyModal: () => void;
  submitSurvey: (arg0: SurveyResults) => void;
  isProcessing: boolean;
  setIsProcessing: (arg0: boolean) => void;
}

interface SurveyState {
  questionIndex: number;
  responseIndex: null | number;
}

const mapStateToProps = createSelector(
  isProcessingSelector,
  (isProcessing: boolean) => ({
    isProcessing
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      closeSurveyModal: () => closeModal('survey'),
      setIsProcessing,
      submitSurvey
    },
    dispatch
  );

function FoundationalCSharpSurvey({
  closeSurveyModal,
  submitSurvey,
  setIsProcessing,
  isProcessing
}: FoundationalCSharpSurveyProps): JSX.Element {
  const { t } = useTranslation();

  // submit English values to server and save those to database
  const englishTitle = t('survey.foundational-c-sharp.title', { lng: 'en' });
  const englishSurvey = [
    {
      question: t('survey.foundational-c-sharp.q1.q', { lng: 'en' }),
      options: [
        t('survey.foundational-c-sharp.q1.o1', { lng: 'en' }),
        t('survey.foundational-c-sharp.q1.o2', { lng: 'en' }),
        t('survey.foundational-c-sharp.q1.o3', { lng: 'en' }),
        t('survey.foundational-c-sharp.q1.o4', { lng: 'en' })
      ]
    },
    {
      question: t('survey.foundational-c-sharp.q2.q', { lng: 'en' }),
      options: [
        t('survey.foundational-c-sharp.q2.o1', { lng: 'en' }),
        t('survey.foundational-c-sharp.q2.o2', { lng: 'en' }),
        t('survey.foundational-c-sharp.q2.o3', { lng: 'en' }),
        t('survey.foundational-c-sharp.q2.o4', { lng: 'en' }),
        t('survey.foundational-c-sharp.q2.o5', { lng: 'en' })
      ]
    }
  ];

  // display survey in i18n
  const i18nSurvey = [
    {
      question: t('survey.foundational-c-sharp.q1.q'),
      options: [
        t('survey.foundational-c-sharp.q1.o1'),
        t('survey.foundational-c-sharp.q1.o2'),
        t('survey.foundational-c-sharp.q1.o3'),
        t('survey.foundational-c-sharp.q1.o4')
      ]
    },
    {
      question: t('survey.foundational-c-sharp.q2.q'),
      options: [
        t('survey.foundational-c-sharp.q2.o1'),
        t('survey.foundational-c-sharp.q2.o2'),
        t('survey.foundational-c-sharp.q2.o3'),
        t('survey.foundational-c-sharp.q2.o4'),
        t('survey.foundational-c-sharp.q2.o5')
      ]
    }
  ];

  const emptySurvey: SurveyState[] = i18nSurvey.map((question, i) => ({
    questionIndex: i,
    responseIndex: null
  }));

  const [surveyResponses, setSurveyResponses] = useState(emptySurvey);

  function handleOptionChange(questionIndex: number, responseIndex: number) {
    const newSurveyResponses = Array.from(surveyResponses);
    newSurveyResponses[questionIndex].responseIndex = responseIndex;
    setSurveyResponses(newSurveyResponses);
  }

  function createSurveyResults() {
    setIsProcessing(true);

    // convert responses to English before submitting
    const englishResponses: SurveyResponse[] = surveyResponses.map(r => ({
      question: englishSurvey[r.questionIndex].question,
      response:
        englishSurvey[r.questionIndex].options[r.responseIndex as number]
    }));

    const surveyResults = {
      title: englishTitle,
      responses: englishResponses
    };

    submitSurvey(surveyResults);
  }

  const cantSubmitSurvey = surveyResponses.some(q => q.responseIndex === null);

  return (
    <>
      <Modal.Header closeButtonClassNames='close'>
        {t('survey.foundational-c-sharp.title')}
      </Modal.Header>
      <Modal.Body>
        {i18nSurvey.map((question, i) => (
          <div key={i}>
            <Spacer size='medium' />
            <div>{question.question}</div>
            <Spacer size='small' />
            <div className='video-quiz-options'>
              {question.options.map((option, j) => (
                <label className='video-quiz-option-label' key={j}>
                  <input
                    checked={surveyResponses[i].responseIndex === j}
                    className='sr-only'
                    name={question.question}
                    onChange={() => handleOptionChange(i, j)}
                    type='radio'
                    value={option}
                  />{' '}
                  <span className='video-quiz-input-visible'>
                    {surveyResponses[i].responseIndex === j ? (
                      <span className='video-quiz-selected-input' />
                    ) : null}
                  </span>
                  {option}{' '}
                </label>
              ))}
            </div>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button
          block={true}
          size='medium'
          variant='primary'
          disabled={cantSubmitSurvey || isProcessing}
          onClick={createSurveyResults}
        >
          {t('survey.misc.submit')}
        </Button>
        <Spacer size='xxSmall' />
        <Button
          block={true}
          size='medium'
          variant='primary'
          disabled={isProcessing}
          onClick={closeSurveyModal}
        >
          {t('survey.misc.exit')}
        </Button>
      </Modal.Footer>
    </>
  );
}

FoundationalCSharpSurvey.displayName = 'FoundationalCSharpSurvey';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoundationalCSharpSurvey);
