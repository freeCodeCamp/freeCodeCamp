import { generateSearchLink } from './help-modal';

describe('generateSearchLink', () => {
  it("should return a link with search query containing block name and challenge title if the title includes 'step'", () => {
    const link = generateSearchLink(
      'Step 10',
      'learn-basic-javascript-by-building-a-role-playing-game'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=learn%20basic%20javascript%20by%20building%20a%20role%20playing%20game%20-%20Step%2010'
    );
  });

  it("should return a link with search query containing block name and challenge title if the title includes 'task'", () => {
    const link = generateSearchLink(
      'Task 10',
      'learn-greetings-in-your-first-day-at-the-office'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=learn%20greetings%20in%20your%20first%20day%20at%20the%20office%20-%20Task%2010'
    );
  });

  it("should return a link with search query containing only challenge title if the title does not include 'step' or 'task'", () => {
    const link = generateSearchLink(
      'Perform Basic String Formatting in C#',
      'write-your-first-code-using-c-sharp'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=Perform%20Basic%20String%20Formatting%20in%20C%23'
    );
  });
});
