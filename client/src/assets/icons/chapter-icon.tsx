import React from 'react';
import { FsdChapters } from '../../../../shared/config/chapters';
import DatabaseIcon from './database';
import JavaScriptIcon from './javascript';
import ReactIcon from './react';
import ResponsiveDesign from './responsive-design';
import FreeCodeCampIcon from './freecodecamp-icon';
import Html from './html';
import Css from './css';

const iconMap = {
  freecodecamp: FreeCodeCampIcon,
  html: Html,
  css: Css,
  javascript: JavaScriptIcon,
  'frontend-libraries': ReactIcon,
  'relational-databases': DatabaseIcon,
  'security-and-privacy': ResponsiveDesign
};

type ChapterIconProps = {
  chapter: FsdChapters;
} & React.SVGProps<SVGSVGElement>;

export function ChapterIcon(props: ChapterIconProps): JSX.Element {
  const { chapter, ...iconProps } = props;
  // fallback to RWD Icon
  const Icon = iconMap[chapter] ?? ResponsiveDesign;

  return <Icon {...iconProps} />;
}
