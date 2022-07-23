/* eslint-disable no-empty-pattern */
// this one is interesting because the current implementation doesn't have it, but we are using it
import React from 'react';

import { ControlLabelProps } from './types';

export const ControlLabel = ({}: ControlLabelProps) => {
  return <div>Hello, I am a ControlLabel component</div>;
};
