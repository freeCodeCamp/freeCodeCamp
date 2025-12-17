import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import {
  currentCertifications,
  legacyCertifications,
  legacyFullStackCertification,
  upcomingCertifications
} from '../../../../shared-dist/config/certification-settings';
import env from '../../../config/env.json';

type SettingsSidebarNavProps = {
  userToken: string | null;
};

const { showUpcomingChanges } = env;

function SettingsSidebarNav({
  userToken
}: SettingsSidebarNavProps): JSX.Element {
  const { t } = useTranslation();
  const allLegacyCertifications = [
    ...legacyFullStackCertification,
    ...legacyCertifications
  ];

  return (
    <aside className='settings-sidebar-nav'>
      <ul>
        <li>
          <ScrollLink
            to='account'
            href='#account'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={-48}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.headings.account')}
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to='privacy'
            href='#privacy'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={-48}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.headings.privacy')}
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to='email'
            href='#email'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={-48}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.email.heading')}
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to='honesty'
            href='#honesty'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={-48}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.headings.honesty')}
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to='exam-token'
            href='#exam-token'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={-48}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('exam-token.exam-token')}
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to='certifications'
            href='#certifications'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={-48}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.headings.certs')}
          </ScrollLink>
          <ul>
            {currentCertifications.map(slug => (
              <li key={slug}>
                <ScrollLink
                  to={`cert-${slug}`}
                  href={`#cert-${slug}`}
                  className={'sidebar-nav-anchor-btn'}
                  smooth={true}
                  offset={-48}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                  activeClass='active'
                >
                  {t(`certification.title.${slug}`, slug)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ScrollLink
            to='legacy-certifications'
            href='#legacy-certifications'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={-48}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.headings.legacy-certs')}
          </ScrollLink>
          <ul>
            {allLegacyCertifications.map(slug => (
              <li key={slug}>
                <ScrollLink
                  to={`cert-${slug}`}
                  href={`#cert-${slug}`}
                  className={'sidebar-nav-anchor-btn'}
                  smooth={true}
                  offset={-48}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                  activeClass='active'
                >
                  {t(`certification.title.${slug}`, slug)}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <ul>
            {showUpcomingChanges &&
              upcomingCertifications.map(slug => (
                <li key={slug}>
                  <ScrollLink
                    to={`cert-${slug}`}
                    href={`#cert-${slug}`}
                    className={'sidebar-nav-anchor-btn'}
                    smooth={true}
                    offset={-48}
                    duration={300}
                    spy={true}
                    hashSpy={true}
                    activeClass='active'
                  >
                    {t(`certification.title.${slug}`, slug)}
                  </ScrollLink>
                </li>
              ))}
          </ul>
        </li>
        {userToken && (
          <li>
            <ScrollLink
              to='user-token'
              href='#user-token'
              className='sidebar-nav-section-heading'
              smooth={true}
              offset={-48}
              duration={300}
              spy={true}
              hashSpy={true}
              activeClass='active'
            >
              {t('user-token.title')}
            </ScrollLink>
          </li>
        )}
        <li>
          <ScrollLink
            to='danger-zone'
            href='#danger-zone'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={-48}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.danger.heading')}
          </ScrollLink>
        </li>
      </ul>
    </aside>
  );
}

SettingsSidebarNav.displayName = 'SettingsSidebarNav';

export default SettingsSidebarNav;
