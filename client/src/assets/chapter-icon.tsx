import React from 'react';
import {
  EsA1SpanishChapters,
  FsdChapters,
  ZhA1ChineseChapters
} from '../../../shared-dist/config/chapters';
import DatabaseIcon from './icons/database';
import JavaScriptIcon from './icons/javascript';
import ReactIcon from './icons/react';
import ResponsiveDesign from './icons/responsive-design';
import FreeCodeCampIcon from './icons/freecodecamp';
import Html from './icons/html';
import Css from './icons/css';
import NodeIcon from './icons/node';
import Python from './icons/python';
import Graduation from './icons/graduation';
import {
  faComments,
  faCubes,
  faDoorOpen,
  faHands,
  faIdCard,
  faPeopleGroup
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconMap = {
  [FsdChapters.Welcome]: FreeCodeCampIcon,
  [FsdChapters.Html]: Html,
  [FsdChapters.Css]: Css,
  [FsdChapters.Javascript]: JavaScriptIcon,
  [FsdChapters.FrontendLibraries]: ReactIcon,
  [FsdChapters.RelationalDatabases]: DatabaseIcon,
  [FsdChapters.BackendJavascript]: NodeIcon,
  [FsdChapters.Python]: Python,
  [FsdChapters.Career]: Graduation,
  [FsdChapters.RwdExam]: Graduation,
  [FsdChapters.JsExam]: Graduation,
  [FsdChapters.Fed]: ReactIcon,
  [FsdChapters.FedExam]: Graduation,
  [FsdChapters.PythonExam]: Graduation,
  [FsdChapters.RdbExam]: Graduation,
  [FsdChapters.Bed]: NodeIcon,
  [FsdChapters.BedExam]: Graduation,
  [FsdChapters.FsdExam]: Graduation,
  [ZhA1ChineseChapters.zhA1Welcome]: faDoorOpen,
  [ZhA1ChineseChapters.zhA1PinYin]: faCubes,
  [ZhA1ChineseChapters.zhA1Greetings]: faComments,
  [ZhA1ChineseChapters.zhA1Family]: faPeopleGroup,
  [ZhA1ChineseChapters.zhA1Expressing]: faHands,
  [EsA1SpanishChapters.esA1Welcome]: faDoorOpen,
  [EsA1SpanishChapters.esA1Fundamentals]: faCubes,
  [EsA1SpanishChapters.esA1Greetings]: faComments,
  [EsA1SpanishChapters.esA1Details]: faIdCard
};

type ChapterIconProps = {
  chapter: FsdChapters;
} & React.SVGProps<SVGSVGElement>;

export function ChapterIcon(props: ChapterIconProps): JSX.Element {
  const { chapter, ...iconProps } = props;
  const Icon = iconMap[chapter] ?? ResponsiveDesign;

  if (typeof Icon === 'object') {
    return <FontAwesomeIcon icon={Icon} />;
  }

  return <Icon {...iconProps} />;
}
