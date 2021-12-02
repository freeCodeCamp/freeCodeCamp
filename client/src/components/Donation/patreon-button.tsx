import React from 'react';
import {
  donationUrls,
  patreonDefaultPledgeAmount
} from '../../../../config/donation-settings';
import envData from '../../../../config/env.json';
import PatreonLogo from '../../assets/images/components/patreon-logo';

const { patreonClientId }: { patreonClientId: string | null } = envData as {
  patreonClientId: string | null;
};

interface PatreonButtonProps {
  postPatreonRedirect: () => void;
}

const PatreonButton = ({
  postPatreonRedirect
}: PatreonButtonProps): JSX.Element | null => {
  if (
    !patreonClientId ||
    !patreonDefaultPledgeAmount ||
    !donationUrls.successUrl
  ) {
    return null;
  }

  const clientId = `&client_id=${patreonClientId}`;
  const pledgeLevel = `$&min_cents=${patreonDefaultPledgeAmount}`;
  const v2Params = '&scope=identity%20identity[email]';
  const redirectUri = `&redirect_uri=${donationUrls.successUrl}`;
  const href = `https://www.patreon.com/oauth2/become-patron?response_type=code${pledgeLevel}${clientId}${redirectUri}${v2Params}`;

  return (
    <a
      className='patreon-button link-button'
      data-patreon-widget-type='become-patron-button'
      href={href}
      onClick={postPatreonRedirect}
      rel='noreferrer'
      target='_blank'
    >
      <PatreonLogo />
    </a>
  );
};

export default PatreonButton;
