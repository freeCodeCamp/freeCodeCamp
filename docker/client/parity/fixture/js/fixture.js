const lessons = [
  'Learn HTML by building a cat photo app',
  'Learn basic CSS by building a cafe menu',
  'Learn CSS colors by building a set of colored markers',
  'Learn HTML forms by building a registration form',
  'Learn the CSS box model by building a Rothko painting',
  'Learn CSS flexbox by building a photo gallery',
  'Learn typography by building a nutrition label',
  'Learn accessibility by building a quiz',
  'Learn more about CSS pseudo selectors by building a balance sheet',
  'Learn intermediate CSS by building a cat painting',
  'Learn responsive web design by building a piano',
  'Learn CSS variables by building a city skyline',
  'Learn CSS grid by building a magazine',
  'Learn CSS animation by building a Ferris wheel',
  'Learn CSS transforms by building a penguin',
  'Learn basic JavaScript by building a role playing game',
  'Learn form validation by building a calorie counter',
  'Learn functional programming by building a spreadsheet',
  'Learn modern JavaScript methods by building football team cards',
  'Learn advanced array methods by building a statistics calculator'
];

const render = (list) =>
  list.map((title, index) => `${index + 1}. ${title}`).join('\n');

globalThis.fixtureLessons = render(lessons);
