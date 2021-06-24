import React from 'react';
import { useTranslation } from 'react-i18next';

import './offline-warning.css';

const delayInMilliSeconds = 5000;
let id: ReturnType<typeof setTimeout>;

interface OfflineWarningProps {
  isOnline: boolean;
  isSignedIn: boolean;
}

function OfflineWarning({
  isOnline,
  isSignedIn
}: OfflineWarningProps): JSX.Element | null {
  const { t } = useTranslation();
  const [showWarning, setShowWarning] = React.useState(false);

  if (!isSignedIn || isOnline) {
    clearTimeout(id);
    if (showWarning) setShowWarning(false);
  } else {
    timeout();
  }

  function timeout() {
    id = setTimeout(function () {
      setShowWarning(true);
    }, delayInMilliSeconds);
  }

  return showWarning ? (
    <div className='offline-warning alert-info'>{t('misc.offline')}</div>
  ) : null;
}

OfflineWarning.displayName = 'OfflineWarning';

export default OfflineWarning;
