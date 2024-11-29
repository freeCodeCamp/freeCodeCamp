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

  useEffect(() => {
    const validateImage = async () => {
      if (
        !/freecodecamp\.com\/sample-image/.test(picture) &&
        isURL(picture, { require_protocol: true })
      ) {
        try {
          const img = new HTMLImageElement();
          img.src = picture;
          await img.decode(); // This will reject if the image can't be loaded
          setIsPictureValid(true);
        } catch (error) {
          setIsPictureValid(false);
        }
      } else {
        setIsPictureValid(false);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    validateImage();
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
