import React from 'react';
import { SuperBlocks } from '../../../../config/certification-settings';
import ToggleCheck from '../../assets/icons/toggle-check';

const certsMap = {
  [SuperBlocks.RespWebDesignNew]: false,
  [SuperBlocks.RespWebDesign]: false,
  [SuperBlocks.JsAlgoDataStruct]: false,
  [SuperBlocks.JsAlgoDataStructNew]: false,
  [SuperBlocks.FrontEndDevLibs]: false,
  [SuperBlocks.DataVis]: false,
  [SuperBlocks.BackEndDevApis]: false,
  [SuperBlocks.RelationalDb]: false,
  [SuperBlocks.QualityAssurance]: false,
  [SuperBlocks.SciCompPy]: false,
  [SuperBlocks.DataAnalysisPy]: false,
  [SuperBlocks.InfoSec]: false,
  [SuperBlocks.MachineLearningPy]: false,
  [SuperBlocks.CodingInterviewPrep]: false
};

interface CertificateEarnedProps {
  superBlock: SuperBlocks;
}

const CertificateEarned = (props: CertificateEarnedProps): JSX.Element => {
  const { superBlock } = props;

  return certsMap[superBlock] ? <ToggleCheck /> : <></>;
};

export default CertificateEarned;
