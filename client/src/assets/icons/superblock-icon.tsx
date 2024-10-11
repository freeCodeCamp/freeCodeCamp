import React from 'react';
import { SuperBlocks } from '../../../../shared/config/curriculum';
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
import Graduation from './graduation';
import CollegeAlgebra from './college-algebra';
import CSharpLogo from './c-sharp-logo';
import A2EnglishIcon from './a2-english';
import B1EnglishIcon from './b1-english';
import RosettaCodeIcon from './rosetta-code';

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
  [SuperBlocks.ProjectEuler]: Graduation,
  [SuperBlocks.CollegeAlgebraPy]: CollegeAlgebra,
  [SuperBlocks.FoundationalCSharp]: CSharpLogo,
  [SuperBlocks.FrontEndDevelopment]: ResponsiveDesign,
  [SuperBlocks.UpcomingPython]: PythonIcon,
  [SuperBlocks.A2English]: A2EnglishIcon,
  [SuperBlocks.B1English]: B1EnglishIcon,
  [SuperBlocks.RosettaCode]: RosettaCodeIcon,
  [SuperBlocks.PythonForEverybody]: PythonIcon
};

type SuperBlockIconProps = {
  superBlock: SuperBlocks;
} & React.SVGProps<SVGSVGElement>;

export function SuperBlockIcon(props: SuperBlockIconProps): JSX.Element {
  const { superBlock, className, ...iconProps } = props;
  // fallback in case super block doesn't exist and for tests
  const Icon = iconMap[superBlock] ? iconMap[superBlock] : ResponsiveDesign;

  return <Icon className={className} {...iconProps} />;
}
