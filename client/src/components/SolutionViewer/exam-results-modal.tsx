import { Button, Modal, Row } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GeneratedExamResults } from '../../redux/prop-types';
import { closeModal } from '../../templates/Challenges/redux/actions';
import { isExamResultsModalOpenSelector } from '../../templates/Challenges/redux/selectors';
import { formatSecondsToTime } from '../../utils/format-seconds';
import { Spacer } from '../helpers';

type ExamResultsModalProps = {
  projectTitle: string;
  examResults: GeneratedExamResults | null | undefined;
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
}: ExamResultsModalProps): JSX.Element => {
  const { t } = useTranslation();

  if (!examResults) return <></>;

  const {
    numberOfCorrectAnswers,
    examTimeInSeconds,
    numberOfQuestionsInExam,
    percentCorrect
  } = examResults;

  return (
    <Modal
      aria-labelledby='solution-viewer-modal-title'
      bsSize='large'
      onHide={() => {
        closeModal('examResults');
      }}
      show={isOpen}
      size='lg'
    >
      <Modal.Header closeButton={true}>
        <Modal.Title id='solution-viewer-modal-title'>
          {t('settings.labels.results-for', { projectTitle })}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ paddingLeft: 30 }}>
        <Spacer size='medium' />
        <Row>
          {t('learn.exam.number-of-questions', {
            n: numberOfQuestionsInExam
          })}
        </Row>{' '}
        <Spacer size='medium' />
        <Row>
          {t('learn.exam.correct-answers', { n: numberOfCorrectAnswers })}
        </Row>{' '}
        <Spacer size='medium' />
        <Row>{t('learn.exam.percent-correct', { n: percentCorrect })}</Row>
        <Spacer size='medium' />{' '}
        <Row>
          {t('learn.exam.time', { t: formatSecondsToTime(examTimeInSeconds) })}
        </Row>
        <Spacer size='medium' />
      </Modal.Body>
      <Modal.Footer>
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
