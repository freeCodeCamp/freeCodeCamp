/* eslint-disable react/jsx-sort-props */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ShowProjectLinks = props => {
  const getProjectSolution = (projectId, projectTitle) => {
    const { completedChallenges } = this.props;
    const completedProject = find(
      completedChallenges,
      ({ id }) => projectId === id
    );
    if (!completedProject) {
      return null;
    }
    const { solution, githubLink, files } = completedProject;
    const onClickHandler = () =>
      this.setState({
        solutionViewer: {
          projectTitle,
          files,
          solution,
          isOpen: true
        }
      });
    if (files && files.length) {
      return (
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          onClick={onClickHandler}
        >
          Show Code
        </Button>
      );
    }
    if (githubLink) {
      return (
        <div className='solutions-dropdown'>
          <DropdownButton
            block={true}
            bsStyle='primary'
            className='btn-invert'
            id={`dropdown-for-${projectId}`}
            title='Show Solutions'
          >
            <MenuItem
              bsStyle='primary'
              href={solution}
              rel='noopener noreferrer'
              target='_blank'
            >
              Front End
            </MenuItem>
            <MenuItem
              bsStyle='primary'
              href={githubLink}
              rel='noopener noreferrer'
              target='_blank'
            >
              Back End
            </MenuItem>
          </DropdownButton>
        </div>
      );
    }
    if (maybeUrlRE.test(solution)) {
      return (
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          href={solution}
          rel='noopener noreferrer'
          target='_blank'
        >
          Show Solution
        </Button>
      );
    }
    return (
      <Button
        block={true}
        bsStyle='primary'
        className='btn-invert'
        onClick={onClickHandler}
      >
        Show Code
      </Button>
    );
  };

  const renderCertification = certName => (
    <FullWidthRow key={certName}>
      <Spacer />
      <h3 className='text-center'>{certName}</h3>
      <Table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          {this.renderProjectsFor(certName, this.getUserIsCertMap()[certName])}
        </tbody>
      </Table>
    </FullWidthRow>
  );

  const renderProjectsFor = (certName, isCert) => {
    const { username, isHonest, createFlashMessage, verifyCert } = this.props;
    const { superBlock } = first(projectMap[certName]);
    const certLocation = `/certification/${username}/${superBlock}`;
    const createClickHandler = superBlock => e => {
      e.preventDefault();
      if (isCert) {
        return navigate(certLocation);
      }
      return isHonest
        ? verifyCert(superBlock)
        : createFlashMessage(honestyInfoMessage);
    };
    return projectMap[certName].map(({ link, title, id }) => (
      <tr className='project-row' key={id}>
        <td className='project-title col-sm-8'>
          <Link to={link}>{title}</Link>
        </td>
        <td className='project-solution col-sm-4'>
          {this.getProjectSolution(id, title)}
        </td>
      </tr>
    ));
  };
  return (
    <div>
      As part of this certification, {props.name} built the following projects
      and got all automated test suites to pass: If you suspect that any of
      these projects violate the{' '}
      <a
        href='https://www.freecodecamp.org/news/academic-honesty-policy/'
        target='_blank'
      >
        academic honesty policy
      </a>
      , please [report this to our team](Report URL).
    </div>
  );
};

export default ShowProjectLinks;
