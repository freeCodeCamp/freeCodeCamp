import { Table, Button } from '@freecodecamp/react-bootstrap';
import { Link, navigate } from 'gatsby';
import { find, first } from 'lodash-es';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { createSelector } from 'reselect';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import { connect } from 'react-redux';

import { regeneratePathAndHistory } from '../../../../utils/polyvinyl';
import ProjectPreviewModal from '../../templates/Challenges/components/project-preview-modal';
import { openModal } from '../../templates/Challenges/redux/actions';
import {
  projectMap,
  legacyProjectMap
} from '../../resources/cert-and-project-map';
import { FlashMessages } from '../Flash/redux/flash-messages';
import ProjectModal from '../SolutionViewer/project-modal';
import { FullWidthRow, Spacer } from '../helpers';
import { SolutionDisplayWidget } from '../solution-display-widget';
import SectionHeader from './section-header';

import './certification.css';

configureAnchors({ offset: -40, scrollDuration: 0 });

const propTypes = {
  completedChallenges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      solution: PropTypes.string,
      githubLink: PropTypes.string,
      challengeType: PropTypes.number,
      completedDate: PropTypes.number,
      challengeFiles: PropTypes.array
    })
  ),
  createFlashMessage: PropTypes.func.isRequired,
  is2018DataVisCert: PropTypes.bool,
  isApisMicroservicesCert: PropTypes.bool,
  isBackEndCert: PropTypes.bool,
  isDataAnalysisPyCertV7: PropTypes.bool,
  isDataVisCert: PropTypes.bool,
  isCollegeAlgebraPyCertV8: PropTypes.bool,
  isFrontEndCert: PropTypes.bool,
  isFrontEndLibsCert: PropTypes.bool,
  isFullStackCert: PropTypes.bool,
  isHonest: PropTypes.bool,
  isInfosecCertV7: PropTypes.bool,
  isInfosecQaCert: PropTypes.bool,
  isJsAlgoDataStructCert: PropTypes.bool,
  isMachineLearningPyCertV7: PropTypes.bool,
  isQaCertV7: PropTypes.bool,
  isRelationalDatabaseCertV8: PropTypes.bool,
  isRespWebDesignCert: PropTypes.bool,
  isSciCompPyCertV7: PropTypes.bool,
  openModal: PropTypes.func,
  t: PropTypes.func.isRequired,
  username: PropTypes.string,
  verifyCert: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  openModal
};

const certifications = Object.keys(projectMap);
const legacyCertifications = Object.keys(legacyProjectMap);
const isCertSelector = ({
  is2018DataVisCert,
  isApisMicroservicesCert,
  isJsAlgoDataStructCert,
  isBackEndCert,
  isDataVisCert,
  isFrontEndCert,
  isInfosecQaCert,
  isQaCertV7,
  isInfosecCertV7,
  isFrontEndLibsCert,
  isFullStackCert,
  isRespWebDesignCert,
  isSciCompPyCertV7,
  isDataAnalysisPyCertV7,
  isMachineLearningPyCertV7,
  isRelationalDatabaseCertV8,
  isCollegeAlgebraPyCertV8
}) => ({
  is2018DataVisCert,
  isApisMicroservicesCert,
  isJsAlgoDataStructCert,
  isBackEndCert,
  isDataVisCert,
  isFrontEndCert,
  isInfosecQaCert,
  isQaCertV7,
  isInfosecCertV7,
  isFrontEndLibsCert,
  isFullStackCert,
  isRespWebDesignCert,
  isSciCompPyCertV7,
  isDataAnalysisPyCertV7,
  isMachineLearningPyCertV7,
  isRelationalDatabaseCertV8,
  isCollegeAlgebraPyCertV8
});

