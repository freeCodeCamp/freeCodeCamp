const quotes = [
  {
    quote: 'Never, never, never, never, never, never give up.',
    author: 'Winston Churchill'
  },
  {
    quote: 'The pessimist sees difficulty in every opportunity. ' +
      'The optimist sees opportunity in every difficulty.',
    author: 'Winston Churchill'
  },
  {
    quote: 'Twenty years from now you will be more disappointed by the ' +
      'things that you didn\'t do than by the ones you did do. So throw ' +
      'off the bowlines. Sail away from the safe harbor. Catch the trade ' +
      'winds in your sails.',
    author: 'Mark Twain'
  },
  {
    quote: 'The secret of getting ahead is getting started.',
    author: 'Mark Twain'
  },
  {
    quote: 'Change your life today. Don’t gamble on the future, act now, ' +
      'without delay.',
    author: 'Simone de Beauvoir'
  },
  {
    quote: 'A person who never made a mistake never tried anything new.',
    author: 'Albert Einstein'
  },
  {
    quote: 'Life is like riding a bicycle. To keep your balance, you must ' +
      'keep moving.',
    author: 'Albert Einstein'
  },
  {
    quote: 'Nothing will work unless you do.',
    author: 'Maya Angelou'
  },
  {
    quote: 'The most difficult thing is the decision to act, the rest is ' +
      'merely tenacity.',
    author: 'Amelia Earhart'
  },
  {
    quote: 'When you reach for the stars, you may not quite get them, but ' +
      'you won\'t come up with a handful of mud, either.',
    author: 'Leo Burnett'
  },
  {
    quote: 'The only person you are destined to become is the person you ' +
      'decide to be.',
    author: 'Ralph Waldo Emerson'
  },
  {
    quote: 'You must do the things you think you cannot do.',
    author: 'Eleanor Roosevelt'
  },
  {
    quote: 'You are never too old to set another goal or to dream a new dream.',
    author: 'C.S. Lewis'
  },
  {
    quote: 'Believe you can and you\'re halfway there.',
    author: 'Theodore Roosevelt'
  }
];

export function fetchRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
