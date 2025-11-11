import React from 'react';

interface NoHitsSuggestionProps {
  title: string;
}

const NoHitsSuggestion = ({ title }: NoHitsSuggestionProps): JSX.Element => {
  return (
    <li className='ais-Hits-item'>
      <div className={'no-hits-footer fcc_suggestion_item'} role='region'>
        <span className='hit-name'>{title}</span>
      </div>
    </li>
  );
};

export default NoHitsSuggestion;
