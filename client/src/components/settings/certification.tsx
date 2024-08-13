import { navigate } from 'gatsby';
import { find } from 'lodash-es';
import React, { MouseEvent, useState } from 'react';
import { withTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import { createSelector } from 'reselect';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import { connect } from 'react-redux';
import { Table, Button } from '@freecodecamp/ui';

import { regeneratePathAndHistory } from '../../../../shared/utils/polyvinyl';
import ProjectPreviewModal from '../../templates/Challenges/components/project-preview-modal';
import ExamResultsModal from '../SolutionViewer/exam-results-modal';
import { openModal } from '../../templates/Challenges/redux/actions';
import {
  currentCertTitles,
  legacyCertTitles,
  upcomingCertTitles,
  certsToProjects,
  type CertTitle
} from '../../../config/cert-and-project-map';
import { FlashMessages } from '../Flash/redux/flash-messages';
import ProjectModal from '../SolutionViewer/project-modal';
import { FullWidthRow, Spacer, Link } from '../helpers';
import { SolutionDisplayWidget } from '../solution-display-widget';
import {
  Certification,
  certSlugTypeMap
} from '../../../../shared/config/certification-settings';
import env from '../../../config/env.json';

import {
  ClaimedCertifications,
  CompletedChallenge,
  GeneratedExamResults,
  User
} from '../../redux/prop-types';
import { createFlashMessage } from '../Flash/redux';
import { verifyCert } from '../../redux/settings/actions';
import SectionHeader from './section-header';

import './certification.css';

const { showUpcomingChanges } = env;

configureAnchors({ offset: -40, scrollDuration: 0 });

const mapDispatchToProps = {
  openModal
};

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
  isCollegeAlgebraPyCertV8,
  isFoundationalCSharpCertV8,
  isJsAlgoDataStructCertV8
}: ClaimedCertifications) => ({
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
  isCollegeAlgebraPyCertV8,
  isFoundationalCSharpCertV8,
  isJsAlgoDataStructCertV8
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
    isCollegeAlgebraPyCertV8,
    isFoundationalCSharpCertV8,
    isJsAlgoDataStructCertV8
  }) => ({
    'Responsive Web Design': isRespWebDesignCert,
    'Legacy JavaScript Algorithms and Data Structures': isJsAlgoDataStructCert,
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
    'Foundational C# with Microsoft': isFoundationalCSharpCertV8,
    'Legacy Front End': isFrontEndCert,
    'Legacy Data Visualization': isDataVisCert,
    'Legacy Back End': isBackEndCert,
    'Legacy Information Security and Quality Assurance': isInfosecQaCert,
    // Certification.
    'Front End Development': false,
    'Upcoming Python Certification': false,
    'A2 English for Developers': false,
    'B1 English for Developers': false,
    'JavaScript Algorithms and Data Structures (Beta)': isJsAlgoDataStructCertV8
  })
);

const honestyInfoMessage = {
  type: 'info',
  message: FlashMessages.HonestFirst
};

type CertificationSettingsProps = {
  createFlashMessage: typeof createFlashMessage;
  t: TFunction;
  verifyCert: typeof verifyCert;
  openModal: typeof openModal;
} & ClaimedCertifications &
  Pick<User, 'completedChallenges' | 'isHonest' | 'username'>;

const LegacyFullStack = (props: CertificationSettingsProps) => {
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
  } = props;

  const fullStackClaimable =
    is2018DataVisCert &&
    isApisMicroservicesCert &&
    isFrontEndLibsCert &&
    isInfosecQaCert &&
    isJsAlgoDataStructCert &&
    isRespWebDesignCert;

  const certSlug = Certification.LegacyFullStack;
  const certLocation = `/certification/${username}/${certSlug}`;

  const createClickHandler =
    (certSlug: keyof typeof certSlugTypeMap) =>
    (e: MouseEvent<HTMLButtonElement>) => {
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
            {t('certification.title.JavaScript Algorithms and Data Structures')}
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

      <div>
        {fullStackClaimable ? (
          <Button
            size='small'
            variant='primary'
            block={true}
            href={certLocation}
            id={'button-' + certSlug}
            // This floating promise is acceptable
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={createClickHandler(certSlug)}
            target='_blank'
          >
            {isFullStackCert ? (
              <>
                {t('buttons.show-cert')}{' '}
                <span className='sr-only'>
                  {t('certification.title.Legacy Full Stack')}
                </span>
              </>
            ) : (
              <>
                {t('buttons.claim-cert')}{' '}
                <span className='sr-only'>
                  {t('certification.title.Legacy Full Stack')}
                </span>
              </>
            )}
          </Button>
        ) : (
          <Button
            size='small'
            variant='primary'
            block={true}
            disabled={true}
            id={'button-' + certSlug}
          >
            {t('buttons.claim-cert')}{' '}
            <span className='sr-only'>
              {t('certification.title.Legacy Full Stack')}
            </span>
          </Button>
        )}
      </div>
      <Spacer size='medium' />
    </FullWidthRow>
  );
};

