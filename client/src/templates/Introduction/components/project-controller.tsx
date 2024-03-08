import React from 'react';
import {
  ProjectControlButton,
  ProjectControlButtonProps
} from './project-control-button';

interface ProjectControllerProps {
  buttons: ProjectControlButtonProps[];
}

const ProjectController: React.FC<ProjectControllerProps> = ({ buttons }) => (
  <div className='project-controller'>
    {buttons.map((button, index) => (
      <ProjectControlButton
        key={index}
        to={button.to}
        text={button.text}
        className={button.className}
      />
    ))}
  </div>
);

export default ProjectController;
