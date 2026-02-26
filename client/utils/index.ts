import { Certification } from '@freecodecamp/shared/config/certification-settings';

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
    '5e46fc95ac417301a38fb935': Certification.MachineLearningPy,
    '68db314d3c11a8bff07c7535': Certification.RespWebDesignV9,
    '68c4069c1ef859270e17c495': Certification.JsV9,
    '68e008aa5f80c6099d47b3a2': Certification.FrontEndDevLibsV9,
    '68e6bd5020effa1586e79855': Certification.PythonV9,
    '68e6bd5120effa1586e79856': Certification.RelationalDbV9,
    '68e6bd5120effa1586e79857': Certification.BackEndDevApisV9,
    '64514fda6c245de4d11eb7bb': Certification.FullStackDeveloperV9,
    '651dd7e01d697d0aab7833b7': Certification.A2English
  })
);

export const getCertIds = (): IterableIterator<string> => idToPath.keys();
export const getPathFromID = (id: string): string | undefined =>
  idToPath.get(id);

export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}
