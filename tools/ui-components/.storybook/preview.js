/* the styled-elements and normalized are included here to replicate the presets that exist in the learn app */
import React from 'react';
import '../src/normalize.css';
import '../src/global-element-styles.css';
import '../src/base.css';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'light-palette',
    values: [
      {
        name: 'light-palette',
        value: '#ffffff'
      },
      {
        name: 'dark-palette',
        value: '#0a0a23'
      }
    ]
  }
};

export const decorators = [renderTheme];

/**
 * Gets matching theme name for currently selected background and provides it
 * to the story.
 */
function renderTheme(Story, context) {
  const selectedBackgroundValue = context.globals.backgrounds?.value;
  const selectedBackgroundName = parameters.backgrounds.values.find(
    bg => bg.value === selectedBackgroundValue
  )?.name;

  // Use the value of the default background to prevent "undefined" className
  const className = selectedBackgroundName || parameters.backgrounds.default;

  return (
    <div className={className}>
      <Story />
    </div>
  );
}