const isCertMapSelector = createSelector(
  isCertSelector,
  ({
    is2018DataVisCert,
    isApisMicroservicesCert,
    isJsAlgoDataStructCert,
    isInfosecQaCert,
    isQaCertV7,
    isInfosecCertV7,
    isFrontEndLibsCert,
    isRespWebDesignCert,
    isDataVisCert,
    isFrontEndCert,
    isBackEndCert,
    isSciCompPyCertV7,
    isDataAnalysisPyCertV7,
    isMachineLearningPyCertV7,
    isRelationalDatabaseCertV8,
    isCollegeAlgebraPyCertV8
  }) => ({
    'Responsive Web Design': isRespWebDesignCert,
    'JavaScript Algorithms and Data Structures': isJsAlgoDataStructCert,
    'Front End Development Libraries': isFrontEndLibsCert,
    'Data Visualization': is2018DataVisCert,
    'Back End Development and APIs': isApisMicroservicesCert,
    'Quality Assurance': isQaCertV7,
    'Information Security': isInfosecCertV7,
    'Scientific Computing with Python': isSciCompPyCertV7,
    'Data Analysis with Python': isDataAnalysisPyCertV7,
    'Machine Learning with Python': isMachineLearningPyCertV7,
    'Relational Database': isRelationalDatabaseCertV8,
    'College Algebra with Python': isCollegeAlgebraPyCertV8,
    'Legacy Front End': isFrontEndCert,
    'Legacy Data Visualization': isDataVisCert,
    'Legacy Back End': isBackEndCert,
    'Legacy Information Security and Quality Assurance': isInfosecQaCert
  })
);

const honestyInfoMessage = {
  type: 'info',
  message: FlashMessages.HonestFirst
};

const initialState = {
  solutionViewer: {
    projectTitle: '',
    challengeFiles: null,
    solution: null,
    isOpen: false
  }
};

