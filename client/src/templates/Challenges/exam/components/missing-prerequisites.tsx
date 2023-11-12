import { Alert } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
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
    <Alert data-cy='missing-prerequisites-alert' bsStyle='danger'>
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
