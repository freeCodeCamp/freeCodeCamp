import i18n from '../../../../i18n/config-for-tests';
import { generateSearchLink } from './help-modal';

describe('generateSearchLink', () => {
  it("should return a link with search query containing block name and challenge title if the title includes 'step'", async () => {
    await i18n.reloadResources('en', 'intro');
    const link = generateSearchLink(
      'Step 10',
      'learn-basic-javascript-by-building-a-role-playing-game',
      'javascript-algorithms-and-data-structures-v8'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=javascript-algorithms-and-data-structures-v8.blocks.learn-basic-javascript-by-building-a-role-playing-game.title%20-%20Step%2010%20in%3Atitle'
    );
  });

  it("should return a link with search query containing block name and challenge title if the title includes 'task'", () => {
    const link = generateSearchLink(
      'Task 10',
      'learn-greetings-in-your-first-day-at-the-office',
      'a2-english-for-developers'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=a2-english-for-developers.blocks.learn-greetings-in-your-first-day-at-the-office.title%20-%20Task%2010%20in%3Atitle'
    );
  });

  it("should return a link with search query containing only challenge title if the title does not include 'step' or 'task'", () => {
    const link = generateSearchLink(
      'Perform Basic String Formatting in C#',
      'write-your-first-code-using-c-sharp',
      'foundational-c-sharp-with-microsoft'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=foundational-c-sharp-with-microsoft.blocks.write-your-first-code-using-c-sharp.title%20-%20Perform%20Basic%20String%20Formatting%20in%20C%23%20in%3Atitle'
    );
  });
});
