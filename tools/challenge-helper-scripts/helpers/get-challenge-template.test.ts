import { ObjectId } from 'bson';
import { describe, expect, it } from 'vitest';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import { getTemplate } from './get-challenge-template.js';

const challengeId = new ObjectId('507f1f77bcf86cd799439011');

describe('project challenge templates', () => {
  it.each([
    [challengeTypes.lab, 'html-css-jsx', ['html', 'css', 'jsx'], true],
    [challengeTypes.jsLab, 'typescript', ['ts'], false],
    [challengeTypes.pyLab, 'python', ['py'], false]
  ] as const)(
    'creates a lab template for challenge type %i',
    (challengeType, contentType, languages, hasDemo) => {
      const template = getTemplate(challengeType.toString())({
        challengeId,
        title: 'Build a Test Lab',
        dashedName: 'lab-test',
        challengeType: challengeType.toString(),
        contentType
      });

      expect(template).toContain('title: Build a Test Lab');
      expect(template).toContain(`challengeType: ${challengeType}`);
      expect(template).toContain('dashedName: lab-test');
      expect(template).toContain(
        '**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.'
      );
      expect(template).toContain('**User Stories:**');
      for (const language of languages) {
        expect(template).toContain(`\`\`\`${language}`);
      }
      expect(template.includes('demoType: onClick')).toBe(hasDemo);
    }
  );

  it('includes the Python test scaffold in Python lab templates', () => {
    const template = getTemplate(challengeTypes.pyLab.toString())({
      challengeId,
      title: 'Build a Python Lab',
      dashedName: 'python-lab',
      challengeType: challengeTypes.pyLab.toString(),
      contentType: 'python'
    });

    expect(template).toContain('assert(runPython(');
  });

  it('creates a review template with the project title', () => {
    const template = getTemplate(challengeTypes.review.toString())({
      challengeId,
      title: 'JavaScript Basics Review',
      dashedName: 'review-javascript-basics',
      challengeType: challengeTypes.review.toString()
    });

    expect(template).toContain('title: JavaScript Basics Review');
    expect(template).toContain(`challengeType: ${challengeTypes.review}`);
    expect(template).toContain('dashedName: review-javascript-basics');
    expect(template).toContain('# --assignment--');
    expect(template).toContain(
      'Review the JavaScript Basics Review topics and concepts.'
    );
    expect(template).not.toContain('# --seed--');
  });
});
