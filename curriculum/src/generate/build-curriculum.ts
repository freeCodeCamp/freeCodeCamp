import { getChallengesForLang } from '../get-challenges';
import { CURRICULUM_LOCALE } from '../config';
import { writeGeneratedCurriculum } from '../file-handler';

void getChallengesForLang(CURRICULUM_LOCALE).then(writeGeneratedCurriculum);
