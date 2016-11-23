/**
 * Error Screen
 *
    <Error text={'Server is down'} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// App Globals
import AppStyles from '../utils/styles';

/* Component ==================================================================== */
const Error = ({ text }) => (
  <View style={[AppStyles.container, AppStyles.containerCentered]}>
    <Icon name={'ios-alert-outline'} size={50} color={'#CCC'} />

    <View style={[AppStyles.spacer_10]} />

    <Text style={[AppStyles.baseText]}>{text}</Text>
  </View>
);

Error.propTypes = { text: PropTypes.string };
Error.defaultProps = { text: 'Woops, Something went wrong.' };

/* Export Component ==================================================================== */
export default Error;
