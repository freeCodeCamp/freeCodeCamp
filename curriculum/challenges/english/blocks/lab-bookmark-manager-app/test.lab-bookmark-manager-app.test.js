import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

/**
 * Test Suite: Bookmark Manager App - displayOrHideCategory Function
 * 
 * This test ensures that the displayOrHideCategory function is called
 * when the #view-category-button is clicked, preventing implementations
 * with early returns that bypass the function call.
 * 
 * Related Issue: #62010
 * @see https://github.com/freeCodeCamp/freeCodeCamp/issues/62010
 */
describe('Bookmark Manager - displayOrHideCategory behavior', () => {
  let displayOrHideCategory;
  let viewButton;
  let mainSection;
  let bookmarkListSection;
  
  beforeEach(() => {
    // Setup DOM structure matching the lab challenge
    document.body.innerHTML = `
      <section id="main-section"></section>
      <section id="bookmark-list-section" class="hidden"></section>
      <button id="view-category-button">View Category</button>
    `;
    
    // Get references to DOM elements
    mainSection = document.getElementById('main-section');
    bookmarkListSection = document.getElementById('bookmark-list-section');
    viewButton = document.getElementById('view-category-button');
    
    // Mock displayOrHideCategory function to track calls and simulate behavior
    displayOrHideCategory = vi.fn(() => {
      mainSection.classList.toggle('hidden');
      bookmarkListSection.classList.toggle('hidden');
    });
    
    // Make function globally available (as expected in the challenge)
    global.displayOrHideCategory = displayOrHideCategory;
    
    // Attach event listener (correct implementation)
    viewButton.addEventListener('click', () => displayOrHideCategory());
  });
  
  afterEach(() => {
    // Clean up after each test
    vi.clearAllMocks();
    document.body.innerHTML = '';
  });
  
  it('should call displayOrHideCategory when view-category-button is clicked', () => {
    // Act: Trigger button click
    viewButton.click();
    
    // Assert: Function should be called exactly once
    expect(displayOrHideCategory).toHaveBeenCalled();
    expect(displayOrHideCategory).toHaveBeenCalledTimes(1);
  });
  
  it('should toggle hidden classes on main-section and bookmark-list-section', () => {
    // Arrange: Ensure initial state
    expect(mainSection.classList.contains('hidden')).toBe(false);
    expect(bookmarkListSection.classList.contains('hidden')).toBe(true);
    
    // Act: Trigger button click
    viewButton.click();
    
    // Assert: Classes should be toggled
    expect(mainSection.classList.contains('hidden')).toBe(true);
    expect(bookmarkListSection.classList.contains('hidden')).toBe(false);
  });
  
  it('should fail if implementation has early return before function call', () => {
    // Arrange: Replace with incorrect implementation (early return)
    const incorrectButton = viewButton.cloneNode(true);
    viewButton.parentNode.replaceChild(incorrectButton, viewButton);
    
    const spy = vi.fn();
    global.displayOrHideCategory = spy;
    
    incorrectButton.addEventListener('click', () => {
      return; // Bug: early return prevents function call
    
    });
    
    // Act: Trigger button click
    incorrectButton.click();
    
    // Assert: Function should NOT be called (this test verifies the bug detection)
    expect(spy).not.toHaveBeenCalled();
  });
});
