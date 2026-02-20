import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';

import type { CurrentCert, User } from '../../../redux/prop-types';
import { Link } from '../../helpers';
import { getCertifications } from './utils/certification';

import './certifications.css';

interface CertificationProps {
  user: User;
}

interface CertButtonProps {
  cert: CurrentCert;
  username: string;
}

function CertButton({ username, cert }: CertButtonProps): JSX.Element {
  const { t } = useTranslation();
  const certTitle = t(`certification.title.${cert.certSlug}-cert`);
  return (
    <li className='cert-item'>
      <Link
        className='cert-link'
        to={`/certification/${username}/${cert.certSlug}`}
        aria-label={t('buttons.view-cert-title', {
          certTitle
        })}
      >
        <span className='cert-link-title'>{certTitle}</span>
        <span className='cert-link-meta'>
          <span className='cert-link-badge'>{t('profile.certified')}</span>
          <span className='cert-link-arrow' aria-hidden='true'>
            &gt;
          </span>
        </span>
      </Link>
    </li>
  );
}

function Certificates({ user }: CertificationProps): JSX.Element {
  const { username } = user;

  const { currentCerts, legacyCerts, hasLegacyCert, hasModernCert } =
    getCertifications(user);

  const { t } = useTranslation();
  return (
    <div className='profile-certifications'>
      <Spacer size='s' />
      {hasModernCert && currentCerts ? (
        <ul className='cert-list'>
          {currentCerts
            .filter(({ show }) => show)
            .map(cert => (
              <CertButton key={cert.certSlug} cert={cert} username={username} />
            ))}
        </ul>
      ) : (
        <p className='text-center'>{t('profile.no-certs')}</p>
      )}
      {hasLegacyCert && (
        <div className='legacy-certifications'>
          <Spacer size='m' />
          <h3
            id='legacy-certifications'
            className='legacy-certifications-title'
          >
            {t('settings.headings.legacy-certs')}
          </h3>
          <Spacer size='m' />
          {legacyCerts && (
            <>
              <ul className='cert-list' aria-labelledby='legacy-certifications'>
                {legacyCerts
                  .filter(({ show }) => show)
                  .map(cert => (
                    <CertButton
                      key={cert.certSlug}
                      cert={cert}
                      username={username}
                    />
                  ))}
              </ul>
              <Spacer size='m' />
            </>
          )}
        </div>
      )}
    </div>
  );
}

Certificates.displayName = 'Certifications';

export default Certificates;
