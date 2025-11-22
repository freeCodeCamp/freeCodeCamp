import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../../helpers';
import FlameIcon from '../../../assets/icons/flame';
import { calculateStreaks } from '../../profile/components/stats';

import './streak-display.css';

interface StreakDisplayProps {
  username: string;
  calendar: Record<string, number>;
}

const StreakDisplay = ({
  username,
  calendar
}: StreakDisplayProps): JSX.Element => {
  const { t } = useTranslation();
  const [currentStreak, setCurrentStreak] = useState(0);

  useEffect(() => {
    const { currentStreak } = calculateStreaks(calendar);
    setCurrentStreak(currentStreak);
  }, [calendar]);

  return (
    <Link
      className='streak-display-link'
      to={`/${username}`}
      aria-label={t('aria.streak-count', { count: currentStreak })}
      title={t('aria.streak-count', { count: currentStreak })}
    >
      <FlameIcon className='streak-icon' />
      <span className='streak-count'>{currentStreak}</span>
    </Link>
  );
};

StreakDisplay.displayName = 'StreakDisplay';
export default StreakDisplay;
