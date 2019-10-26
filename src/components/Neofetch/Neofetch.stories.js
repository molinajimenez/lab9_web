import React from 'react';
import Neofetch from '../Neofetch/Neofetch';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
export default { title: 'Neofetch' };

const stories = storiesOf('Neofetch', module);
stories.addDecorator(withKnobs);

stories.add('can hide', () => (
    <Neofetch show={boolean(true, true)}/>
))

stories.add('renders', () => (
    <Neofetch/>
),{notes: 'test'})
