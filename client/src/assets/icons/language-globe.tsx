import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function LanguageGlobe(): JSX.Element {
  return <FontAwesomeIcon icon={faLanguage} size='xl' />;
}

LanguageGlobe.displayName = 'LanguageGlobe';

export default LanguageGlobe;
