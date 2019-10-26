import { storiesOf } from '@storybook/react';
import React from 'react';
import HiddenForm from './HiddenForm';
import { action } from '@storybook/addon-actions';

storiesOf('HiddenForm', module).add('Renders', () => <HiddenForm onClick={action('hey im detecting keypress!')} />, {
  notes: 'this by itself should do nothing :)',
});