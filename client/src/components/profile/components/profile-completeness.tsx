import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import isURL from 'validator/lib/isURL';
import type {
  PortfolioProjectData,
  ExperienceData
} from '../../../redux/prop-types';
import { FullWidthRow } from '../../helpers';
import GreenPass from '../../../assets/icons/green-pass';
import GreenNotCompleted from '../../../assets/icons/green-not-completed';
import DropDown from '../../../assets/icons/dropdown';
import './profile-completeness.css';

interface ProfileCompletenessProps {
  name: string;
  about: string;
  picture: string;
  location: string;
  githubProfile: string;
  linkedin: string;
  twitter: string;
  bluesky: string;
  website: string;
  portfolio: PortfolioProjectData[];
  experience: ExperienceData[];
}

interface CompletionItem {
  key: string;
  translationKey: string;
  isComplete: boolean;
  weight: number;
}

export const isValidPicture = (picture: string): boolean => {
  if (!picture || picture.trim() === '') return false;
  // Check for known placeholder patterns (same logic as avatar-renderer)
  if (/freecodecamp\.com\/sample-image/.test(picture)) return false;
  if (/example\.com|identicon\.org/.test(picture)) return false;
  // Must be a valid URL
  return isURL(picture, { require_protocol: true });
};

export const hasValue = (value: string): boolean =>
  Boolean(value && value.trim());

export const ProfileCompleteness = ({
  name,
  about,
  picture,
  location,
  githubProfile,
  linkedin,
  twitter,
  bluesky,
  website,
  portfolio,
  experience
}: ProfileCompletenessProps): JSX.Element | null => {
  const { t } = useTranslation();

  // Collapse by default if core profile items (name, picture, about) are complete
  const coreItemsComplete =
    hasValue(name) && isValidPicture(picture) && hasValue(about);
  const [isExpanded, setIsExpanded] = useState(!coreItemsComplete);

  const completionItems: CompletionItem[] = [
    {
      key: 'name',
      translationKey: 'profile.completeness.name',
      isComplete: hasValue(name),
      weight: 20
    },
    {
      key: 'location',
      translationKey: 'profile.completeness.location',
      isComplete: hasValue(location),
      weight: 5
    },
    {
      key: 'picture',
      translationKey: 'profile.completeness.picture',
      isComplete: isValidPicture(picture),
      weight: 20
    },
    {
      key: 'about',
      translationKey: 'profile.completeness.about',
      isComplete: hasValue(about),
      weight: 20
    },
    {
      key: 'social',
      translationKey: 'profile.completeness.social',
      isComplete:
        hasValue(githubProfile) ||
        hasValue(linkedin) ||
        hasValue(twitter) ||
        hasValue(bluesky) ||
        hasValue(website),
      weight: 10
    },
    {
      key: 'portfolio',
      translationKey: 'profile.completeness.portfolio',
      isComplete: portfolio.length > 0,
      weight: 15
    },
    {
      key: 'experience',
      translationKey: 'profile.completeness.experience',
      isComplete: experience.length > 0,
      weight: 10
    }
  ];

  const totalWeight = completionItems.reduce(
    (sum, item) => sum + item.weight,
    0
  );
  const completedWeight = completionItems
    .filter(item => item.isComplete)
    .reduce((sum, item) => sum + item.weight, 0);
  const percentage = Math.round((completedWeight / totalWeight) * 100);

  // Don't render if profile is complete
  if (percentage === 100) {
    return null;
  }

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <FullWidthRow>
      <div className='profile-completeness'>
        <button
          className='profile-completeness-header'
          onClick={toggleExpanded}
          aria-expanded={isExpanded}
          type='button'
        >
          <span
            className={`profile-completeness-chevron ${isExpanded ? 'expanded' : ''}`}
            aria-hidden='true'
          >
            <DropDown />
          </span>
          <div className='profile-completeness-bar-container'>
            <div
              className='profile-completeness-bar-fill'
              data-testid='profile-completeness-progress'
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className='profile-completeness-text'>
            {t('profile.completeness.heading', { percentage })}
          </span>
        </button>
        {isExpanded && (
          <ul className='profile-completeness-checklist'>
            {completionItems.map(item => (
              <li
                key={item.key}
                className={
                  item.isComplete
                    ? 'completeness-item-complete'
                    : 'completeness-item-incomplete'
                }
              >
                <span className='completeness-checkbox' aria-hidden='true'>
                  {item.isComplete ? (
                    <GreenPass hushScreenReaderText />
                  ) : (
                    <GreenNotCompleted hushScreenReaderText />
                  )}
                </span>
                {t(item.translationKey)}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Spacer size='m' />
    </FullWidthRow>
  );
};
