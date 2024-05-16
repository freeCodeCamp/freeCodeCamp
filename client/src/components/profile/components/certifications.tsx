import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { certificatesByNameSelector } from '../../../redux/selectors';
import type { CurrentCert } from '../../../redux/prop-types';
import { FullWidthRow, Link, Spacer } from '../../helpers';

const mapStateToProps = (
  state: Record<string, unknown>,
  props: CertificationProps
) =>
  createSelector(
    certificatesByNameSelector(props.username.toLowerCase()),
    ({
      hasModernCert,
      hasLegacyCert,
      currentCerts,
      legacyCerts
    }: Pick<
      CertificationProps,
      'hasModernCert' | 'hasLegacyCert' | 'currentCerts' | 'legacyCerts'
    >) => ({
      hasModernCert,
      hasLegacyCert,
      currentCerts,
      legacyCerts
    })
  )(state);

interface CertificationProps {
  currentCerts?: CurrentCert[];
  hasLegacyCert?: boolean;
  hasModernCert?: boolean;
  legacyCerts?: CurrentCert[];
  username: string;
}

interface CertButtonProps {
  cert: CurrentCert;
  username: string;
}

function CertButton({ username, cert }: CertButtonProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Link
        className='btn btn-lg btn-primary btn-block'
        to={`/certification/${username}/${cert.certSlug}`}
        data-cy='claimed-certification'
      >
        {t('buttons.view-cert-title', {
          certTitle: t(`certification.title.${cert.certSlug}`)
        })}
      </Link>
      <Spacer size='small' />
    </>
  );
}

function Certificates({
  currentCerts,
  legacyCerts,
  hasLegacyCert,
  hasModernCert,
  username
}: CertificationProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <FullWidthRow className='certifications'>
      <h2>{t('profile.fcc-certs')}</h2>
      <br />
      {hasModernCert && currentCerts ? (
        currentCerts
          .filter(({ show }) => show)
          .map(cert => (
            <CertButton key={cert.certSlug} cert={cert} username={username} />
          ))
      ) : (
        <p className='text-center'>{t('profile.no-certs')}</p>
      )}
      {hasLegacyCert ? (
        <div>
          <Spacer size='medium' />
          <h3>{t('settings.headings.legacy-certs')}</h3>
          <Spacer size='medium' />
          {legacyCerts &&
            legacyCerts
              .filter(({ show }) => show)
              .map(cert => (
                <CertButton
                  key={cert.certSlug}
                  cert={cert}
                  username={username}
                />
              ))}
          <Spacer size='medium' />
        </div>
      ) : null}
      <hr />
    </FullWidthRow>
  );
}

Certificates.displayName = 'Certifications';

export default connect(mapStateToProps)(Certificates);