export class CertificationSettings extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  createHandleLinkButtonClick = to => e => {
    e.preventDefault();
    return navigate(to);
  };

  handleSolutionModalHide = () => this.setState({ ...initialState });

  getUserIsCertMap = () => isCertMapSelector(this.props);

  getProjectSolution = (projectId, projectTitle) => {
    const { completedChallenges, openModal } = this.props;
    const completedProject = find(
      completedChallenges,
      ({ id }) => projectId === id
    );
    if (!completedProject) {
      return null;
    }

    const { solution, challengeFiles } = completedProject;
    const showUserCode = () =>
      this.setState({
        solutionViewer: {
          projectTitle,
          challengeFiles,
          solution,
          isOpen: true
        }
      });

    const challengeData = completedProject
      ? {
          ...completedProject,
          challengeFiles:
            completedProject?.challengeFiles?.map(regeneratePathAndHistory) ??
            null
        }
      : null;

    const showProjectPreview = () => {
      this.setState({
        projectViewer: {
          previewTitle: projectTitle,
          challengeData
        }
      });
      openModal('projectPreview');
    };

    return (
      <SolutionDisplayWidget
        completedChallenge={completedProject}
        dataCy={projectTitle}
        projectTitle={projectTitle}
        showUserCode={showUserCode}
        showProjectPreview={showProjectPreview}
        displayContext='settings'
      ></SolutionDisplayWidget>
    );
  };

  renderCertifications = (certName, projectsMap) => {
    const { t } = this.props;
    const { certSlug } = first(projectsMap[certName]);
    return (
      <FullWidthRow key={certName}>
        <Spacer size='medium' />
        <h3 className='text-center' id={`cert-${certSlug}`}>
          {t(`certification.title.${certName}`, certName)}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>{t('settings.labels.project-name')}</th>
              <th>{t('settings.labels.solution')}</th>
            </tr>
          </thead>
          <tbody>
            {this.renderProjectsFor(
              certName,
              this.getUserIsCertMap()[certName],
              projectsMap
            )}
          </tbody>
        </Table>
      </FullWidthRow>
    );
  };
  renderProjectsFor = (certName, isCert, projectsMap) => {
    const { username, isHonest, createFlashMessage, t, verifyCert } =
      this.props;
    const { certSlug } = first(projectsMap[certName]);
    const certLocation = `/certification/${username}/${certSlug}`;
    const createClickHandler = certSlug => e => {
      e.preventDefault();
      if (isCert) {
        return navigate(certLocation);
      }
      return isHonest
        ? verifyCert(certSlug)
        : createFlashMessage(honestyInfoMessage);
    };
    return projectsMap[certName]
      .map(({ link, title, id }) => (
        <tr className='project-row' key={id}>
          <td className='project-title col-sm-8 col-xs-8'>
            <Link to={link}>
              {t(`certification.project.title.${title}`, title)}
            </Link>
          </td>
          <td className='project-solution col-sm-4 col-xs-4'>
            {this.getProjectSolution(id, title)}
          </td>
        </tr>
      ))
      .concat([
        <tr key={`cert-${certSlug}-button`}>
          <td colSpan={2}>
            <Button
              block={true}
              bsStyle='primary'
              className={'col-xs-12'}
              href={certLocation}
              data-cy={`btn-for-${certSlug}`}
              onClick={createClickHandler(certSlug)}
            >
              {isCert ? t('buttons.show-cert') : t('buttons.claim-cert')}{' '}
              <span className='sr-only'>{certName}</span>
            </Button>
          </td>
        </tr>
      ]);
  };

  renderLegacyFullStack = () => {
    const {
      isFullStackCert,
      username,
      isHonest,
      createFlashMessage,
      verifyCert,
      is2018DataVisCert,
      isApisMicroservicesCert,
      isFrontEndLibsCert,
      isInfosecQaCert,
      isJsAlgoDataStructCert,
      isRespWebDesignCert,
      t
    } = this.props;

    const fullStackClaimable =
      is2018DataVisCert &&
      isApisMicroservicesCert &&
      isFrontEndLibsCert &&
      isInfosecQaCert &&
      isJsAlgoDataStructCert &&
      isRespWebDesignCert;

    // Keep the settings page certSlug as full-stack rather than
    // legacy-full-stack so we don't break existing links
    const certSlug = 'full-stack';
    const certLocation = `/certification/${username}/${certSlug}`;

    const buttonStyle = {
      marginBottom: '30px',
      padding: '6px 12px',
      fontSize: '18px'
    };

    const createClickHandler = certSlug => e => {
      e.preventDefault();
      if (isFullStackCert) {
        return navigate(certLocation);
      }
      return isHonest
        ? verifyCert(certSlug)
        : createFlashMessage(honestyInfoMessage);
    };
    return (
      <FullWidthRow key={certSlug}>
        <Spacer size='medium' />
        <h3 className='text-center'>
          {t('certification.title.Legacy Full Stack Certification')}
        </h3>
        <div>
          <p>
            {t('settings.claim-legacy', {
              cert: t('certification.title.Legacy Full Stack Certification')
            })}
          </p>
          <ul>
            <li>{t('certification.title.Responsive Web Design')}</li>
            <li>
              {t(
                'certification.title.JavaScript Algorithms and Data Structures'
              )}
            </li>
            <li>{t('certification.title.Front End Development Libraries')}</li>
            <li>{t('certification.title.Data Visualization')}</li>
            <li>{t('certification.title.Back End Development and APIs')}</li>
            <li>
              {t(
                'certification.title.Legacy Information Security and Quality Assurance'
              )}
            </li>
          </ul>
        </div>

        <div className={'col-xs-12'}>
          {fullStackClaimable ? (
            <Button
              bsSize='sm'
              bsStyle='primary'
              className={'col-xs-12'}
              href={certLocation}
              id={'button-' + certSlug}
              onClick={createClickHandler(certSlug)}
              style={buttonStyle}
              target='_blank'
            >
              {isFullStackCert
                ? t('buttons.show-cert')
                : t('buttons.claim-cert')}
            </Button>
          ) : (
            <Button
              bsSize='sm'
              bsStyle='primary'
              className={'col-xs-12'}
              disabled={true}
              id={'button-' + certSlug}
              style={buttonStyle}
              target='_blank'
            >
              {t('buttons.claim-cert')}
            </Button>
          )}
        </div>
        <Spacer size='medium' />
      </FullWidthRow>
    );
  };

  render() {
    const { solutionViewer, projectViewer } = this.state;
    const { t } = this.props;

    return (
      <ScrollableAnchor id='certification-settings'>
        <section className='certification-settings'>
          <SectionHeader>{t('settings.headings.certs')}</SectionHeader>
          {certifications.map(certName =>
            this.renderCertifications(certName, projectMap)
          )}
          <SectionHeader>{t('settings.headings.legacy-certs')}</SectionHeader>
          {this.renderLegacyFullStack()}
          {legacyCertifications.map(certName =>
            this.renderCertifications(certName, legacyProjectMap)
          )}
          <ProjectModal
            {...solutionViewer}
            handleSolutionModalHide={this.handleSolutionModalHide}
          />
          <ProjectPreviewModal
            {...projectViewer}
            closeText={t('buttons.close')}
            showProjectPreview={true}
          />
        </section>
      </ScrollableAnchor>
    );
  }
}

CertificationSettings.displayName = 'CertificationSettings';
CertificationSettings.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps
)(withTranslation()(CertificationSettings));
