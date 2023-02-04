import React from 'react';
import { SuperBlocks } from '../../../../config/certification-settings';
import APIIcon from './API-icon';
import D3Icon from './D3-icon';
import DatabaseIcon from './Database-icon';
import JavaScriptIcon from './JavaScript-icon';
import ReactIcon from './React-icon';
import TensorflowIcon from './Tensorflow-icon';
import Algorithm from './algorithm';
import Analytics from './analytics';
import Clipboard from './clipboard';
import PythonIcon from './python-icon';
import ResponsiveDesign from './responsive-design';
import Shield from './shield';

const iconMap = {
  [SuperBlocks.RespWebDesignNew]: ResponsiveDesign,
  [SuperBlocks.RespWebDesign]: ResponsiveDesign,
  [SuperBlocks.JsAlgoDataStruct]: JavaScriptIcon,
  [SuperBlocks.JsAlgoDataStructNew]: JavaScriptIcon,
  [SuperBlocks.FrontEndDevLibs]: ReactIcon,
  [SuperBlocks.DataVis]: D3Icon,
  [SuperBlocks.BackEndDevApis]: APIIcon,
  [SuperBlocks.RelationalDb]: DatabaseIcon,
  [SuperBlocks.QualityAssurance]: Clipboard,
  [SuperBlocks.SciCompPy]: PythonIcon,
  [SuperBlocks.DataAnalysisPy]: Analytics,
  [SuperBlocks.InfoSec]: Shield,
  [SuperBlocks.MachineLearningPy]: TensorflowIcon,
  [SuperBlocks.CodingInterviewPrep]: Algorithm
};

const generateIconComponent = (
  superBlock: SuperBlocks,
  className: string
): JSX.Element => {
  // fallback in case super block doesn't exist and for tests
  const Icon = iconMap[superBlock] ? iconMap[superBlock] : ResponsiveDesign;

  return <Icon className={className} />;
};

export { generateIconComponent };
