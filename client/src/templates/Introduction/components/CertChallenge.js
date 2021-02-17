import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { withTranslation } from 'react-i18next';

import CertificationIcon from '../../../assets/icons/CertificationIcon';
import GreenPass from '../../../assets/icons/GreenPass';
import GreenNotCompleted from '../../../assets/icons/GreenNotCompleted';
import { userSelector } from '../../../redux';
import { verifyCert } from '../../../redux/settings';
import { createFlashMessage } from '../../../components/Flash/redux';
import { User } from '../../../redux/propTypes';

const propTypes = {
  createFlashMessage: PropTypes.func.isRequired,
  superBlock: PropTypes.string,
  t: PropTypes.func,
  user: User,
  verifyCert: PropTypes.func.isRequired
};

const honestyInfoMessage = {
  type: 'info',
  message: 'flash.honest-first'
};

const mapStateToProps = state => {
  return createSelector(
    userSelector,
    user => ({
      user
    })
  )(state);
};

const mapDispatchToProps = {
  createFlashMessage,
  verifyCert
};

const pTypes = {
  certCheckmarkStyle: PropTypes.object,
  certLocation: PropTypes.string,
  createFlashMessage: PropTypes.func.isRequired,
  i18nCertText: PropTypes.string,
  isHonest: PropTypes.bool,
  superBlock: PropTypes.string,
  t: PropTypes.func.isRequired,
  verifyCert: PropTypes.func.isRequired
};

const CertStatus = ({
  certLocation,
  createFlashMessage,
  superBlock,
  i18nCertText,
  isHonest,
  certCheckmarkStyle,
  verifyCert,
  t
}) => {
  const createClickHandler = superBlock => e => {
    e.preventDefault();
    return isHonest
      ? verifyCert(superBlock)
      : createFlashMessage(honestyInfoMessage);
  };
  return (
    <div>
      <ul>
        <li className='block-link'>
          <button onClick={() => navigate(`/settings/#${superBlock}`)}>
            Certificate Requirements
          </button>
        </li>
        <li className='block-link'>
          <button onClick={() => navigate('/settings/#privacy-settings')}>
            Status
          </button>
        </li>
      </ul>
      <button
        className='map-cert-title map-is-cert'
        href={certLocation}
        onClick={createClickHandler(superBlock)}
      >
        {t('buttons.claim-cert')}

        <CertificationIcon />
        <h3>{i18nCertText}</h3>
        <div className='map-title-completed-big'>
          <span>
            <GreenNotCompleted style={certCheckmarkStyle} />
          </span>
        </div>
      </button>
    </div>
  );
};

CertStatus.displayName = 'CertStatus';
CertStatus.propTypes = pTypes;

export class CertChallenge extends Component {
  render() {
    const {
      createFlashMessage,
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
        isHonest,
        username
      },
      verifyCert
    } = this.props;

    const userCertificates = {
      'responsive-web-design': isRespWebDesignCert,
      'javascript-algorithms-and-data-structures': isJsAlgoDataStructCert,
      'front-end-libraries': isFrontEndLibsCert,
      'data-visualization': is2018DataVisCert,
      'apis-and-microservices': isApisMicroservicesCert,
      'quality-assurance': isQaCertV7,
      'information-security': isInfosecCertV7,
      'scientific-computing-with-python': isSciCompPyCertV7,
      'data-analysis-with-python': isDataAnalysisPyCertV7,
      'machine-learning-with-python': isMachineLearningPyCertV7
    };

    const isCertified = userCertificates[superBlock];
    const certLocation = `/certification/${username}/${superBlock}`;
    const certCheckmarkStyle = { height: '40px', width: '40px' };
    const i18nSuperBlock = t(`intro:${superBlock}.title`);
    const i18nCertText = t(`intro:misc-text.certification`, {
      cert: i18nSuperBlock
    });
    return (
      <div className='block'>
        {!isCertified ? (
          <CertStatus
            certCheckmarkStyle={certCheckmarkStyle}
            certLocation={certLocation}
            createFlashMessage={createFlashMessage}
            i18nCertText={i18nCertText}
            isHonest={isHonest}
            superBlock={superBlock}
            t={t}
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
