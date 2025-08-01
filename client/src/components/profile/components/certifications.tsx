import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';

import type { CurrentCert, User } from '../../../redux/prop-types';
import { FullWidthRow, ButtonLink } from '../../helpers';
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
  return (
    <li>
      <ButtonLink
        block
        size='large'
        href={`/certification/${username}/${cert.certSlug}`}
      >
        {t('buttons.view-cert-title', {
          certTitle: t(`certification.title.${cert.certSlug}-cert`)
        })}
      </ButtonLink>
      <Spacer size='xs' />
    </li>
  );
}

function Certificates({ user }: CertificationProps): JSX.Element {
  const { username } = user;

  const { currentCerts, legacyCerts, hasLegacyCert, hasModernCert } =
    getCertifications(user);

  const { t } = useTranslation();
  return (
    <FullWidthRow className='profile-certifications'>
      <section className='card'>
        <h2 id='fcc-certifications'>{t('profile.fcc-certs')}</h2>
        <br />
        {hasModernCert && currentCerts ? (
          <ul aria-labelledby='fcc-certifications'>
            {currentCerts
              .filter(({ show }) => show)
              .map(cert => (
                <CertButton
                  key={cert.certSlug}
                  cert={cert}
                  username={username}
                />
              ))}
          </ul>
        ) : (
          <p className='text-center'>{t('profile.no-certs')}</p>
        )}
        {hasLegacyCert && (
          <div>
            <Spacer size='m' />
            <h3 id='legacy-certifications'>
              {t('settings.headings.legacy-certs')}
            </h3>
            <Spacer size='m' />
            {legacyCerts && (
              <>
                <ul aria-labelledby='legacy-certifications'>
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
      </section>
    </FullWidthRow>
  );
}

Certificates.displayName = 'Certifications';

export default Certificates;
