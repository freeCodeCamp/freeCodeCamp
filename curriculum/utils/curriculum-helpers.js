export function validateThemeSwitcher() {
  const body = document.body;
  const computedStyle = window.getComputedStyle(body);
  
  // Check if theme switcher actually changes colors
  const backgroundColor = computedStyle.backgroundColor;
  const color = computedStyle.color;
  
  if (!backgroundColor || backgroundColor === 'rgba(0, 0, 0, 0)') {
    throw new Error('Theme switcher did not change background color');
  }
  
  if (!color || color === 'rgb(0, 0, 0)') {
    throw new Error('Theme switcher did not change text color');
  }
  
  return true;
}

export function validateThemeSwitcherWithTimeout(timeout = 1000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    
    const checkTheme = () => {
      try {
        validateThemeSwitcher();
        resolve(true);
      } catch (error) {
        if (Date.now() - startTime > timeout) {
          reject(new Error('Theme switcher validation timed out')); 
        } else {
          setTimeout(checkTheme, 50); // Check again in 50ms
        }
      }
    };
    
    checkTheme();
  });
}
