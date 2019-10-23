import { configure } from '@storybook/react';
import { themes } from '@storybook/theming';


configure(require.context('../src', true, /\.stories\.js$/), module);
addParameters({
    options: {
      theme: themes.dark,
    }
  });
  


