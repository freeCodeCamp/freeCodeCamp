import { find } from 'lodash-es';
import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Table } from '@freecodecamp/ui';

import { Link, Spacer } from '../components/helpers';
import ProjectModal from '../components/SolutionViewer/project-modal';
import type { CompletedChallenge, User } from '../redux/prop-types';
import {
  certsToProjects,
  type CertTitle
} from '../../config/cert-and-project-map';

import { SolutionDisplayWidget } from '../components/solution-display-widget';
import ProjectPreviewModal from '../templates/Challenges/components/project-preview-modal';
import ExamResultsModal from '../components/SolutionViewer/exam-results-modal';

import { openModal } from '../templates/Challenges/redux/actions';

import { regeneratePathAndHistory } from '../../../shared/utils/polyvinyl';
import '../components/layouts/project-links.css';
interface ShowProjectLinksProps {
  certName: string;
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

  const ProjectsFor = ({ certName }: { certName: CertTitle }) => {
    if (certName === 'Legacy Full Stack') {
      const certs = [
        { title: 'Responsive Web Design' },
        { title: 'Legacy JavaScript Algorithms and Data Structures' },
        { title: 'Front End Development Libraries' },
        { title: 'Data Visualization' },
        { title: 'Back End Development and APIs' },
        { title: 'Legacy Information Security and Quality Assurance' }
      ] as const;

      return (
        <>
          {certs.map((cert, ind) => {
            const projects = certsToProjects[cert.title];
            const { certSlug } = projects[0];
            const certLocation = `/certification/${username}/${certSlug}`;
            return (
              <tr key={ind}>
                <td>
                  <Link className='project-link' to={certLocation} external>
                    {t(`certification.title.${cert.title}`, cert.title)}
                  </Link>
                </td>
              </tr>
            );
          })}
        </>
      );
    }

    const projects = certsToProjects[certName];
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
    certName,
    name,
    user: { username }
  } = props;
  const { completedChallenge, showCode, projectTitle } = solutionState;
  const examResults = completedChallenge?.examResults;

  const getCertHeading = (certName: string) => {
    if (certName == 'Legacy Full Stack') {
      return 'certification.project.heading-legacy-full-stack';
    } else if (certName == 'Foundational C# with Microsoft') {
      return 'certification.project.heading-exam';
    } else {
      return 'certification.project.heading';
    }
  };

  const challengeData: CompletedChallenge | null = completedChallenge
    ? {
        ...completedChallenge,
        // // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        challengeFiles:
          completedChallenge?.challengeFiles?.map(regeneratePathAndHistory) ??
          null
      }
    : null;

  const isCertName = (maybeCertName: string): maybeCertName is CertTitle => {
    if (maybeCertName === 'Legacy Full Stack') return true;
    return maybeCertName in certsToProjects;
  };
  if (!isCertName(certName)) return <div> Unknown Certification</div>;

  return (
    <div data-playwright-test-label='project-links'>
      {t(getCertHeading(certName), { user: name })}
      <Spacer size='medium' />
      <Table striped>
        <thead>
          <tr>
            <th>
              <span className='sr-only'>{t('settings.headings.certs')}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <ProjectsFor certName={certName} />
        </tbody>
      </Table>
      <Spacer size='medium' />
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
        showProjectPreview={true}
      />
      <ExamResultsModal projectTitle={projectTitle} examResults={examResults} />

      {certName != 'Foundational C# with Microsoft' && (
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
