/**
 * Login Screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import FormValidation from 'tcomb-form-native';

// App Globals
import AppAPI from '../../utils/api';
import AppConfig from '../../utils/config';
import AppStyles from '../../utils/styles';

// Components
import Alerts from '../alerts';
import Button from '../button';
import Card from '../card';
import AuthWebView from './webview';
import Index from '../../containers/recipes';

/* Component ==================================================================== */
class Login extends Component {
  static componentName = 'Login';

  static propTypes = {
    navigator: PropTypes.shape({
      push: PropTypes.func.isRequired,
      resetTo: PropTypes.func.isRequired,
    }).isRequired,
    login: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    // Email Validation
    const validEmail = FormValidation.refinement(
      FormValidation.String, (email) => {
        const regularExpression = /^.+@.+\..+$/i;

        return regularExpression.test(email);
      }
    );

    // Password Validation - Must be 6 chars long
    const validPassword = FormValidation.refinement(
      FormValidation.String, (password) => {
        if (password.length < 6) return false;
        return true;
      }
    );

    this.state = {
      resultMsg: {
        status: '',
        success: '',
        error: '',
      },
      form_fields: FormValidation.struct({
        Email: validEmail,
        Password: validPassword,
      }),
      empty_form_values: {
        Email: '',
        Password: '',
      },
      form_values: {},
      options: {
        fields: {
          Email: {
            error: 'Please enter a valid email',
            autoCapitalize: 'none',
            clearButtonMode: 'while-editing',
          },
          Password: {
            error: 'Your new password must be more than 6 characters',
            clearButtonMode: 'while-editing',
            secureTextEntry: true,
          },
        },
      },
    };
  }

  componentDidMount = async () => {
    // Get user data from AsyncStorage to populate fields
    const values = await AsyncStorage.getItem('api/credentials');
    const jsonValues = JSON.parse(values);

    if (values !== null) {
      this.setState({
        form_values: {
          Email: jsonValues.username,
          Password: jsonValues.password,
        },
      });
    }
  }

  /**
    * Sign Up
    */
  onPressSignUp = () => {
    this.props.navigator.push({
      title: 'Sign Up',
      component: AuthWebView,
      index: 2,
      passProps: {
        url: AppConfig.urls.signUp,
      },
    });
  }

  /**
    * Password Reset
    */
  onPressReset = () => {
    this.props.navigator.push({
      title: 'Reset Password',
      component: AuthWebView,
      index: 2,
      passProps: {
        url: AppConfig.urls.resetPassword,
      },
    });
  }

  /**
    * Login
    */
  login = () => {
    // Get new credentials and update
    const credentials = this.form.getValue();

    // Form is valid
    if (credentials) {
      this.setState({ form_values: credentials }, () => {
        this.setState({ resultMsg: { status: 'One moment...' } });

        // Scroll to top, to show message
        if (this.scrollView) {
          this.scrollView.scrollTo({ y: 0 });
        }

        this.props.login({
          username: credentials.Email,
          password: credentials.Password,
        }, true).then(() => {
          this.setState({
            resultMsg: { success: 'Awesome, you\'re now logged in!' },
          }, () => {
            setTimeout(() => {
              this.props.navigator.resetTo({
                title: AppConfig.appName,
                component: Index,
              });
            }, 1000);
          });
        }).catch((err) => {
          const error = AppAPI.handleError(err);
          this.setState({ resultMsg: { error } });
        });
      });
    }
  }

  render = () => {
    const Form = FormValidation.form.Form;

    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        ref={(a) => { this.scrollView = a; }}
        style={[AppStyles.container]}
        contentContainerStyle={[AppStyles.container]}
      >
        <Card>
          <Alerts
            status={this.state.resultMsg.status}
            success={this.state.resultMsg.success}
            error={this.state.resultMsg.error}
          />

          <Form
            ref={(b) => { this.form = b; }}
            type={this.state.form_fields}
            value={this.state.form_values}
            options={this.state.options}
          />

          <Button
            title={'Login'}
            onPress={this.login}
          />

          <View style={AppStyles.spacer_10} />

          <TouchableOpacity onPress={this.onPressReset}>
            <Text style={[AppStyles.baseText, AppStyles.centered, AppStyles.link]}>
              Forgot Password
            </Text>
          </TouchableOpacity>

          <View style={AppStyles.spacer_10} />

          <Text style={[AppStyles.baseText, AppStyles.p, AppStyles.centered]}>
            - or -
          </Text>

          <Button
            title={'Sign Up'}
            onPress={this.onPressSignUp}
          />
        </Card>
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default Login;
