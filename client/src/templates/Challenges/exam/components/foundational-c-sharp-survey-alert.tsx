import { Button, Panel } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { useTranslation } from 'react-i18next';
import { openModal } from '../../redux/actions';
import Spacer from '../../../../components/helpers/spacer';
import SurveyModal from './survey-modal';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      openSurveyModal: () => openModal('survey')
    },
    dispatch
  );

interface FoudationalCSharpSurveyAlertProps {
  openSurveyModal: () => void;
}

function FoudationalCSharpSurveyAlert({
  openSurveyModal
}: FoudationalCSharpSurveyAlertProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Panel data-cy='c-sharp-survey-alert' bsStyle='info'>
      <Panel.Heading>{t('survey.foundational-c-sharp.title')}</Panel.Heading>
      <Panel.Body className='text-center'>
        <p>{t('survey.misc.two-questions')}</p>
        <Spacer size='small' />
        <Button
          block={true}
          bsSize='md'
          bsStyle='info'
          data-cy='start-csharp-survey-btn'
          className='btn-invert'
          onClick={openSurveyModal}
          type='button'
        >
          {t('survey.misc.take')}
        </Button>
        <SurveyModal />
      </Panel.Body>
    </Panel>
  );
}

FoudationalCSharpSurveyAlert.displayName = 'FoundationalCSharpSurveyAlert';

export default connect(null, mapDispatchToProps)(FoudationalCSharpSurveyAlert);
