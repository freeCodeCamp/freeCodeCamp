import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import { PrivateBadge } from './private-badge';
import './widget-header.css';

interface WidgetHeaderProps {
  title: string;
  isPrivate?: boolean;
  isSessionUser: boolean;
  onToggle?: () => void;
  onEdit?: () => void;
}

export const WidgetHeader = ({
  title,
  isPrivate = false,
  isSessionUser,
  onToggle,
  onEdit
}: WidgetHeaderProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className='widget-header'>
      <div className='widget-header-left'>
        <h2>{title}</h2>
        {isSessionUser && isPrivate && <PrivateBadge />}
      </div>
      {isSessionUser && (
        <div className='widget-header-actions'>
          {onToggle && (
            <label className='widget-toggle'>
              <input
                type='checkbox'
                checked={!isPrivate}
                onChange={onToggle}
                aria-label={
                  isPrivate
                    ? t('aria.make-public', { section: title })
                    : t('aria.make-private', { section: title })
                }
              />
              <span className='widget-toggle-slider' />
            </label>
          )}
          {onEdit && (
            <Button
              onClick={onEdit}
              size='small'
              className='widget-edit-btn'
              aria-label={t('aria.edit-section', { section: title })}
            >
              <FontAwesomeIcon icon={faPen} />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
