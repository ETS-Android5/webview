# Web View Attack POC

## Build and start

### React Native WebView POC

#### Option 1: Use .apk

Install `webview-rn.apk` on your device or an emulator.

#### Option 2: Build yourself

- Setup React Native as describe [here](https://reactnative.dev/docs/environment-setup). Use `React Native CLI Quickstart` and Android as Target OS.

- Execute `npx react-native run-android` in the `React_Native_WebView` folder to run the application. You can either run the application on an emulator or your own device, if it is connected to your PC and [USB debugging](https://developer.android.com/studio/debug/dev-options) is activated.

### unity-webview POC

#### Option 1: Use .apk

Install `webview-unity-webview.apk` on your device or an emulator.

#### Option 2: Build yourself

- Install and setup [Unity Hub](https://unity3d.com/get-unity/download) and install Unity 2020.3.30f1.

- Open the `unity-webview` project, go to `File` > `Build And Run`. You can either run the application on an emulator or your own device, if it is connected to your PC and [USB debugging](https://developer.android.com/studio/debug/dev-options) is activated.

## Run the attack

To request permission to access the device's camera, press the "Request camera permissions" button and grant the permission request. The permission request simulates a permission request for legitimate use of the application, such as when the camera is used to take a picture inside the application. It is important to note that the permission request is not a permission request of the `WebView` content, but of the application itself.

The button "Launch WebView" opens the `WebView`, in which the malicious website ([link.](https://secweb22-brokenbridge.github.io/), [repository.](https://github.com/secweb22-brokenbridge/secweb22-brokenbridge.github.io)) is loaded. The proof of concept loads the website directly, albeit a `WebBAtk` uses another strategy to open the malicious content.

The malicious website starts the device's camera and displays the video using the [MediaDevices API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices).

The bject that is returned by `getUserMedia` of the `MediaDevices API` is loaded into a `<video>` tag. Because the React Native WebView and unity-webview plugins prevent videos from auto-playing by default and require a user click to start the video, the implementation of the proof of concept requires the victim to click somewhere on the web content to start the recording.
