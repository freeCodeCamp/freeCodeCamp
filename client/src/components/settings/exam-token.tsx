import React, { useState } from 'react';
import { Button, Modal, Panel } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import { FullWidthRow, Spacer } from '../helpers';

const ExamToken = () => {
  const [examToken, setExamToken] = useState('');
  const [viewToken, setViewToken] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { t } = useTranslation();

  const generateExamToken = () => {
    // Generate a random exam token
    const token = Math.random().toString(36).slice(2, 15);
    setExamToken(token);
  };

  return (
    <FullWidthRow>
      <Panel variant='info'>
        <Panel.Heading>{t('exam-token.exam-token')}</Panel.Heading>
        <Panel.Body>
          <p>{t('exam-token.exam-token-note')}</p>
          {!examToken ? (
            <Button block={true} onClick={() => generateExamToken()}>
              {t('exam-token.generate-exam-token')}
            </Button>
          ) : (
            viewToken && (
              <p>
                {t('exam-token.your-exam-token')} <code>{examToken}</code>
              </p>
            )
          )}
          {examToken && !viewToken ? (
            <Button block={true} onClick={() => setViewToken(true)}>
              {t('exam-token.show-exam-token')}
            </Button>
          ) : (
            examToken && (
              <Button block={true} onClick={() => setViewToken(false)}>
                {t('exam-token.hide-exam-token')}
              </Button>
            )
          )}
          {examToken && (
            <>
              <Spacer size='small' />
              <Button
                variant='danger'
                block={true}
                onClick={() => setShowDeleteModal(true)}
              >
                {t('exam-token.delete-exam-token')}
              </Button>
            </>
          )}
        </Panel.Body>
      </Panel>
      <Modal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <Modal.Header>{t('exam-token.delete-exam-token')}</Modal.Header>
        <Modal.Body>
          <p>{t('exam-token.delete-exam-token-note')}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='danger'
            onClick={() => {
              setExamToken('');
              setShowDeleteModal(false);
            }}
          >
            {t('exam-token.delete-exam-token')}
          </Button>
          <Spacer size='small' />
          <Button onClick={() => setShowDeleteModal(false)}>
            {t('buttons.cancel')}
          </Button>
        </Modal.Footer>
      </Modal>
    </FullWidthRow>
  );
};

ExamToken.displayName = 'ExamToken';

export default ExamToken;
