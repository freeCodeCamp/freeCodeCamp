import React from 'react';
import { FsdChapters } from '../../../shared/config/chapters';
import DatabaseIcon from './icons/database';
import JavaScriptIcon from './icons/javascript';
import ReactIcon from './icons/react';
import ResponsiveDesign from './icons/responsive-design';
import FreeCodeCampIcon from './icons/freecodecamp';
import Html from './icons/html';
import Css from './icons/css';
import NodeIcon from './icons/node';
import Python from './icons/python';

const iconMap = {
  [FsdChapters.Welcome]: FreeCodeCampIcon,
  [FsdChapters.Html]: Html,
  [FsdChapters.Css]: Css,
  [FsdChapters.Javascript]: JavaScriptIcon,
  [FsdChapters.FrontendLibraries]: ReactIcon,
  [FsdChapters.RelationalDatabases]: DatabaseIcon,
  [FsdChapters.BackendJavascript]: NodeIcon,
  [FsdChapters.Python]: Python
};

type ChapterIconProps = {
  chapter: FsdChapters;
} & React.SVGProps<SVGSVGElement>;

export function ChapterIcon(props: ChapterIconProps): JSX.Element {
  const { chapter, ...iconProps } = props;
  const Icon = iconMap[chapter] ?? ResponsiveDesign;

  return <Icon {...iconProps} />;
}
