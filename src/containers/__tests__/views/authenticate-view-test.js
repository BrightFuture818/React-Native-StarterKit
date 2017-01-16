/**
 * Test to check if the component renderes correctly
 */
/* global it expect jest */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import AuthenticateView from '@containers/auth/AuthenticateView';

/**
 * Check if AuthenticateView renders correcly
 * and asserting it to the matching snapshot
 */

it('AuthenticateView renders correcly', () => {
  const tree = renderer.create(
    <AuthenticateView />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
