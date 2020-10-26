import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-responsive';
import { Spacer, ImageLoader } from '../../helpers';
import wideImg from '../../../assets/images/landing/wide-image.png';

const propTypes = {
  page: PropTypes.string
};

const LARGE_SCREEN_SIZE = 1200;

const imageConfig = {
  donate: {
    spacerSize: 0,
    height: 345,
    width: 585
  },
  landing: {
    spacerSize: 2,
    height: 442,
    width: 750
  }
};

function CampersImage({ page }) {
  const { spacerSize, height, width } = imageConfig[page];
  return (
    <Media minWidth={LARGE_SCREEN_SIZE}>
      <Spacer size={spacerSize} />
      <ImageLoader
        alt='freeCodeCamp students at a local study group in South Korea.'
        className='landing-page-image'
        height={height}
        src={wideImg}
        width={width}
      />
      <p className='text-center caption'>
        freeCodeCamp students at a local study group in South Korea.
      </p>
    </Media>
  );
}

CampersImage.displayName = 'CampersImage';
CampersImage.propTypes = propTypes;
export default CampersImage;
