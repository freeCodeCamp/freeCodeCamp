import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { useTranslation } from 'react-i18next';
import { Panel, Button } from '@freecodecamp/ui';
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

function FoundationalCSharpSurveyAlert({
  openSurveyModal
}: FoudationalCSharpSurveyAlertProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Panel variant='info' data-playwright-test-label='c-sharp-survey-alert'>
      <Panel.Heading>{t('survey.foundational-c-sharp.title')}</Panel.Heading>
      <Panel.Body className='text-center'>
        <p>{t('survey.misc.two-questions')}</p>
        <Spacer size='small' />
        <Button
          block={true}
          variant='info'
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

FoundationalCSharpSurveyAlert.displayName = 'FoundationalCSharpSurveyAlert';

export default connect(null, mapDispatchToProps)(FoundationalCSharpSurveyAlert);
