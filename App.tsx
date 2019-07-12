/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';

/* Common */
import { Props } from '@common/component/common.props';
import { AppStore } from './modules/common/event/store/app.store'; 

/* Redux */
import { Provider } from 'react-redux';

/** Components */
import MainComponent from './src/main/main.component';
import SlidesComponent from './src/main/components/intro/slides.component';
import SettingsComponent from './src/main/components/settings/settings.component';
import HeaderComponent from './src/main/components/header/header.component';

/** Register Services */

/** Navigation */
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';
import HeaderMenuComponent from './src/main/components/header/header.menu.component';

import { Icon } from 'native-base';



export default class App extends Component<Props> {

  componentDidMount () {}

  noBackButton () {
   // return (  )
  }

  render() {
    return (
      <Provider store={AppStore}>
      
          <Router>
              <Stack key="root" >
              
              
              <Drawer
                    drawerIcon={<Icon name="menu"/>}
                    drawer
                    hideNavBar
                    key="drawer"
                    drawerWidth={300}
                    contentComponent={HeaderMenuComponent}  
              >
                    <Scene key="home" component={MainComponent} title="WUWIN" panHandlers={null} intial renderBackButton={()=> <View/>} />
                    <Scene key="splash" component={SlidesComponent} />
                    <Scene key="settings" component={SettingsComponent} navBar={HeaderComponent} title="Settings" swipeEnabled renderBackButton={() => <Icon name="back"/>} />
                    <Scene key="side" component={MainComponent} title="Menu" />
                </Drawer>
             </Stack>
          </Router>
      </Provider>
    );
  }
}

