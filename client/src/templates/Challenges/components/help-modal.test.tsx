import { generateSearchLink } from './help-modal';

describe('generateSearchLink', () => {
  it("should return a link with search query containing block name and challenge title if the title includes 'step'", () => {
    const link = generateSearchLink(
      'Step 10',
      'learn-basic-javascript-by-building-a-role-playing-game',
      'javascript-algorithms-and-data-structures-v8'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=Learn%20Basic%20Javascript%20By%20Building%20a%20Role%20Playing%20Game%20-%20Step%2010'
    );
  });

  it("should return a link with search query containing block name and challenge title if the title includes 'task'", () => {
    const link = generateSearchLink(
      'Task 10',
      'learn-greetings-in-your-first-day-at-the-office',
      'a2-english-for-developers'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=learn%20greetings%20in%20your%20first%20day%20at%20the%20office%20-%20Task%2010'
    );
  });

  it("should return a link with search query containing only challenge title if the title does not include 'step' or 'task'", () => {
    const link = generateSearchLink(
      'Perform Basic String Formatting in C#',
      'write-your-first-code-using-c-sharp',
      'foundational-c-sharp-with-microsoft'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=Write%20Your%20First%20Code%20Using%20C%23'
    );
  });
});
