import React from 'react';
import { render } from 'react-testing-library';
import Stream from '@/components/Stream';

test('TimerView', () => {
  const { debug } = render(
    <Stream tracks={[{ title: 'Foo' }, { title: 'Bar' }]} />
  );
  debug();
});
