import { Certification } from '../../config/certification-settings';

const idToPath = new Map(
  Object.entries({
    '561add10cb82ac38a17523bc': Certification.BackEndDevApis,
    '5a553ca864b52e1d8bceea14': Certification.DataVis,
    '561acd10cb82ac38a17513bc': Certification.FrontEndDevLibs,
    '5e611829481575a52dc59c0e': Certification.QualityAssurance,
    '5e6021435ac9d0ecd8b94b00': Certification.InfoSec,
    '561abd10cb81ac38a17513bc': Certification.JsAlgoDataStruct,
    '561add10cb82ac38a17513bc': Certification.RespWebDesign,
    '660add10cb82ac38a17513be': Certification.LegacyBackEnd,
    '561add10cb82ac39a17513bc': Certification.LegacyDataVis,
    '561add10cb82ac38a17513be': Certification.LegacyFrontEnd,
    '561add10cb82ac38a17213bc': Certification.LegacyInfoSecQa,
    '561add10cb82ac38a17213bd': Certification.LegacyFullStack,
    '5e44431b903586ffb414c951': Certification.SciCompPy,
    '5e46fc95ac417301a38fb934': Certification.DataAnalysisPy,
    '5e46fc95ac417301a38fb935': Certification.MachineLearningPy
  })
);

export const getCertIds = (): IterableIterator<string> => idToPath.keys();
export const getPathFromID = (id: string): string | undefined =>
  idToPath.get(id);

export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}
