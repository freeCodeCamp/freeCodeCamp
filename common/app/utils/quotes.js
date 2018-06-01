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
    quote: 'Twenty years from now you you will be more disappointed by the ' +
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
    quote:
      'You are never too old to set another goal, or to dream a new dream.',
    author: 'C.S. Lewis'
  },
  {
    quote: 'Believe you can and you\'re halfway there.',
    author: 'Theodore Roosevelt'
  },
  {
    quote:
    'I fear not the man who has practiced 10,000 ' +
    'kicks once, but I fear the man who has practiced one kick 10,000 times.',
    author: 'Bruce Lee'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney'
  },
  {
    quote: 'Don’t let yesterday take up too much of today.',
    author: 'Will Rodgers'
  },
  {
    quote:
      'You learn more from failure than from success. Don’t let it stop you.' +
      ' Failure builds character.',
    author: 'Annon'
  },
  {
    quote: 'It’s not whether you get knocked down, it’s whether you get up.',
    author: 'Vince Lombardi'
  },
  {
    quote:
      'If you are working on something that you really care about, you ' +
      'don’t have to be pushed. The vision pulls you.',
    author: 'Steve Jobs'
  },
  {
    quote:
      'People who are crazy enough to think they can change the world, are ' +
      'the ones who do.',
    author: 'Rob Siltanen'
  },
  {
    quote:
      'Failure will never overtake me if my determination to succeed is ' +
      'strong enough.',
    author: 'Og Mandino'
  },
  {
    quote: 'We may encounter many defeats, but we must not be defeated.',
    author: 'Maya Angelou'
  },
  {
    quote:
      'Knowing is not enough; we must apply. Wishing is not enough; we must ' +
      'do.',
    author: 'Johann Wolfgang von Goethe'
  },
  {
    quote: 'Whether you think you can or think you can’t, you’re right.',
    author: 'Henry Ford'
  },
  {
    quote:
      'The only limit to our realization of tomorrow, will be our doubts of ' +
      'today.',
    author: 'Franklin D. Roosevelt'
  },
  {
    quote:
      'You don’t have to be great to start, but you have to start to be great.',
    author: 'Zig Ziglar'
  },
  {
    quote: 'Today’s accomplishments were yesterday’s impossibilities.',
    author: 'Robert H. Schuller'
  }
];

export function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
