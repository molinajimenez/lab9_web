import React from 'react';
import LineContainer from '../LineContainer/LineContainer';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
export default { title: 'LineContainer' };

const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs);

stories.add('withText', () => (
    <LineContainer text={text('text', 'This is a test!')}>
    </LineContainer>
))

stories.add('activeLine', () =>(
    <LineContainer active={boolean(true, true)}>
    </LineContainer>
))