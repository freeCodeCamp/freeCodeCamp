import React from 'react';
import { SuperBlocks } from '../../../../config/certification-settings';
import APIIcon from './api';
import D3Icon from './d3';
import DatabaseIcon from './database';
import JavaScriptIcon from './javascript';
import ReactIcon from './react';
import TensorflowIcon from './tensorflow';
import Algorithm from './algorithm';
import Analytics from './analytics';
import Clipboard from './clipboard';
import PythonIcon from './python';
import ResponsiveDesign from './responsive-design';
import Shield from './shield';
import VikingHelmet from './viking-helmet';
import CollegeAlgebra from './college-algebra';

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
  [SuperBlocks.CodingInterviewPrep]: Algorithm,
  [SuperBlocks.TheOdinProject]: VikingHelmet,
  [SuperBlocks.CollegeAlgebraPy]: CollegeAlgebra
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
