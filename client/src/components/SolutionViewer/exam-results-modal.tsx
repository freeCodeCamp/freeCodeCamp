import { connect } from 'react-redux';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Button, Modal, Spacer } from '@freecodecamp/ui';

import type { ExamResults } from '../../redux/prop-types';
import { closeModal } from '../../templates/Challenges/redux/actions';
import { isExamResultsModalOpenSelector } from '../../templates/Challenges/redux/selectors';
import { formatSecondsToTime } from '../../utils/format-seconds';

type ExamResultsModalProps = {
  projectTitle: string;
  examResults: ExamResults | null | undefined;
  closeModal: (arg: string) => void;
  isOpen: boolean;
};

const mapStateToProps = (state: unknown) => ({
  isOpen: isExamResultsModalOpenSelector(state) as boolean
});

const mapDispatchToProps = {
  closeModal
};

const ExamResultsModal = ({
  projectTitle,
  examResults = {
    numberOfCorrectAnswers: 0,
    examTimeInSeconds: 0,
    numberOfQuestionsInExam: 0,
    percentCorrect: 0,
    passingPercent: 0,
    passed: false
  },
  isOpen,
  closeModal
}: ExamResultsModalProps): JSX.Element | null => {
  const { t } = useTranslation();

  if (!examResults) return null;

  const hasDetailedResults = 'numberOfCorrectAnswers' in examResults;

  return (
    <Modal
      onClose={() => {
        closeModal('examResults');
      }}
      open={isOpen}
      size='large'
    >
      <Modal.Header showCloseButton={true} closeButtonClassNames='close'>
        {t('settings.labels.results-for', { projectTitle })}
      </Modal.Header>
      <Modal.Body alignment='start'>
        <Spacer size='m' />
        <div style={{ paddingLeft: '30px' }}>
          {hasDetailedResults ? (
            <>
              <Row>
                {t('learn.exam.number-of-questions', {
                  n: examResults.numberOfQuestionsInExam
                })}
              </Row>{' '}
              <Spacer size='m' />
              <Row>
                {t('learn.exam.correct-answers', {
                  n: examResults.numberOfCorrectAnswers
                })}
              </Row>{' '}
              <Spacer size='m' />
              <Row>
                {t('learn.exam.percent-correct', {
                  n: examResults.percentCorrect
                })}
              </Row>
              <Spacer size='m' />{' '}
              <Row>
                {t('learn.exam.time', {
                  t: formatSecondsToTime(examResults.examTimeInSeconds)
                })}
              </Row>
            </>
          ) : (
            <Row>
              {t(
                examResults.passed
                  ? 'learn.exam.passed'
                  : 'learn.exam.not-passed'
              )}
            </Row>
          )}
        </div>
        <Spacer size='m' />
      </Modal.Body>
      <Modal.Footer alignment='end'>
        <Button
          onClick={() => {
            closeModal('examResults');
          }}
        >
          {t('buttons.close')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ExamResultsModal.displayName = 'ExamResultsModal';

export default connect(mapStateToProps, mapDispatchToProps)(ExamResultsModal);
