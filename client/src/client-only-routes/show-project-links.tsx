import { find, first } from 'lodash-es';
import React, { useState } from 'react';
import '../components/layouts/project-links.css';
import { Trans, useTranslation } from 'react-i18next';
import ProjectModal from '../components/SolutionViewer/ProjectModal';
import { Spacer, Link } from '../components/helpers';
import { CompletedChallenge, User } from '../redux/prop-types';
import {
  projectMap,
  legacyProjectMap
} from '../resources/cert-and-project-map';

import { SolutionDisplayWidget } from '../components/solution-display-widget';

interface ShowProjectLinksProps {
  certName: string;
  name: string;
  user: User;
}

type SolutionState = {
  projectTitle: string;
  challengeFiles: CompletedChallenge['challengeFiles'];
  solution: CompletedChallenge['solution'];
  isOpen: boolean;
};

const initSolutionState: SolutionState = {
  projectTitle: '',
  challengeFiles: null,
  solution: '',
  isOpen: false
};

const ShowProjectLinks = (props: ShowProjectLinksProps): JSX.Element => {
  const [solutionState, setSolutionState] = useState(initSolutionState);

  const handleSolutionModalHide = () => setSolutionState(initSolutionState);

  const { t } = useTranslation();

  const getProjectSolution = (projectId: string, projectTitle: string) => {
    const {
      user: { completedChallenges }
    } = props;
    const completedProject = find(
      completedChallenges,
      ({ id }) => projectId === id
    );

    if (!completedProject) {
      return null;
    }

    const { solution, challengeFiles } = completedProject;
    const showFilesSolution = () =>
      setSolutionState({
        projectTitle,
        challengeFiles,
        solution,
        isOpen: true
      });

    return (
      <SolutionDisplayWidget
        completedChallenge={completedProject}
        dataCy={`${projectTitle} solution`}
        displayContext='certification'
        showFilesSolution={showFilesSolution}
      ></SolutionDisplayWidget>
    );
  };

  const renderProjectsFor = (certName: string) => {
    if (certName === 'Legacy Full Stack') {
      const legacyCerts = [
        { title: 'Responsive Web Design' },
        { title: 'JavaScript Algorithms and Data Structures' },
        { title: 'Front End Development Libraries' },
        { title: 'Data Visualization' },
        { title: 'Back End Development and APIs' },
        { title: 'Legacy Information Security and Quality Assurance' }
      ] as const;
      return legacyCerts.map((cert, ind) => {
        const mapToUse = (projectMap[cert.title] ||
          legacyProjectMap[cert.title]) as { certSlug: string }[];
        const { certSlug } = first(mapToUse) as { certSlug: string };
        const certLocation = `/certification/${username}/${certSlug}`;
        return (
          <li key={ind}>
            <a
              className='btn-invert project-link'
              href={certLocation}
              rel='noopener noreferrer'
              target='_blank'
            >
              {t(`certification.project.title.${cert.title}`, cert.title)}
            </a>
          </li>
        );
      });
    }
    // @ts-expect-error Error expected until projectMap is typed
    const project = (projectMap[certName] || legacyProjectMap[certName]) as {
      link: string;
      title: string;
      id: string;
    }[];
    return project.map(({ link, title, id }) => (
      <li key={id}>
        <Link className='project-link' to={link}>
          {t(`certification.project.title.${title}`, title)}
        </Link>
        : {getProjectSolution(id, title)}
      </li>
    ));
  };

  const {
    certName,
    name,
    user: { username }
  } = props;
  const { challengeFiles, isOpen, projectTitle, solution } = solutionState;
  return (
    <div>
      {t(
        certName === 'Legacy Full Stack'
          ? 'certification.project.heading-legacy-full-stack'
          : 'certification.project.heading',
        { user: name }
      )}
      <Spacer />
      <ul>{renderProjectsFor(certName)}</ul>
      <Spacer />
      {isOpen ? (
        <ProjectModal
          challengeFiles={challengeFiles}
          handleSolutionModalHide={handleSolutionModalHide}
          isOpen={isOpen}
          projectTitle={projectTitle}
          // 'solution' is theoretically never 'null', if it a JsAlgoData cert
          // which is the only time we use the modal
          solution={solution as undefined | string}
        />
      ) : null}
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
    </div>
  );
};

ShowProjectLinks.displayName = 'ShowProjectLinks';

export default ShowProjectLinks;
