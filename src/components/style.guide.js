/**
 * Style Guide
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
  TouchableOpacity,
} from 'react-native';

import {
  Tab,
  Tabs,
  Card,
  List,
  Icon,
  Button,
  ListItem,
} from 'react-native-elements';

// App Globals
import AppStyles from '../utils/styles';
import AppConfig from '../utils/config';

// Components
import Alerts from './alerts';
import ComingSoon from './soon';

/* Component ==================================================================== */
class StyleGuide extends Component {
  static componentName = 'StyleGuide';

  static propTypes = {
    navigator: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: '1',
    };
  }

  /**
    * When user taps to change tabs
    */
  changeTab = (selectedTab) => {
    this.setState({ selectedTab });
  }

  /**
    * Go to new Screen
    */
  navigateTo = () => {
    this.props.navigator.push({
      title: 'Coming Soon',
      component: ComingSoon,
      index: 2,
    });
  }

  render = () => (
    <Tabs>
      <Tab
        title={'Basics'}
        onPress={() => this.changeTab('1')}
        selected={this.state.selectedTab === '1'}
        renderIcon={() => <Icon name={'fingerprint'} size={26} color={'#BABDC2'} />}
        renderSelectedIcon={() => <Icon name={'fingerprint'} size={26} color={AppConfig.primaryColor} />}
      >
        <ScrollView
          automaticallyAdjustContentInsets={false}
          style={[AppStyles.container]}
        >
          <Card title={'Typography'} {...AppConfig.cardDefaults}>
            <View>
              <Text style={[AppStyles.h1]}>Heading 1</Text>
              <Text style={[AppStyles.h2]}>Heading 2</Text>
              <Text style={[AppStyles.h3]}>Heading 3</Text>
              <Text style={[AppStyles.h4]}>Heading 4</Text>
              <Text style={[AppStyles.p]}>
                Mus ac nostra lobortis sapien a erat in risus purus odio
                egestas a donec fringilla scelerisque congue parturient
                condimentum penatibus neque urna magna. Leo dictumst
                senectus inceptos parturient pharetra.
              </Text>
              <Text style={[AppStyles.p]}>
                Mus ac nostra lobortis sapien a erat in risus purus odio
                egestas a donec fringilla scelerisque congue parturient
                condimentum penatibus neque urna magna. Leo dictumst
                senectus inceptos parturient pharetra.
              </Text>
            </View>
          </Card>

          <Card title={'Buttons'} {...AppConfig.cardDefaults}>
            <View>
              <View style={[AppStyles.row]}>
                <View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
                  <Button
                    title={'Default'}
                    {...AppConfig.buttonDefaults}
                    onPress={this.navigateTo}
                  />
                </View>

                <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
                  <Button
                    title={'Default'}
                    icon={{ name: 'code' }}
                    {...AppConfig.buttonDefaults}
                    backgroundColor={'#FB6567'}
                    onPress={this.navigateTo}
                  />
                </View>
              </View>

              <View style={[AppStyles.spacer_10]} />

              <View style={[AppStyles.row]}>
                <View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
                  <Button
                    title={'Small'}
                    {...AppConfig.smlButtonDefaults}
                    onPress={this.navigateTo}
                  />
                </View>

                <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
                  <Button
                    iconRight
                    title={'Small'}
                    icon={{ name: 'cached' }}
                    {...AppConfig.smlButtonDefaults}
                    backgroundColor={'#59DC9A'}
                    onPress={this.navigateTo}
                  />
                </View>
              </View>
            </View>
          </Card>

          <Card title={'Alerts'} {...AppConfig.cardDefaults}>
            <Alerts
              status={'Something\'s happening...'}
              success={'Hello Success'}
              error={'Error hey'}
            />
          </Card>
        </ScrollView>
      </Tab>

      <Tab
        title={'Cards'}
        onPress={() => this.changeTab('2')}
        selected={this.state.selectedTab === '2'}
        renderIcon={() => <Icon name={'timeline'} size={26} color={'#BABDC2'} />}
        renderSelectedIcon={() => <Icon name={'timeline'} size={26} color={AppConfig.primaryColor} />}
      >
        <ScrollView
          automaticallyAdjustContentInsets={false}
          style={[AppStyles.container]}
        >
          <View style={[AppStyles.paddingHorizontal]}>
            <View style={[AppStyles.spacer_15]} />
            <Text style={[AppStyles.h2]}>Cards</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.navigateTo}
          >
            <Card
              {...AppConfig.cardDefaults}
              image={{ uri: 'http://wp-api.mcnam.ee/wp-content/uploads/2016/10/brekkie-crumble-33651_l.jpeg' }}
            >
              <View style={[AppStyles.paddingLeftSml, AppStyles.paddingBottomSml]}>
                <Text style={[AppStyles.h3]}>Title of post</Text>
                <Text style={[AppStyles.baseText]}>
                  Lorem ipsum diem or seckt original de pingdo of the lespec.
                </Text>
              </View>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.navigateTo}
          >
            <Card
              {...AppConfig.cardDefaults}
              image={{ uri: 'http://wp-api.mcnam.ee/wp-content/uploads/2016/10/brekkie-crumble-33651_l.jpeg' }}
            >
              <View style={[AppStyles.paddingLeftSml, AppStyles.paddingBottomSml]}>
                <Text style={[AppStyles.h3]}>Another Post</Text>
                <Text style={[AppStyles.baseText]}>
                  Lorem ipsum diem or seckt original de pingdo of the lespec.
                </Text>
              </View>
            </Card>
          </TouchableOpacity>
        </ScrollView>
      </Tab>


      <Tab
        title={'Lists'}
        onPress={() => this.changeTab('3')}
        selected={this.state.selectedTab === '3'}
        renderIcon={() => <Icon name={'speaker-notes'} size={26} color={'#BABDC2'} />}
        renderSelectedIcon={() => <Icon name={'speaker-notes'} size={26} color={AppConfig.primaryColor} />}
      >
        <ScrollView
          automaticallyAdjustContentInsets={false}
          style={[AppStyles.container]}
        >
          <View style={[AppStyles.paddingHorizontal]}>
            <View style={[AppStyles.spacer_15]} />
            <Text style={[AppStyles.h2]}>List Rows</Text>
          </View>

          <List>
            <ListItem
              title={'John Smith'}
              subtitle={'CEO'}
              onPress={this.navigateTo}
            />
            <ListItem
              title={'Jane Doe'}
              subtitle={'COO'}
              onPress={this.navigateTo}
            />
            <ListItem
              title={'Sam Smith'}
              subtitle={'CFO'}
              onPress={this.navigateTo}
            />
          </List>
        </ScrollView>
      </Tab>
    </Tabs>
  )
}

/* Export Component ==================================================================== */
export default StyleGuide;
