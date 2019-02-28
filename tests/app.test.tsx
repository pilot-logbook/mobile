import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import { App } from '../app/app';

describe('app', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
