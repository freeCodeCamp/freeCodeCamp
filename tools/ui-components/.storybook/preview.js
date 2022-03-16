import '../src/base.css';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    values: [
      {
        name: 'light',
        value: '#ffffff'
      },
      {
        name: 'dark',
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

  // There can be no background selected, prevent "undefined" className
  const className = selectedBackgroundName || '';

  return (
    <div className={className}>
      <Story />
    </div>
  );
}
