import Hikes from './components/Hikes.jsx';
import Lecture from './components/Lecture.jsx';
import Question from './components/Question.jsx';

/*
 * show video /hikes/someVideo
 * show question /hikes/someVideo/question1
 */

export default {
  path: 'hikes',
  component: Hikes,
  childRoutes: [{
    path: ':dashedName',
    component: Lecture
  }, {
    path: ':dashedName/questions/:number',
    component: Question
  }]
};
