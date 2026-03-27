import { validateThemeSwitcher, validateThemeSwitcherWithTimeout } from '../curriculum/utils/curriculum-helpers';

describe('validateThemeSwitcher', () => {
  let originalGetComputedStyle;
  let originalBody;
  
  beforeEach(() => {
    originalGetComputedStyle = window.getComputedStyle;
    originalBody = document.body;
  });
  
  afterEach(() => {
    window.getComputedStyle = originalGetComputedStyle;
    document.body = originalBody;
  });
  
  test('should throw error when background color is not changed', () => {
    const mockComputedStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: 'rgb(255, 255, 255)'
    };
    
    window.getComputedStyle = jest.fn().mockReturnValue(mockComputedStyle);
    
    expect(() => validateThemeSwitcher()).toThrow('Theme switcher did not change background color');
  });
  
  test('should throw error when text color is not changed', () => {
    const mockComputedStyle = {
      backgroundColor: 'rgb(255, 255, 255)',
      color: 'rgb(0, 0, 0)'
    };
    
    window.getComputedStyle = jest.fn().mockReturnValue(mockComputedStyle);
    
    expect(() => validateThemeSwitcher()).toThrow('Theme switcher did not change text color');
  });
  
  test('should return true when both colors are changed', () => {
    const mockComputedStyle = {
      backgroundColor: 'rgb(255, 255, 255)',
      color: 'rgb(0, 0, 0)'
    };
    
    window.getComputedStyle = jest.fn().mockReturnValue(mockComputedStyle);
    
    expect(validateThemeSwitcher()).toBe(true);
  });
  
  test('should handle null/undefined values gracefully', () => {
    const mockComputedStyle = {
      backgroundColor: null,
      color: undefined
    };
    
    window.getComputedStyle = jest.fn().mockReturnValue(mockComputedStyle);
    
    expect(() => validateThemeSwitcher()).toThrow('Theme switcher did not change background color');
  });
});

describe('validateThemeSwitcherWithTimeout', () => {
  let originalGetComputedStyle;
  
  beforeEach(() => {
    originalGetComputedStyle = window.getComputedStyle;
  });
  
  afterEach(() => {
    window.getComputedStyle = originalGetComputedStyle;
  });
  
  test('should resolve when validation passes within timeout', async () => {
    const mockComputedStyle = {
      backgroundColor: 'rgb(255, 255, 255)',
      color: 'rgb(0, 0, 0)'
    };
    
    window.getComputedStyle = jest.fn().mockReturnValue(mockComputedStyle);
    
    await expect(validateThemeSwitcherWithTimeout(100)).resolves.toBe(true);
  });
  
  test('should reject with timeout error when validation fails', async () => {
    const mockComputedStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: 'rgb(0, 0, 0)'
    };
    
    window.getComputedStyle = jest.fn().mockReturnValue(mockComputedStyle);
    
    await expect(validateThemeSwitcherWithTimeout(50)).rejects.toThrow('Theme switcher validation timed out');
  });
});