function CertificationSettings(props: CertificationSettingsProps) {
  const [projectTitle, setProjectTitle] = useState('');
  const [challengeFiles, setChallengeFiles] = useState<
    CompletedChallenge['challengeFiles'] | null
  >(null);
  const [challengeData, setChallengeData] = useState<CompletedChallenge | null>(
    null
  );
  const [solution, setSolution] = useState<string | null>();
  const [examResults, setExamResults] = useState<GeneratedExamResults | null>();
  const [isOpen, setIsOpen] = useState(false);
  function initialiseState() {
    setProjectTitle('');
    setChallengeFiles(null);
    setSolution(null);
    setExamResults(null);
    setIsOpen(false);
  }

  const handleSolutionModalHide = () => initialiseState();

  const getUserIsCertMap = () => isCertMapSelector(props);

  const getProjectSolution = (projectId: string, projectTitle: string) => {
    const { completedChallenges, openModal } = props;
    const completedProject = find(
      completedChallenges,
      ({ id }) => projectId === id
    );
    if (!completedProject) {
      return null;
    }
    const { solution, challengeFiles, examResults } = completedProject;
    const showUserCode = () => {
      setProjectTitle(projectTitle);
      setChallengeFiles(challengeFiles);
      setSolution(solution);
      setIsOpen(true);
    };

    // Type == ChallengeFile or CompletedChallenge?
    const challengeData = completedProject
      ? {
          ...completedProject,
          challengeFiles:
            completedProject?.challengeFiles?.map(regeneratePathAndHistory) ??
            null
        }
      : null;

    const showProjectPreview = () => {
      setProjectTitle(projectTitle);
      setChallengeData(challengeData);
      openModal('projectPreview');
    };

    const showExamResults = () => {
      setProjectTitle(projectTitle);
      setExamResults(examResults as GeneratedExamResults);
      openModal('examResults');
    };

    return (
      <SolutionDisplayWidget
        completedChallenge={completedProject}
        projectTitle={projectTitle}
        showExamResults={showExamResults}
        showUserCode={showUserCode}
        showProjectPreview={showProjectPreview}
        displayContext='settings'
      ></SolutionDisplayWidget>
    );
  };

  const Certification = ({
    certName,
    t
  }: {
    certName: Exclude<CertTitle, 'Legacy Full Stack'>;
    t: TFunction;
  }) => {
    const { certSlug } = certsToProjects[certName][0];
    return (
      <ScrollableAnchor id={`cert-${certSlug}`}>
        <section>
          <FullWidthRow>
            <Spacer size='medium' />
            <h3 className='text-center'>
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
                <ProjectsFor
                  certName={certName}
                  isCert={getUserIsCertMap()[certName]}
                />
              </tbody>
            </Table>
          </FullWidthRow>
        </section>
      </ScrollableAnchor>
    );
  };

  function ProjectsFor({
    certName,
    isCert
  }: {
    certName: Exclude<CertTitle, 'Legacy Full Stack'>;
    isCert: boolean;
  }) {
    const { username, isHonest, createFlashMessage, t, verifyCert } = props;
    const { certSlug } = certsToProjects[certName][0];
    const certLocation = `/certification/${username}/${certSlug}`;
    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (isCert) {
        return navigate(certLocation);
      }
      return isHonest
        ? verifyCert(certSlug)
        : createFlashMessage(honestyInfoMessage);
    };
    return (
      <>
        {certsToProjects[certName].map(({ link, title, id }) => (
          <tr className='project-row' key={id}>
            <td className='project-title col-xs-8'>
              <Link to={link}>
                {t(`certification.project.title.${title}`, title)}
              </Link>
            </td>
            <td className='project-solution col-xs-4'>
              {getProjectSolution(id, title)}
            </td>
          </tr>
        ))}
        <tr key={`cert-${certSlug}-button`}>
          <td colSpan={2}>
            <Button
              block={true}
              variant='primary'
              href={certLocation}
              data-playwright-test-label={`btn-for-${certSlug}`}
              // This floating promise is acceptable
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={clickHandler}
            >
              {isCert ? t('buttons.show-cert') : t('buttons.claim-cert')}{' '}
              <span className='sr-only'>{certName}</span>
            </Button>
          </td>
        </tr>
      </>
    );
  }

  const { t } = props;

  return (
    <section className='certification-settings'>
      <SectionHeader>{t('settings.headings.certs')}</SectionHeader>
      {currentCertTitles.map(title => (
        <Certification key={title} certName={title} t={t} />
      ))}
      <Spacer size='medium' />
      <SectionHeader>{t('settings.headings.legacy-certs')}</SectionHeader>
      <LegacyFullStack {...props} />
      {legacyCertTitles.map(title => (
        <Certification key={title} certName={title} t={t} />
      ))}
      {showUpcomingChanges &&
        upcomingCertTitles.map(title => (
          <Certification key={title} certName={title} t={t} />
        ))}
      <ProjectModal
        {...{
          projectTitle,
          challengeFiles,
          solution: solution ?? undefined,
          isOpen
        }}
        handleSolutionModalHide={handleSolutionModalHide}
      />
      <ProjectPreviewModal
        challengeData={challengeData}
        previewTitle={projectTitle}
        closeText={t('buttons.close')}
        showProjectPreview={true}
      />
      <ExamResultsModal projectTitle={projectTitle} examResults={examResults} />
    </section>
  );
}

CertificationSettings.displayName = 'CertificationSettings';

export default connect(
  null,
  mapDispatchToProps
)(withTranslation()(CertificationSettings));
