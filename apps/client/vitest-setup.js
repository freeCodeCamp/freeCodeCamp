import { vi, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';

vi.mock('react-spinkit');
vi.mock('gatsby');
vi.mock('react-i18next');

afterEach(() => {
  // Vitest doesn't automatically call cleanup. Without it the rendered
  // components are never removed and so tests are not independent.
  cleanup();
});
