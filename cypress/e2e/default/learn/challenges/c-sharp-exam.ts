const examUrl =
  '/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/foundational-c-sharp-with-microsoft-certification-exam';

const el = {
  qualifiedAlert: "[data-cy='qualified-for-exam-alert']",
  surveyAlert: "[data-cy='c-sharp-survey-alert']",
  startSurveyBtn: "[data-cy='start-csharp-survey-btn']",
  submitSurveyBtn: "[data-cy='submit-csharp-survey-btn']",
  startExamBtn: "[data-cy='start-exam-btn']",
  examTime: "[data-cy='exam-time']",
  examInput: '.exam-answer-input-visible',
  prevQuestionBtn: "[data-cy='previous-exam-question-btn']",
  nextQuestionBtn: "[data-cy='next-exam-question-btn']",
  exitExamBtn: "[data-cy='exit-exam-btn']",
  finishExamBtn: "[data-cy='finish-exam-btn']"
};

describe('C# Exam Challenge', () => {
  describe('Before completing prerequisite challenges', () => {
    before(() => {
      cy.task('seed');
      cy.login();
    });

    it('Should show prerequisites alert and have "start exam" button disabled', () => {
      cy.visit(examUrl);
      cy.get(el.qualifiedAlert).should('not.exist');
      cy.contains(
        'You have not met the requirements to be eligible for the exam. To qualify, please complete the following challenges:'
      ).should('be.visible');
      cy.contains('Trophy - Write Your First Code Using C#').should(
        'be.visible'
      );
      cy.get(el.surveyAlert).should('not.exist');
      cy.get(el.startExamBtn).should('have.attr', 'aria-disabled');
    });
  });

  describe('After completing prerequisite challenges', () => {
    before(() => {
      cy.task('seed', ['--seed-trophy-challenges']);
      cy.task('deleteSurveys');
      cy.login('trophy-user');
      cy.visit(examUrl);
    });

    it('Should show the survey alert and be able to complete the survey', () => {
      cy.contains('Trophy - Write Your First Code Using C#').should(
        'not.exist'
      );
      cy.get(el.qualifiedAlert).should('not.exist');
      cy.contains(
        'You have not met the requirements to be eligible for the exam. To qualify, please complete the following challenges:'
      ).should('not.exist');
      cy.get(el.surveyAlert).should('be.visible');
      cy.get(el.startExamBtn).should('have.attr', 'aria-disabled');
      cy.get(el.startSurveyBtn).click();
      cy.contains('Foundational C# with Microsoft Survey').should('be.visible');
      cy.get(el.submitSurveyBtn).should('have.attr', 'aria-disabled');
      cy.contains('Student developer').click();
      cy.contains('Novice (no prior experience').click();
      cy.get(el.submitSurveyBtn).should('be.enabled');
    });
  });
});
