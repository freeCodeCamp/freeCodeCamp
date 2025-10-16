import { Certification } from '../../../../../../shared-dist/config/certification-settings';
import { User } from '../../../../redux/prop-types';

export const getCertifications = (user: User) => {
  const {
    isRespWebDesignCert,
    isRespWebDesignCertV9,
    is2018DataVisCert,
    isFrontEndLibsCert,
    isJavascriptCertV9,
    isJsAlgoDataStructCert,
    isApisMicroservicesCert,
    isInfosecQaCert,
    isQaCertV7,
    isInfosecCertV7,
    isFrontEndCert,
    isBackEndCert,
    isDataVisCert,
    isFullStackCert,
    isSciCompPyCertV7,
    isDataAnalysisPyCertV7,
    isMachineLearningPyCertV7,
    isRelationalDatabaseCertV8,
    isCollegeAlgebraPyCertV8,
    isFoundationalCSharpCertV8,
    isJsAlgoDataStructCertV8
  } = user;

  return {
    hasModernCert:
      isRespWebDesignCert ||
      isRespWebDesignCertV9 ||
      is2018DataVisCert ||
      isFrontEndLibsCert ||
      isApisMicroservicesCert ||
      isQaCertV7 ||
      isInfosecCertV7 ||
      isFullStackCert ||
      isSciCompPyCertV7 ||
      isDataAnalysisPyCertV7 ||
      isMachineLearningPyCertV7 ||
      isRelationalDatabaseCertV8 ||
      isCollegeAlgebraPyCertV8 ||
      isFoundationalCSharpCertV8 ||
      isJavascriptCertV9 ||
      isJsAlgoDataStructCertV8,
    hasLegacyCert:
      isFrontEndCert ||
      isJsAlgoDataStructCert ||
      isBackEndCert ||
      isDataVisCert ||
      isInfosecQaCert,
    isFullStackCert,
    currentCerts: [
      {
        show: isRespWebDesignCert,
        title: 'Responsive Web Design Certification',
        certSlug: Certification.RespWebDesign
      },
      {
        show: isRespWebDesignCertV9,
        title: 'Responsive Web Design Certification',
        certSlug: Certification.RespWebDesignV9
      },
      {
        show: isJavascriptCertV9,
        title: 'JavaScript Certification',
        certSlug: Certification.JsV9
      },
      {
        show: isJsAlgoDataStructCertV8,
        title: 'JavaScript Algorithms and Data Structures Certification',
        certSlug: Certification.JsAlgoDataStructNew
      },
      {
        show: isFrontEndLibsCert,
        title: 'Front End Development Libraries Certification',
        certSlug: Certification.FrontEndDevLibs
      },
      {
        show: is2018DataVisCert,
        title: 'Data Visualization Certification',
        certSlug: Certification.DataVis
      },
      {
        show: isRelationalDatabaseCertV8,
        title: 'Relational Database Certification',
        certSlug: Certification.RelationalDb
      },
      {
        show: isApisMicroservicesCert,
        title: 'Back End Development and APIs Certification',
        certSlug: Certification.BackEndDevApis
      },
      {
        show: isQaCertV7,
        title: 'Quality Assurance Certification',
        certSlug: Certification.QualityAssurance
      },
      {
        show: isSciCompPyCertV7,
        title: 'Scientific Computing with Python Certification',
        certSlug: Certification.SciCompPy
      },
      {
        show: isDataAnalysisPyCertV7,
        title: 'Data Analysis with Python Certification',
        certSlug: Certification.DataAnalysisPy
      },
      {
        show: isInfosecCertV7,
        title: 'Information Security Certification',
        certSlug: Certification.InfoSec
      },
      {
        show: isMachineLearningPyCertV7,
        title: 'Machine Learning with Python Certification',
        certSlug: Certification.MachineLearningPy
      },
      {
        show: isCollegeAlgebraPyCertV8,
        title: 'College Algebra with Python Certification',
        certSlug: Certification.CollegeAlgebraPy
      },
      {
        show: isFoundationalCSharpCertV8,
        title: 'Foundational C# with Microsoft Certification',
        certSlug: Certification.FoundationalCSharp
      }
    ],
    legacyCerts: [
      {
        show: isFrontEndCert,
        title: 'Front End Certification',
        certSlug: Certification.LegacyFrontEnd
      },
      {
        show: isJsAlgoDataStructCert,
        title: 'Legacy JavaScript Algorithms and Data Structures Certification',
        certSlug: Certification.JsAlgoDataStruct
      },
      {
        show: isBackEndCert,
        title: 'Back End Certification',
        certSlug: Certification.LegacyBackEnd
      },
      {
        show: isDataVisCert,
        title: 'Data Visualization Certification',
        certSlug: Certification.LegacyDataVis
      },
      {
        show: isInfosecQaCert,
        title: 'Information Security and Quality Assurance Certification',
        // Keep the current public profile cert slug
        certSlug: Certification.LegacyInfoSecQa
      },
      {
        show: isFullStackCert,
        title: 'Full Stack Certification',
        // Keep the current public profile cert slug
        certSlug: Certification.LegacyFullStack
      }
    ]
  };
};
