import type { Quiz, QuizAttempt } from '../../../redux/prop-types';
import superBlockStructure from '../../../../../curriculum/superblock-structure/full-stack.json';

/**
 * Get a list of question sets that the page can randomly picked from.
 * If there was a previous attempt, the question set used in the attempt is excluded.
 */
export const getAvailableQuizzes = ({
  quizzes,
  attemptedQuiz
}: {
  quizzes: Quiz[];
  attemptedQuiz: QuizAttempt | undefined;
}): Quiz[] => {
  if (quizzes.length === 1 || !attemptedQuiz) {
    return quizzes;
  }

  return quizzes.filter(
    (_, index) => index.toString() !== attemptedQuiz.quizId
  );
};

/** Get the review block of the given chapter and module */
export const getReviewBlock = ({
  chapter,
  module
}: {
  chapter: string | undefined;
  module: string | undefined;
}) => {
  const currentChapter = superBlockStructure.chapters.find(
    c => c.dashedName === chapter
  );

  const currentModule = currentChapter?.modules.find(
    m => m.dashedName === module
  );

  const reviewBlock = currentModule?.blocks.find(b =>
    b.dashedName.startsWith('review')
  );

  return reviewBlock;
};
