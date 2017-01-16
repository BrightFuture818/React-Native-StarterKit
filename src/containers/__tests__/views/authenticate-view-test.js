/**
 * Test to check if the component renders correctly
 */
/* global it expect jest */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import AuthenticateView from '@containers/auth/AuthenticateView';

/**
 * Check if AuthenticateView renders correctly
 * and asserting it to the matching snapshot
 */

it('AuthenticateView renders correctly', () => {
  const tree = renderer.create(
    <AuthenticateView />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
