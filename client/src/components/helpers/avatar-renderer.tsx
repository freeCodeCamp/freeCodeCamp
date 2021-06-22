import React from 'react';
import { Image } from '@freecodecamp/react-bootstrap';
import DefaultAvatar from '../../assets/icons/DefaultAvatar';
import { defaultUserImage } from '../../../../config/misc';
import { borderColorPicker } from '.';
import { useTranslation } from 'react-i18next';

interface AvatarRendererProps {
  isDonating?: boolean;
  isTopContributor?: boolean;
  picture: unknown;
  userName: string;
}

function AvatarRenderer({
  picture,
  userName,
  isDonating,
  isTopContributor
}: AvatarRendererProps): JSX.Element {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const borderColor: unknown = borderColorPicker(isDonating, isTopContributor);
  const isPlaceHolderImage =
    /example.com|identicon.org/.test(picture as string) ||
    picture === defaultUserImage;

  return (
    <div className={`avatar-container ${borderColor as string}`}>
      {isPlaceHolderImage ? (
        <DefaultAvatar className='avatar default-avatar' />
      ) : (
        <Image
          alt={t('profile.avatar', { username: userName })}
          className='avatar'
          responsive={true}
          src={picture}
        />
      )}
    </div>
  );
}

AvatarRenderer.displayName = 'AvatarRenderer';
export default AvatarRenderer;
