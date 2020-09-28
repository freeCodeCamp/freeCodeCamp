import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '@freecodecamp/react-bootstrap';
import DefaultAvatar from '../../assets/icons/DefaultAvatar';
import { defaultUserImage } from '../../../../config/misc';

const propTypes = {
  isDonating: PropTypes.bool,
  isTopContributor: PropTypes.bool,
  picture: PropTypes.any.isRequired,
  userName: PropTypes.string.isRequired
};

function borderColorPicker(isDonating, isTopContributor) {
  if (isDonating && isTopContributor) return 'purple-border';
  else if (isTopContributor) return 'green-border';
  else if (isDonating) return 'gold-border';
  else return 'default-border';
}

function AvatarRenderer({ picture, userName, isDonating, isTopContributor }) {
  let borderColor = borderColorPicker(isDonating, isTopContributor);
  let isPlaceHolderImage =
    /example.com|identicon.org/.test(picture) || picture === defaultUserImage;

  return (
    <div className={`avatar-container ${borderColor}`}>
      {isPlaceHolderImage ? (
        <DefaultAvatar className='avatar default-avatar' />
      ) : (
        <Image
          alt={userName + "'s avatar"}
          className='avatar'
          responsive={true}
          src={picture}
        />
      )}
    </div>
  );
}

AvatarRenderer.propTypes = propTypes;
AvatarRenderer.displayName = 'AvatarRenderer';
export default AvatarRenderer;
