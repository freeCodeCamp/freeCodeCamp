import React, { useState, useEffect } from 'react';
import { Image } from '@freecodecamp/react-bootstrap';
import DefaultAvatar from '../../assets/icons/default-avatar';
import { defaultUserImage } from '../../../../config/misc';
import { borderColorPicker } from '.';
import { useTranslation } from 'react-i18next';

interface AvatarRendererProps {
  isDonating?: boolean;
  isTopContributor?: boolean;
  picture: string;
  userName: string;
}

function AvatarRenderer({
  picture,
  userName,
  isDonating,
  isTopContributor
}: AvatarRendererProps): JSX.Element {
  const { t } = useTranslation();
  const [isPictureValid, setIsPictureValid] = useState(true);
  const borderColor: string = borderColorPicker(isDonating, isTopContributor);
  const onImageLoad = () => setIsPictureValid(true);
  const onImageError = () => setIsPictureValid(false);

  useEffect(() => {
    const validationImage = document.createElement('img');
    validationImage.src = picture;
    validationImage.onload = onImageLoad;
    validationImage.onerror = onImageError;
  }, [picture]);

  const isPlaceHolderImage =
    !isPictureValid ||
    /example.com|identicon.org/.test(picture) ||
    picture === defaultUserImage;

  return (
    <div className={`avatar-container ${borderColor}`}>
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
