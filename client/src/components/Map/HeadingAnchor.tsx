import React from 'react';
import LinkButton from '../../assets/icons/link-button';

function slugifyForId(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

type HeadingAnchorProps = {
  /** Visible heading text */
  children: string;
  /** Optional stable id; if omitted we slugify children */
  id?: string;
  /** h2/h3/etc */
  as?: 'h2' | 'h3' | 'h4';
  className?: string;
};

export default function HeadingAnchor({
  children,
  id,
  as = 'h2',
  className = ''
}: HeadingAnchorProps): JSX.Element {
  const headingId = id ?? slugifyForId(children);
  const HeadingTag = as;

  return (
    <HeadingTag id={headingId} className={`map-heading-anchor ${className}`}>
      <span className='map-heading-anchor__text'>{children}</span>
      <a
        className='map-heading-anchor__link'
        href={`#${headingId}`}
        aria-label={`Link to ${children}`}
      >
        <LinkButton className='map-heading-anchor__icon' />
      </a>
    </HeadingTag>
  );
}