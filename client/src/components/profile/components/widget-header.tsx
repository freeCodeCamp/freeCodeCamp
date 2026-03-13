import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import { PrivateBadge } from './private-badge';
import DropDown from '../../../assets/icons/dropdown';
import './widget-header.css';

interface WidgetHeaderProps {
  title: string;
  isPrivate?: boolean;
  isSessionUser: boolean;
  onToggle?: () => void;
  onEdit?: () => void;
  onAdd?: () => void;
  addLabel?: string;
  onCollapseToggle?: () => void;
  isExpanded?: boolean;
  collapseLabel?: string;
}

export const WidgetHeader = ({
  title,
  isPrivate = false,
  isSessionUser,
  onToggle,
  onEdit,
  onAdd,
  addLabel,
  onCollapseToggle,
  isExpanded = true,
  collapseLabel
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
          {onCollapseToggle && (
            <Button
              onClick={onCollapseToggle}
              size='small'
              className='widget-collapse-btn'
              aria-expanded={isExpanded}
              aria-label={collapseLabel || title}
            >
              <span
                className={`widget-collapse-chevron${isExpanded ? '' : ' collapsed'}`}
                aria-hidden='true'
              >
                <DropDown />
              </span>
            </Button>
          )}
          {onAdd && (
            <Button
              onClick={onAdd}
              size='small'
              className='widget-add-btn'
              aria-label={addLabel || title}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
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
