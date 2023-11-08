import debugFactory from 'debug';
const log = debugFactory('fcc:boot:user');

const allowedTitles = ['Foundational C# with Microsoft Survey'];

export function validateSurvey(req, res, next) {
  const { title, responses } = req.body.surveyResults || {
    title: '',
    responses: []
  };

  if (
    !allowedTitles.includes(title) ||
    !Array.isArray(responses) ||
    !responses.every(
      r => typeof r.question === 'string' && typeof r.response === 'string'
    )
  ) {
    return res.status(400).json({
      type: 'error',
      message: 'flash.survey.err-1'
    });
  }

  next();
}

export function createDeleteUserSurveys(app) {
  const { Survey } = app.models;

  return async function deleteUserSurveys(req, res, next) {
    try {
      await Survey.destroyAll({ userId: req.user.id });
      req.userSurveysDeleted = true;
    } catch (e) {
      req.userSurveysDeleted = false;
      log(`An error occurred deleting Surveys for user with id ${req.user.id}`);
    }

    next();
  };
}
