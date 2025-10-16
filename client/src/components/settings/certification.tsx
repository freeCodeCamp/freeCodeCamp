import { find } from 'lodash-es';
import React, { MouseEvent, useState } from 'react';
import { withTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import { connect } from 'react-redux';
import { Table, Button, Spacer } from '@freecodecamp/ui';

import { regenerateMissingProperties } from '../../../../shared-dist/utils/polyvinyl';
import ProjectPreviewModal from '../../templates/Challenges/components/project-preview-modal';
import ExamResultsModal from '../SolutionViewer/exam-results-modal';
import { openModal } from '../../templates/Challenges/redux/actions';
import { certsToProjects } from '../../../config/cert-and-project-map';
import { FlashMessages } from '../Flash/redux/flash-messages';
import ProjectModal from '../SolutionViewer/project-modal';
import { FullWidthRow, Link } from '../helpers';
import { SolutionDisplayWidget } from '../solution-display-widget';
import {
  Certification,
  certSlugTypeMap,
  currentCertifications,
  legacyCertifications,
  upcomingCertifications
} from '../../../../shared-dist/config/certification-settings';
import env from '../../../config/env.json';

import type {
  ChallengeData,
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

const createCertifiedMap = ({
  is2018DataVisCert,
  isApisMicroservicesCert,
  isJavascriptCertV9,
  isJsAlgoDataStructCert,
  isInfosecQaCert,
  isQaCertV7,
  isInfosecCertV7,
  isFrontEndLibsCert,
  isRespWebDesignCert,
  isRespWebDesignCertV9,
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
}: ClaimedCertifications): Record<
  Exclude<Certification, Certification.LegacyFullStack>,
  boolean
> => ({
  [Certification.RespWebDesign]: isRespWebDesignCert,
  [Certification.JsAlgoDataStruct]: isJsAlgoDataStructCert,
  [Certification.FrontEndDevLibs]: isFrontEndLibsCert,
  [Certification.DataVis]: is2018DataVisCert,
  [Certification.BackEndDevApis]: isApisMicroservicesCert,
  [Certification.QualityAssurance]: isQaCertV7,
  [Certification.InfoSec]: isInfosecCertV7,
  [Certification.SciCompPy]: isSciCompPyCertV7,
  [Certification.DataAnalysisPy]: isDataAnalysisPyCertV7,
  [Certification.MachineLearningPy]: isMachineLearningPyCertV7,
  [Certification.RelationalDb]: isRelationalDatabaseCertV8,
  [Certification.CollegeAlgebraPy]: isCollegeAlgebraPyCertV8,
  [Certification.FoundationalCSharp]: isFoundationalCSharpCertV8,
  [Certification.LegacyFrontEnd]: isFrontEndCert,
  [Certification.LegacyDataVis]: isDataVisCert,
  [Certification.LegacyBackEnd]: isBackEndCert,
  [Certification.LegacyInfoSecQa]: isInfosecQaCert,
  // LegacyFullStack cannot be handled by this because there are no projects to
  // be rendered. The new FullStackDeveloper certification is a normal
  // certification with projects.
  [Certification.FullStackDeveloper]: false,
  [Certification.RespWebDesignV9]: isRespWebDesignCertV9,
  [Certification.JsV9]: isJavascriptCertV9,
  [Certification.FrontEndDevLibsV9]: false,
  [Certification.PythonV9]: false,
  [Certification.RelationalDbV9]: false,
  [Certification.BackEndDevApisV9]: false,
  [Certification.A2English]: false,
  [Certification.B1English]: false,
  [Certification.A2Spanish]: false,
  [Certification.A2Chinese]: false,
  [Certification.A1Chinese]: false,
  [Certification.JsAlgoDataStructNew]: isJsAlgoDataStructCertV8
});

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

  const handleClaim =
    (certSlug: keyof typeof certSlugTypeMap) =>
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      return isHonest
        ? verifyCert(certSlug)
        : createFlashMessage(honestyInfoMessage);
    };

  return (
    <FullWidthRow key={certSlug}>
      <Spacer size='m' />
      <h3 className='text-center'>
        {t(`certification.title.${Certification.LegacyFullStack}-cert`)}
      </h3>
      <div>
        <p>
          {t('settings.claim-legacy', {
            cert: t(`certification.title.${Certification.LegacyFullStack}-cert`)
          })}
        </p>
        <ul>
          <li>{t(`certification.title.${Certification.RespWebDesign}`)}</li>
          <li>{t(`certification.title.${Certification.JsAlgoDataStruct}`)}</li>
          <li>{t(`certification.title.${Certification.LegacyFrontEnd}`)}</li>
          <li>{t(`certification.title.${Certification.LegacyDataVis}`)}</li>
          <li>{t(`certification.title.${Certification.BackEndDevApis}`)}</li>
          <li>{t(`certification.title.${Certification.LegacyInfoSecQa}`)}</li>
        </ul>
      </div>

      <div>
        {isFullStackCert ? (
          <Button
            size='small'
            variant='primary'
            block={true}
            href={certLocation}
            id={'button-' + certSlug}
            target='_blank'
          >
            {t('buttons.show-cert')}{' '}
            <span className='sr-only'>
              {t(`certification.title.${Certification.LegacyFullStack}`)}
            </span>
          </Button>
        ) : (
          <Button
            size='small'
            variant='primary'
            block={true}
            disabled={!fullStackClaimable}
            id={'button-' + certSlug}
            onClick={handleClaim(certSlug)}
          >
            {t('buttons.claim-cert')}{' '}
            <span className='sr-only'>
              {t(`certification.title.${Certification.LegacyFullStack}`)}
            </span>
          </Button>
        )}
      </div>
      <Spacer size='m' />
    </FullWidthRow>
  );
};

