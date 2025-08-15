import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '../../../components/helpers/index';

import './challenge-title.css';

interface BreadCrumbProps {
  block: string;
  superBlock: string;
}

function BreadCrumb({ block, superBlock }: BreadCrumbProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <nav
      className='challenge-title-breadcrumbs'
      aria-label={t($ => $.aria["breadcrumb-nav"])}
    >
      <ol data-playwright-test-label='breadcrumb-desktop'>
        <li className='breadcrumb-left'>
          <Link
            state={{ breadcrumbBlockClick: block }}
            to={`/learn/${superBlock}`}
          >
            {/** 
              * Type 'string' can't be used to index type 
              * '{ "responsive-web-design": { title: string; intro: string[]; note: string; blocks: { "basic-html-and-html5": { title: string; intro: string[]; }; "basic-css": { title: string; intro: string[]; }; "applied-visual-design": { ...; }; "applied-accessibility": { ...; }; "responsive-web-design-principles": { ...; }; "css-...'
              */}
            <span>{i18next.t($ => $[superBlock].title, { ns: "intro" })}</span>
            {/*                     𐙘________𐙘 */}
          </Link>
        </li>
        <li className='breadcrumb-right'>
          <Link
            state={{ breadcrumbBlockClick: block }}
            to={`/learn/${superBlock}/#${block}`}
          >
            {/** 
              * Type 'string' can't be used to index type 
              * '{ "responsive-web-design": { title: string; intro: string[]; note: string; blocks: { "basic-html-and-html5": { title: string; intro: string[]; }; "basic-css": { title: string; intro: string[]; }; "applied-visual-design": { ...; }; "applied-accessibility": { ...; }; "responsive-web-design-principles": { ...; }; "css-...'
              */}
            {i18next.t($ => $[superBlock].blocks[block].title, { ns: "intro" })}
            {/*               𐙘________𐙘 */}
          </Link>
        </li>
      </ol>
    </nav>
  );
}

BreadCrumb.displayName = 'BreadCrumb';

export default BreadCrumb;
