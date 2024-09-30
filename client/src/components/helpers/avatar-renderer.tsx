import { Image } from '@freecodecamp/ui';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import isURL from 'validator/lib/isURL';
import DefaultAvatar from '../../assets/icons/default-avatar';
import borderColorPicker from './border-color-picker';

interface AvatarRendererProps {
  isDonating?: boolean;
  isTopContributor?: boolean;
  picture: string;
}

function AvatarRenderer({
  picture,
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
    if (
      // we probably have loads of records in the database with this default avatar URL set. To prevent making a request to the image we know will 404.
      !/freecodecamp\.com\/sample-image/.test(picture) &&
      isURL(picture, { require_protocol: true })
    ) {
      validationImage.src = picture;
      validationImage.onload = onImageLoad;
      validationImage.onerror = onImageError;
    } else {
      setIsPictureValid(false);
    }
  }, [picture]);

  const isPlaceHolderImage =
    !isPictureValid || /example.com|identicon.org|^$/.test(picture);

  return (
    <div className={`avatar-container ${borderColor}`}>
      <span className='sr-only'>{t('buttons.profile')}</span>
      {isPlaceHolderImage ? (
        <DefaultAvatar className='avatar' />
      ) : (
        <Image alt='' className='avatar' src={picture} responsive />
      )}
    </div>
  );
}

AvatarRenderer.displayName = 'AvatarRenderer';
export default AvatarRenderer;
