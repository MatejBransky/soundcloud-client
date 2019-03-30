import React from 'react';
import { render } from 'react-dom';

import './styles.scss';
import Stream from './components/Stream';

render(
  <Stream tracks={[{ title: 'Alenka je mezulan' }]} />,
  document.getElementById('app')
);
