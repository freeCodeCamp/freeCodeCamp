import { find } from 'lodash-es';
import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Table, Spacer } from '@freecodecamp/ui';

import { Link } from '../components/helpers';
import ProjectModal from '../components/SolutionViewer/project-modal';
import type {
  ChallengeData,
  CompletedChallenge,
  User
} from '../redux/prop-types';
import { certsToProjects } from '../../config/cert-and-project-map';

import { SolutionDisplayWidget } from '../components/solution-display-widget';
import ProjectPreviewModal from '../templates/Challenges/components/project-preview-modal';
import ExamResultsModal from '../components/SolutionViewer/exam-results-modal';

import { openModal } from '../templates/Challenges/redux/actions';

import { regenerateMissingProperties } from '../../../shared/utils/polyvinyl';
import '../components/layouts/project-links.css';
import { Certification } from '../../../shared/config/certification-settings';
interface ShowProjectLinksProps {
  certSlug: Certification;
  name: string;
  user: User;
  openModal: (arg: string) => void;
}

type SolutionState = {
  projectTitle: string;
  completedChallenge: CompletedChallenge | null;
  showCode: boolean;
};

const initSolutionState: SolutionState = {
  projectTitle: '',
  completedChallenge: null,
  showCode: false
};

const mapDispatchToProps = {
  openModal
};

const ShowProjectLinks = (props: ShowProjectLinksProps): JSX.Element => {
  const [solutionState, setSolutionState] = useState(initSolutionState);

  const handleSolutionModalHide = () => setSolutionState(initSolutionState);

  const { t } = useTranslation();

  const getProjectSolution = (projectId: string, projectTitle: string) => {
    const {
      user: { completedChallenges },
      openModal
    } = props;
    const completedProject = find(
      completedChallenges,
      ({ id }) => projectId === id
    );

    if (!completedProject) {
      return null;
    }

    const showUserCode = () =>
      setSolutionState({
        projectTitle,
        completedChallenge: completedProject,
        showCode: true
      });

    const showProjectPreview = () => {
      setSolutionState({
        projectTitle,
        completedChallenge: completedProject,
        showCode: false
      });
      openModal('projectPreview');
    };

    const showExamResults = () => {
      setSolutionState({
        projectTitle,
        completedChallenge: completedProject,
        showCode: false
      });
      openModal('examResults');
    };

    return (
      <SolutionDisplayWidget
        completedChallenge={completedProject}
        projectTitle={projectTitle}
        displayContext='certification'
        showUserCode={showUserCode}
        showProjectPreview={showProjectPreview}
        showExamResults={showExamResults}
      ></SolutionDisplayWidget>
    );
  };

  const ProjectsFor = ({ certSlug }: { certSlug: Certification }) => {
    if (certSlug === Certification.LegacyFullStack) {
      const certs = [
        { name: Certification.RespWebDesign },
        { name: Certification.JsAlgoDataStruct },
        { name: Certification.LegacyFrontEnd },
        { name: Certification.LegacyDataVis },
        { name: Certification.BackEndDevApis },
        { name: Certification.LegacyInfoSecQa }
      ] as const;

      return (
        <>
          {certs.map((cert, ind) => {
            const certLocation = `/certification/${username}/${cert.name}`;

            return (
              <tr key={ind}>
                <td>
                  <Link className='project-link' to={certLocation} external>
                    {t(`certification.title.${cert.name}`)}
                  </Link>
                </td>
              </tr>
            );
          })}
        </>
      );
    }

    const projects = certsToProjects[certSlug];
    return (
      <>
        {projects.map(({ link, title, id }) => (
          <tr key={id}>
            <td className='col-xs-8'>
              <Link to={link}>
                {t(`certification.projects.title.${title}`, title)}
              </Link>
            </td>
            <td className='col-xs-4'>{getProjectSolution(id, title)}</td>
          </tr>
        ))}
      </>
    );
  };

  const {
    certSlug,
    name,
    user: { username }
  } = props;
  const { completedChallenge, showCode, projectTitle } = solutionState;
  const examResults = completedChallenge?.examResults;

  const getCertHeading = (cert: Certification) => {
    if (cert === Certification.LegacyFullStack) {
      return 'certification.project.heading-legacy-full-stack';
    } else if (cert === Certification.FoundationalCSharp) {
      return 'certification.project.heading-exam';
    } else {
      return 'certification.project.heading';
    }
  };

  const challengeData: ChallengeData | null = completedChallenge
    ? {
        ...completedChallenge,
        // // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        challengeFiles:
          completedChallenge?.challengeFiles?.map(
            regenerateMissingProperties
          ) ?? null
      }
    : null;

  return (
    <div data-playwright-test-label='project-links'>
      {t(getCertHeading(certSlug), { user: name })}
      <Spacer size='m' />
      <Table striped>
        <thead>
          <tr>
            <th>
              <span className='sr-only'>{t('settings.headings.certs')}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <ProjectsFor certSlug={certSlug} />
        </tbody>
      </Table>
      <Spacer size='m' />
      <ProjectModal
        challengeFiles={completedChallenge?.challengeFiles ?? null}
        handleSolutionModalHide={handleSolutionModalHide}
        isOpen={showCode}
        projectTitle={projectTitle}
        // 'solution' is theoretically never 'null', if it a JsAlgoData cert
        // which is the only time we use the modal
        solution={completedChallenge?.solution as undefined | string}
      />
      <ProjectPreviewModal
        challengeData={challengeData}
        closeText={t('buttons.close')}
        previewTitle={projectTitle}
      />
      <ExamResultsModal projectTitle={projectTitle} examResults={examResults} />

      {certSlug !== Certification.FoundationalCSharp && (
        <Trans i18nKey='certification.project.footnote'>
          If you suspect that any of these projects violate the{' '}
          <a
            href='https://www.freecodecamp.org/news/academic-honesty-policy/'
            rel='noreferrer'
            target='_blank'
          >
            academic honesty policy
          </a>
          , please{' '}
          <a
            href={`/user/${username}/report-user`}
            rel='noreferrer'
            target='_blank'
          >
            report this to our team
          </a>
          .
        </Trans>
      )}
    </div>
  );
};

ShowProjectLinks.displayName = 'ShowProjectLinks';

export default connect(null, mapDispatchToProps)(ShowProjectLinks);
