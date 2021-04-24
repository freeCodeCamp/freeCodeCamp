import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { withTranslation } from 'react-i18next';

import CertificationIcon from '../../../assets/icons/CertificationIcon';
import GreenPass from '../../../assets/icons/GreenPass';
import CertificationCard from './CertificationCard';

import { certificatesByNameSelector } from '../../../redux';
import { verifyCert } from '../../../redux/settings';
import { createFlashMessage } from '../../../components/Flash/redux';
import { CurrentCertsType, User } from '../../../redux/propTypes';
import { certMap } from '../../../resources/certAndProjectMap';
import {
  certSlugTypeMap,
  superBlockCertTypeMap
} from '../../../../../config/certification-settings';

const propTypes = {
  createFlashMessage: PropTypes.func.isRequired,
  currentCerts: CurrentCertsType,
  superBlock: PropTypes.string,
  t: PropTypes.func,
  title: PropTypes.string,
  user: User,
  verifyCert: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => {
  return createSelector(
    certificatesByNameSelector(props.user.username),
    ({ currentCerts }) => ({
      currentCerts
    })
  )(state, props);
};

const mapDispatchToProps = {
  createFlashMessage,
  verifyCert
};

export class CertChallenge extends Component {
  render() {
    const {
      createFlashMessage,
      superBlock,
      t,
      verifyCert,
      title,
      user: { isHonest, username },
      currentCerts
    } = this.props;

    const cert = certMap.find(x => x.title === title);
    const isCertified = currentCerts.find(
      cert =>
        certSlugTypeMap[cert.certSlug] === superBlockCertTypeMap[superBlock]
    ).show;
    const certLocation = `/certification/${username}/${cert.certSlug}`;
    const certCheckmarkStyle = { height: '40px', width: '40px' };
    const i18nSuperBlock = t(`intro:${superBlock}.title`);
    const i18nCertText = t(`intro:misc-text.certification`, {
      cert: i18nSuperBlock
    });
    return (
      <div className='block'>
        {!isCertified ? (
          <CertificationCard
            certCheckmarkStyle={certCheckmarkStyle}
            certLocation={certLocation}
            createFlashMessage={createFlashMessage}
            i18nCertText={i18nCertText}
            isHonest={isHonest}
            superBlock={superBlock}
            username={username}
            verifyCert={verifyCert}
          />
        ) : (
          <button
            className={'map-cert-title map-is-cert'}
            onClick={() => navigate(certLocation)}
          >
            <CertificationIcon />
            <h3>{i18nCertText}</h3>
            <div className='map-title-completed-big'>
              <span>
                <GreenPass style={certCheckmarkStyle} />
              </span>
            </div>
          </button>
        )}
      </div>
    );
  }
}

CertChallenge.displayName = 'CertChallenge';
CertChallenge.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(CertChallenge));
