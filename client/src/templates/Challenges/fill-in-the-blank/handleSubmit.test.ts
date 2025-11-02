import { describe, it, expect } from 'vitest'

function replaceAppleQuotes(str: string): string {
  return str.replace(/[“”]/g, '"').replace(/[‘’]/g, "'")
}



function handleSubmitMock(userAnswers: (string | null)[], fillInTheBlank: any) {
  const blankAnswers = fillInTheBlank.blanks.map((b: any) => b.answer);

  const newAnswersCorrect = userAnswers.map(
    (userAnswer, i) =>
      !!userAnswer &&
      replaceAppleQuotes(userAnswer!.trim()).toLowerCase() ===
        blankAnswers[i].toLowerCase()
  );

  const hasWrongAnswer = newAnswersCorrect.some(a => a === false);


  return {
    newAnswersCorrect,
    hasWrongAnswer,
    showWrong: hasWrongAnswer,
    showFeedback: hasWrongAnswer,
    feedback: hasWrongAnswer ? 'learn.wrong-answer' : null,
    modalOpened: !hasWrongAnswer
  };
}

describe('handleSubmit - Fill in the Blanks', () => {
  const fillInTheBlank = {
    blanks: [{ answer: 'big' }, { answer: 'park' }]
  };


  it('CT1 - deve abrir o modal quando todas as respostas estiverem corretas', () => {
    const userAnswers = ['big', 'park'];
    const result = handleSubmitMock(userAnswers, fillInTheBlank);

    expect(result.newAnswersCorrect).toEqual([true, true]);
    expect(result.hasWrongAnswer).toBe(false);
    expect(result.modalOpened).toBe(true);
    expect(result.showFeedback).toBe(false);
  });


  it('CT2 - deve mostrar feedback de erro quando houver uma resposta incorreta', () => {
    const userAnswers = ['big', 'garden'];
    const result = handleSubmitMock(userAnswers, fillInTheBlank);

    expect(result.newAnswersCorrect).toEqual([true, false]);
    expect(result.hasWrongAnswer).toBe(true);
    expect(result.showWrong).toBe(true);
    expect(result.feedback).toBe('learn.wrong-answer');
  });


  it('CT3 - deve marcar erro quando há campo vazio', () => {
    const userAnswers = ['', 'park'];
    const result = handleSubmitMock(userAnswers, fillInTheBlank);

    expect(result.newAnswersCorrect).toEqual([false, true]);
    expect(result.hasWrongAnswer).toBe(true);
    expect(result.showWrong).toBe(true);
  });


  it('CT4 - deve aceitar resposta com maiúsculas e espaços extras', () => {
    const userAnswers = [' Big ', ' PARK '];
    const result = handleSubmitMock(userAnswers, fillInTheBlank);

    expect(result.newAnswersCorrect).toEqual([true, true]);
    expect(result.hasWrongAnswer).toBe(false);
    expect(result.modalOpened).toBe(true);
  });
});
