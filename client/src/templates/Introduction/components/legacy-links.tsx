import React from 'react';
import { useTranslation } from 'react-i18next';
import { Callout } from '@freecodecamp/ui';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { isRelationalDbCert, isExamCert } from '../../../utils/is-a-cert';
import { CodeAllyDown } from '../../../components/growth-book/codeally-down';

import envData from '../../../../config/env.json';
import { OnaNote } from '../../../components/growth-book/ona-note';

const { clientLocale } = envData;

interface LegacyLinksProps {
  superBlock: SuperBlocks;
}

function LegacyLinks({ superBlock }: LegacyLinksProps): JSX.Element {
  const { t } = useTranslation();

  if (isRelationalDbCert(superBlock)) {
    return (
      <>
        <CodeAllyDown />
        {clientLocale != 'english' && (
          <Callout variant='note' label={t('misc.note')}>
            <p>{t('intro:misc-text.english-only')}</p>
          </Callout>
        )}
      </>
    );
  } else if (isExamCert(superBlock) && clientLocale != 'english') {
    return (
      <Callout variant='note' label={t('misc.note')}>
        <p>{t('intro:misc-text.exam-english-only')}</p>
      </Callout>
    );
  } else {
    return <OnaNote superBlock={superBlock} />;
  }
}

export default LegacyLinks;
