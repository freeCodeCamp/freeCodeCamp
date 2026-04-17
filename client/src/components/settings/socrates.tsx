import React from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';

import { updateMySocrates as updateMySocratesAction } from '../../redux/settings/actions';
import ToggleButtonSetting from './toggle-button-setting';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ updateMySocrates: updateMySocratesAction }, dispatch);

type SocratesProps = {
  socrates: boolean;
  t: TFunction;
  updateMySocrates: (socrates: { socrates: boolean }) => void;
};

function SocratesSettings({
  socrates,
  t,
  updateMySocrates
}: SocratesProps): JSX.Element {
  return (
    <div className='socrates-settings'>
      <ToggleButtonSetting
        action={t('settings.socrates.p1')}
        explain={t('settings.socrates.p2')}
        flag={!!socrates}
        flagName='socrates'
        offLabel={t('buttons.off')}
        onLabel={t('buttons.on')}
        toggleFlag={() => updateMySocrates({ socrates: !socrates })}
      />
    </div>
  );
}

SocratesSettings.displayName = 'SocratesSettings';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SocratesSettings));
