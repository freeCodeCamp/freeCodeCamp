import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Spacer } from '../../../components/helpers';
import { generateIconComponent } from '../../../assets/icons';

const propTypes = {
  superBlock: PropTypes.string
};

function SuperBlockIntro(props) {
  const { t } = useTranslation();
  const { superBlock } = props;

  const superBlockIntroObj = t(`intro:${superBlock}`);
  const {
    title: i18nSuperBlock,
    intro: superBlockIntroText,
    info: superBlockInfoText
  } = superBlockIntroObj;

  return (
    <>
      <h1 className='text-center big-heading'>{i18nSuperBlock}</h1>
      <Spacer />
      {generateIconComponent(superBlock, 'cert-header-icon')}
      <Spacer />
      {superBlockIntroText.map((str, i) => (
        <p key={i}>{str}</p>
      ))}
      {superBlockInfoText && (
        <div className='alert alert-info' style={{ marginTop: '2rem' }}>
          {superBlockInfoText}
        </div>
      )}
    </>
  );
}

SuperBlockIntro.displayName = 'SuperBlockIntro';
SuperBlockIntro.propTypes = propTypes;

export default SuperBlockIntro;
