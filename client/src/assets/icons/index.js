import React from 'react';
import ResponsiveDesign from './ResponsiveDesign';
import JavaScriptIcon from './JavaScriptIcon';
import ReactIcon from './ReactIcon';
import D3Icon from './D3Icon';
import APIIcon from './APIIcon';
import Clipboard from './Clipboard';
import PythonIcon from './PythonIcon';
import Analytics from './Analytics';
import Shield from './Shield';
import TensorflowIcon from './TensorflowIcon';
import Algorithm from './Algorithm';

const generateIconComponent = (superBlock, className) => {
  const iconMap = {
    'Responsive Web Design': ResponsiveDesign,
    'JavaScript Algorithms and Data Structures': JavaScriptIcon,
    'Front End Libraries': ReactIcon,
    'Data Visualization': D3Icon,
    'APIs and Microservices': APIIcon,
    'Quality Assurance': Clipboard,
    'Scientific Computing with Python': PythonIcon,
    'Data Analysis with Python': Analytics,
    'Information Security': Shield,
    'Machine Learning with Python': TensorflowIcon,
    'Coding Interview Prep': Algorithm
  };
  // fallback in case super block doesn't exist and for tests
  const Icon = iconMap[superBlock] ? iconMap[superBlock] : ResponsiveDesign;

  return <Icon className={className} />;
};

export { generateIconComponent };