function CertificationSettings(props: CertificationSettingsProps) {
  const [projectTitle, setProjectTitle] = useState('');
  const [challengeFiles, setChallengeFiles] = useState<
    CompletedChallenge['challengeFiles'] | null
  >(null);
  const [challengeData, setChallengeData] = useState<ChallengeData | null>(
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

  const isCertifiedMap = createCertifiedMap(props);
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
            completedProject?.challengeFiles?.map(
              regenerateMissingProperties
            ) ?? null
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
    certSlug,
    t
  }: {
    certSlug: Exclude<Certification, Certification.LegacyFullStack>;
    t: TFunction;
  }) => {
    return (
      <ScrollableAnchor id={`cert-${certSlug}`}>
        <section>
          <FullWidthRow>
            <Spacer size='m' />
            <h3 className='text-center'>
              {t(`certification.title.${certSlug}`, certSlug)}
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
                  certSlug={certSlug}
                  isCert={isCertifiedMap[certSlug]}
                />
              </tbody>
            </Table>
          </FullWidthRow>
        </section>
      </ScrollableAnchor>
    );
  };

  function ProjectsFor({
    certSlug,
    isCert
  }: {
    certSlug: Exclude<Certification, Certification.LegacyFullStack>;
    isCert: boolean;
  }) {
    const { username, isHonest, createFlashMessage, t, verifyCert } = props;
    const certLocation = `/certification/${username}/${certSlug}`;

    const handleClaim = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      return isHonest
        ? verifyCert(certSlug)
        : createFlashMessage(honestyInfoMessage);
    };

    return (
      <>
        {certsToProjects[certSlug].map(({ link, title, id }) => (
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
            {isCert ? (
              <Button block={true} variant='primary' href={certLocation}>
                {t('buttons.show-cert')}{' '}
                <span className='sr-only'>
                  {t(`certification.title.${certSlug}`)}
                </span>
              </Button>
            ) : (
              <Button block={true} variant='primary' onClick={handleClaim}>
                {t('buttons.claim-cert')}{' '}
                <span className='sr-only'>
                  {t(`certification.title.${certSlug}`)}
                </span>
              </Button>
            )}
          </td>
        </tr>
      </>
    );
  }

  const { t } = props;

  return (
    <section className='certification-settings'>
      <SectionHeader>{t('settings.headings.certs')}</SectionHeader>
      {currentCertifications.map(cert => (
        <Certification key={cert} certSlug={cert} t={t} />
      ))}
      <Spacer size='m' />
      <SectionHeader>{t('settings.headings.legacy-certs')}</SectionHeader>
      <LegacyFullStack {...props} />
      {legacyCertifications.map(cert => (
        <Certification key={cert} certSlug={cert} t={t} />
      ))}
      {showUpcomingChanges &&
        upcomingCertifications.map(cert => (
          <Certification key={cert} certSlug={cert} t={t} />
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
