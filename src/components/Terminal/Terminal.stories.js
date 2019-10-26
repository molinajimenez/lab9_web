import React from 'react';
import Terminal from '../Terminal/Terminal';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
export default { title: 'Terminal' };

const stories = storiesOf('Terminal', module);
stories.addDecorator(withKnobs);

stories.add('can render!', () => (
    <Terminal/>
))
