import React from 'react';
import '../../build/css/_variables.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'theme-light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'theme-light', title: 'Light Theme' },
          { value: 'theme-dark', title: 'Dark Theme' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      // Remove any existing theme classes from the <html> element.
      document.documentElement.classList.remove('theme-light', 'theme-dark');
      // Add the currently selected theme class.
      document.documentElement.classList.add(theme);
      return <Story />;
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
