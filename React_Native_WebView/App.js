/**
 * React Native WebView permission delegation vulnerability PoC.
 */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { WebView } from 'react-native-webview';
import {request, PERMISSIONS, check} from 'react-native-permissions';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const maliciousWebsite = "https://secweb22-brokenbridge.github.io/"

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={styles.mainView}>
      <Text
        style={styles.sectionDescription}>
        "Request camera permissions" asks the user to grant access to the camera.
        This is not the permission for the WebView to access the camera, but for the app in general!
      </Text>
      
      <Text
        style={styles.sectionDescription}>
        "Launch WebView" launches the react-native-webview with DEFAULT settings.
        Only the source URI is set.
      </Text>

      <View 
        style={styles.buttonWrapper}>
        <Button
          title="Request camera permissions"
          onPress={ () => {
            check(PERMISSIONS.ANDROID.CAMERA);
            request(PERMISSIONS.ANDROID.CAMERA);
          }}
        />
      </View>
      <View
        style={styles.buttonWrapper}>
        <Button
          title="Launch WebView"
          onPress={ () => navigation.navigate('WebView') }
        />
      </View>
    </View>
  );
};

const WebViewScreen = () => {
  return <WebView 
    source={{ uri: maliciousWebsite }} 
  />;
};

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Web View Attack POC - React Native WebView" component={HomeScreen}/>
      <Stack.Screen name="WebView" component={WebViewScreen}/>
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainView: {
    margin: 16
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: '400',
  },
  buttonWrapper: {
    marginBottom: 8,
  }
});

export default App;