import { Button, Form } from '@freecodecamp/react-bootstrap';
import React, { useState } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

import { userSelector } from '../../redux/selectors';
import type { ProfileUI } from '../../redux/prop-types';
import { submitProfileUI } from '../../redux/settings/actions';

import FullWidthRow from '../helpers/full-width-row';
import Spacer from '../helpers/spacer';
import SectionHeader from './section-header';
import ToggleSetting from './toggle-setting';

const mapStateToProps = createSelector(userSelector, user => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  user
}));

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ submitProfileUI }, dispatch);

type PrivacyProps = {
  submitProfileUI: (profileUI: ProfileUI) => void;
  t: TFunction;
  user: {
    profileUI: ProfileUI;
    username: string;
  };
};

function PrivacySettings({
  submitProfileUI,
  t,
  user
}: PrivacyProps): JSX.Element {
  const [privacyValues, setPrivacyValues] = useState({ ...user.profileUI });

  const [madeChanges, setMadeChanges] = useState(false);

  function toggleFlag(flag: keyof ProfileUI): () => void {
    return () => {
      setMadeChanges(true);
      setPrivacyValues({ ...privacyValues, [flag]: !privacyValues[flag] });
    };
  }

  function submitNewProfileSettings(e: React.FormEvent) {
    e.preventDefault();
    submitProfileUI(privacyValues);
    setMadeChanges(false);
  }

  return (
    <div className='privacy-settings' id='privacy-settings'>
      <SectionHeader>{t('settings.headings.privacy')}</SectionHeader>
      <FullWidthRow>
        <p>{t('settings.privacy')}</p>
        <Form inline={true} onSubmit={submitNewProfileSettings}>
          <div role='group' aria-label={t('settings.headings.privacy')}>
            <ToggleSetting
              action={t('settings.labels.my-profile')}
              explain={t('settings.disabled')}
              flag={privacyValues['isLocked']}
              flagName='isLocked'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={toggleFlag('isLocked')}
            />
            <ToggleSetting
              action={t('settings.labels.my-name')}
              explain={t('settings.private-name')}
              flag={!privacyValues['showName']}
              flagName='name'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={toggleFlag('showName')}
            />
            <ToggleSetting
              action={t('settings.labels.my-location')}
              flag={!privacyValues['showLocation']}
              flagName='showLocation'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={toggleFlag('showLocation')}
            />
            <ToggleSetting
              action={t('settings.labels.my-about')}
              flag={!privacyValues['showAbout']}
              flagName='showAbout'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={toggleFlag('showAbout')}
            />
            <ToggleSetting
              action={t('settings.labels.my-points')}
              flag={!privacyValues['showPoints']}
              flagName='showPoints'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={toggleFlag('showPoints')}
            />
            <ToggleSetting
              action={t('settings.labels.my-heatmap')}
              flag={!privacyValues['showHeatMap']}
              flagName='showHeatMap'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={toggleFlag('showHeatMap')}
            />
            <ToggleSetting
              action={t('settings.labels.my-certs')}
              explain={t('settings.disabled')}
              flag={!privacyValues['showCerts']}
              flagName='showCerts'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={toggleFlag('showCerts')}
            />
            <ToggleSetting
              action={t('settings.labels.my-portfolio')}
              flag={!privacyValues['showPortfolio']}
              flagName='showPortfolio'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={toggleFlag('showPortfolio')}
            />
            <ToggleSetting
              action={t('settings.labels.my-timeline')}
              explain={t('settings.disabled')}
              flag={!privacyValues['showTimeLine']}
              flagName='showTimeLine'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={toggleFlag('showTimeLine')}
            />
            <ToggleSetting
              action={t('settings.labels.my-donations')}
              flag={!privacyValues['showDonation']}
              flagName='showPortfolio'
              offLabel={t('buttons.public')}
              onLabel={t('buttons.private')}
              toggleFlag={toggleFlag('showDonation')}
            />
          </div>
          <Button
            type='submit'
            bsSize='lg'
            bsStyle='primary'
            data-cy='save-privacy-settings'
            block={true}
            aria-disabled={!madeChanges}
            {...(!madeChanges && { tabIndex: -1 })}
          >
            {t('buttons.save')}{' '}
            <span className='sr-only'>{t('settings.headings.privacy')}</span>
          </Button>
        </Form>
      </FullWidthRow>
      <FullWidthRow>
        <Spacer size='medium' />
        <p>{t('settings.data')}</p>
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          download={`${user.username}.json`}
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(user)
          )}`}
        >
          {t('buttons.download-data')}
        </Button>
      </FullWidthRow>
    </div>
  );
}

PrivacySettings.displayName = 'PrivacySettings';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(PrivacySettings));
