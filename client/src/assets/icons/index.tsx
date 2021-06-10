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

const iconMap = {
  'responsive-web-design': ResponsiveDesign,
  'javascript-algorithms-and-data-structures': JavaScriptIcon,
  'front-end-libraries': ReactIcon,
  'data-visualization': D3Icon,
  'apis-and-microservices': APIIcon,
  'quality-assurance': Clipboard,
  'scientific-computing-with-python': PythonIcon,
  'data-analysis-with-python': Analytics,
  'information-security': Shield,
  'machine-learning-with-python': TensorflowIcon,
  'coding-interview-prep': Algorithm
};

type SuperBlock = keyof typeof iconMap;

const generateIconComponent = (superBlock: SuperBlock, className: string) => {
  // fallback in case super block doesn't exist and for tests
  const Icon = iconMap[superBlock] ? iconMap[superBlock] : ResponsiveDesign;

  return <Icon className={className} />;
};

export { generateIconComponent };
