import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@freecodecamp/ui';

import Spacer from '../../../../components/helpers/spacer';
import { PrerequisiteChallenge } from '../../../../redux/prop-types';

interface MissingPrerequisitesProps {
  missingPrerequisites: PrerequisiteChallenge[];
}

function MissingPrerequisites({
  missingPrerequisites
}: MissingPrerequisitesProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Alert variant='danger'>
      <p>{t('learn.exam.not-qualified')}</p>
      <Spacer size='small' />
      <ul>
        {missingPrerequisites.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </Alert>
  );
}

MissingPrerequisites.displayName = 'MissingPrerequisites';

export default MissingPrerequisites;
