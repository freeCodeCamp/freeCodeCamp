import { describe, expect, it, vi } from 'vitest';
import i18n from '../../../i18n/config-for-tests';
import { generateSearchLink } from './help-modal';

vi.unmock('react-i18next');

describe('generateSearchLink', () => {
  it('should fall back to only the challenge title when the block title translation is missing', async () => {
    await i18n.reloadResources('en', 'intro');

    const link = generateSearchLink(
      'Step 19',
      'workshop-shortest-path-algorithm',
      'python-v9'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=Step%2019%20in%3Atitle'
    );
  });

  it('should include the translated block title when it exists', async () => {
    await i18n.reloadResources('en', 'intro');

    const link = generateSearchLink(
      'Step 10',
      'learn-basic-javascript-by-building-a-role-playing-game',
      'javascript-algorithms-and-data-structures-v8'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=Step%2010%20in%3Atitle'
    );
  });

  it('should include the translated block title for task-based challenges when it exists', () => {
    const link = generateSearchLink(
      'Task 10',
      'learn-greetings-in-your-first-day-at-the-office',
      'a2-english-for-developers'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=Task%2010%20in%3Atitle'
    );
  });

  it('should include the translated block title for non-step challenges when it exists', () => {
    const link = generateSearchLink(
      'Perform Basic String Formatting in C#',
      'write-your-first-code-using-c-sharp',
      'foundational-c-sharp-with-microsoft'
    );

    expect(link).toBe(
      'https://forum.freecodecamp.org/search?q=Perform%20Basic%20String%20Formatting%20in%20C%23%20in%3Atitle'
    );
  });
});
