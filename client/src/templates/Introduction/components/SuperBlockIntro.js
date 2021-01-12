import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { dasherize } from '../../../../../utils/slugs';
import { Spacer } from '../../../components/helpers';

const propTypes = {
  superBlock: PropTypes.string
};

function SuperBlockIntro(props) {
  const { t } = useTranslation();
  const { superBlock } = props;
  const superBlockDashedName = dasherize(superBlock);

  const superBlockIntroObj = t(`intro:${superBlockDashedName}`);
  const {
    title: i18nSuperBlock,
    image: superBlockImage,
    intro: superBlockIntroText
  } = superBlockIntroObj;

  return (
    <>
      <Spacer size={2} />
      <h1 className='text-center'>{i18nSuperBlock}</h1>
      <Spacer />
      <div style={{ margin: 'auto', maxWidth: '500px' }}>
        <img
          alt='building a website'
          src={superBlockImage}
          style={{
            backgroundColor: '#f5f6f7',
            padding: '15px',
            width: '100%'
          }}
        />
      </div>
      <Spacer />
      {superBlockIntroText.map((str, i) => (
        <p key={i}>{str}</p>
      ))}
      <Spacer size={2} />
    </>
  );
}

SuperBlockIntro.displayName = 'SuperBlockIntro';
SuperBlockIntro.propTypes = propTypes;

export default SuperBlockIntro;
