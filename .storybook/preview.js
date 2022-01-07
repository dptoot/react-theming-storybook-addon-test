import { ThemeProvider } from 'emotion-theming';
import { withThemes } from '@react-theming/storybook-addon';
import { theme, themeAlt, darkTheme } from './theme';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(withThemes(ThemeProvider, [theme, themeAlt, darkTheme]));