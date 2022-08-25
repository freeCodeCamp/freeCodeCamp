import { FC } from 'react';

import {
  devSegmentId,
  prodSegmentId
} from '../../../../config/analytics-settings';
import envData from '../../../../config/env.json';
import segment from './segment-snippet';

interface SegmentModel {
  load: (id: string) => void;
  page: () => void;
}

const segmentModel: SegmentModel = segment as unknown as SegmentModel;

/* eslint-disable @typescript-eslint/ban-types */
const Segment: FC<{}> = () => {
  // if we have a key for this environment, load it
  const segmentId =
    envData.deploymentEnv === 'staging' ? devSegmentId : prodSegmentId;
  if (segmentId) {
    segmentModel.load(segmentId);
    segmentModel.page();
  }

  return null;
};

export default Segment;
