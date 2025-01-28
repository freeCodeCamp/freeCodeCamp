import React from 'react';
import { SuperBlocks } from '../../../shared/config/curriculum';
import APIIcon from './icons/api';
import D3Icon from './icons/d3';
import DatabaseIcon from './icons/database';
import JavaScriptIcon from './icons/javascript';
import ReactIcon from './icons/react';
import TensorflowIcon from './icons/tensorflow';
import Algorithm from './icons/algorithm';
import Analytics from './icons/analytics';
import Clipboard from './icons/clipboard';
import PythonIcon from './icons/python';
import ResponsiveDesign from './icons/responsive-design';
import Shield from './icons/shield';
import VikingHelmet from './icons/viking-helmet';
import Graduation from './icons/graduation';
import CollegeAlgebra from './icons/college-algebra';
import CSharpLogo from './icons/c-sharp-logo';
import A2EnglishIcon from './icons/a2-english';
import B1EnglishIcon from './icons/b1-english';
import RosettaCodeIcon from './icons/rosetta-code';
import Code from './icons/code';

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
  [SuperBlocks.FullStackDeveloper]: Code,
  [SuperBlocks.A2English]: A2EnglishIcon,
  [SuperBlocks.B1English]: B1EnglishIcon,
  [SuperBlocks.RosettaCode]: RosettaCodeIcon,
  [SuperBlocks.PythonForEverybody]: PythonIcon
};

type SuperBlockIconProps = {
  superBlock: SuperBlocks;
} & React.SVGProps<SVGSVGElement>;

export function SuperBlockIcon(props: SuperBlockIconProps): JSX.Element {
  const { superBlock, ...iconProps } = props;
  const Icon = iconMap[superBlock] ? iconMap[superBlock] : ResponsiveDesign;

  return <Icon {...iconProps} />;
}
