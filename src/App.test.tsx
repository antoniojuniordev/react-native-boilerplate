import 'react-native';
import App from './App';

import { it } from '@jest/globals';

import { render } from '@testing-library/react-native';

it('App renders correctly', () => {
  const component = <App />;

  render(component);

  expect(component).toBeDefined();
});
