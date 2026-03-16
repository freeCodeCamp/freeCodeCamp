import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';

import SidebarPanel, { useStickyScrollOffset } from '../sidebar-panel';
import {
  currentCertifications,
  legacyCertifications,
  legacyFullStackCertification,
  upcomingCertifications
} from '@freecodecamp/shared/config/certification-settings';
import env from '../../../config/env.json';

type SettingsSidebarNavProps = {
  userToken: string | null;
};

const { showUpcomingChanges } = env;

function SettingsSidebarNav({
  userToken
}: SettingsSidebarNavProps): JSX.Element {
  const { t } = useTranslation();
  const scrollOffset = useStickyScrollOffset(['--header-height']);
  const allLegacyCertifications = [
    ...legacyFullStackCertification,
    ...legacyCertifications
  ];

  return (
    <SidebarPanel className='settings-sidebar-nav'>
      <ul>
        <SidebarPanel.Item>
          <ScrollLink
            to='account'
            href='#account'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={scrollOffset}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.headings.account')}
          </ScrollLink>
        </SidebarPanel.Item>
        <SidebarPanel.Item>
          <ScrollLink
            to='privacy'
            href='#privacy'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={scrollOffset}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.headings.privacy')}
          </ScrollLink>
        </SidebarPanel.Item>
        <SidebarPanel.Item>
          <ScrollLink
            to='email'
            href='#email'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={scrollOffset}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.email.heading')}
          </ScrollLink>
        </SidebarPanel.Item>
        <SidebarPanel.Item>
          <ScrollLink
            to='honesty'
            href='#honesty'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={scrollOffset}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.headings.honesty')}
          </ScrollLink>
        </SidebarPanel.Item>
        <SidebarPanel.Item>
          <ScrollLink
            to='exam-token'
            href='#exam-token'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={scrollOffset}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('exam-token.exam-token')}
          </ScrollLink>
        </SidebarPanel.Item>
        <SidebarPanel.Item>
          <ScrollLink
            to='certifications'
            href='#certifications'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={scrollOffset}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.headings.certs')}
          </ScrollLink>
          <ul>
            {currentCertifications.map(slug => (
              <SidebarPanel.Item key={slug}>
                <ScrollLink
                  to={`cert-${slug}`}
                  href={`#cert-${slug}`}
                  className={'sidebar-nav-anchor-btn'}
                  smooth={true}
                  offset={scrollOffset}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                  activeClass='active'
                >
                  {t(`certification.title.${slug}`, slug)}
                </ScrollLink>
              </SidebarPanel.Item>
            ))}
          </ul>
        </SidebarPanel.Item>
        <SidebarPanel.Item>
          <ScrollLink
            to='legacy-certifications'
            href='#legacy-certifications'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={scrollOffset}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.headings.legacy-certs')}
          </ScrollLink>
          <ul>
            {allLegacyCertifications.map(slug => (
              <SidebarPanel.Item key={slug}>
                <ScrollLink
                  to={`cert-${slug}`}
                  href={`#cert-${slug}`}
                  className={'sidebar-nav-anchor-btn'}
                  smooth={true}
                  offset={scrollOffset}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                  activeClass='active'
                >
                  {t(`certification.title.${slug}`, slug)}
                </ScrollLink>
              </SidebarPanel.Item>
            ))}
          </ul>
          <ul>
            {showUpcomingChanges &&
              upcomingCertifications.map(slug => (
                <SidebarPanel.Item key={slug}>
                  <ScrollLink
                    to={`cert-${slug}`}
                    href={`#cert-${slug}`}
                    className={'sidebar-nav-anchor-btn'}
                    smooth={true}
                    offset={scrollOffset}
                    duration={300}
                    spy={true}
                    hashSpy={true}
                    activeClass='active'
                  >
                    {t(`certification.title.${slug}`, slug)}
                  </ScrollLink>
                </SidebarPanel.Item>
              ))}
          </ul>
        </SidebarPanel.Item>
        {userToken && (
          <SidebarPanel.Item>
            <ScrollLink
              to='user-token'
              href='#user-token'
              className='sidebar-nav-section-heading'
              smooth={true}
              offset={scrollOffset}
              duration={300}
              spy={true}
              hashSpy={true}
              activeClass='active'
            >
              {t('user-token.title')}
            </ScrollLink>
          </SidebarPanel.Item>
        )}
        <SidebarPanel.Item>
          <ScrollLink
            to='danger-zone'
            href='#danger-zone'
            className='sidebar-nav-section-heading'
            smooth={true}
            offset={scrollOffset}
            duration={300}
            spy={true}
            hashSpy={true}
            activeClass='active'
          >
            {t('settings.danger.heading')}
          </ScrollLink>
        </SidebarPanel.Item>
      </ul>
    </SidebarPanel>
  );
}

SettingsSidebarNav.displayName = 'SettingsSidebarNav';

export default SettingsSidebarNav;
