import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { withTranslation } from 'react-i18next';

import CertificationIcon from '../../../assets/icons/CertificationIcon';
import GreenPass from '../../../assets/icons/GreenPass';
import GreenNotCompleted from '../../../assets/icons/GreenNotCompleted';
import { dasherize } from '../../../../../utils/slugs';
import { userSelector } from '../../../redux';
import { User } from '../../../redux/propTypes';

const propTypes = {
  superBlock: PropTypes.string,
  t: PropTypes.func,
  user: User
};

const mapStateToProps = state => {
  return createSelector(
    userSelector,
    user => ({
      user
    })
  )(state);
};

export class CertChallenge extends Component {
  render() {
    const {
      superBlock,
      t,
      user: {
        is2018DataVisCert,
        isApisMicroservicesCert,
        isFrontEndLibsCert,
        isQaCertV7,
        isInfosecCertV7,
        isJsAlgoDataStructCert,
        isRespWebDesignCert,
        isSciCompPyCertV7,
        isDataAnalysisPyCertV7,
        isMachineLearningPyCertV7,
        username
      }
    } = this.props;

    const userCertificates = {
      'Responsive Web Design': isRespWebDesignCert,
      'JavaScript Algorithms and Data Structures': isJsAlgoDataStructCert,
      'Front End Libraries': isFrontEndLibsCert,
      'Data Visualization': is2018DataVisCert,
      'APIs and Microservices': isApisMicroservicesCert,
      'Quality Assurance': isQaCertV7,
      'Information Security': isInfosecCertV7,
      'Scientific Computing with Python': isSciCompPyCertV7,
      'Data Analysis with Python': isDataAnalysisPyCertV7,
      'Machine Learning with Python': isMachineLearningPyCertV7
    };

    const isCertified = userCertificates[superBlock];
    const superBlockDashedName = dasherize(superBlock);
    const certLocation = `/certification/${username}/${superBlockDashedName}`;
    const certCheckmarkStyle = { height: '40px', width: '40px' };
    const i18nSuperBlock = t(`intro:${superBlockDashedName}.title`);
    const i18nCertText = t(`intro:misc-text.certification`, {
      cert: i18nSuperBlock
    });

    return (
      <div className='block'>
        <button
          className={`map-cert-title ${
            isCertified ? 'map-is-cert' : 'no-cursor'
          }`}
          onClick={isCertified ? () => navigate(certLocation) : null}
        >
          <CertificationIcon />
          <h3>{i18nCertText}</h3>
          <div className='map-title-completed-big'>
            <span>
              {isCertified ? (
                <GreenPass style={certCheckmarkStyle} />
              ) : (
                <GreenNotCompleted style={certCheckmarkStyle} />
              )}
            </span>
          </div>
        </button>
      </div>
    );
  }
}

CertChallenge.displayName = 'CertChallenge';
CertChallenge.propTypes = propTypes;

export default connect(mapStateToProps)(withTranslation()(CertChallenge));
