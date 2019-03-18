# react-native-boilerplate

[TOC]

#### Features

- Navigation - react-navigation (with switchNavigator);
- redux, react-redux, redux-logger, redux-thunk;
- axois;
- react-native-vector-icons linked;
- react-native-elements;
- react-native-gesture-handler (react-navigation dependency);

#### Directory structure

    .
    ├── __tests__/
    ├── android/
    ├── ios/
    ├── app/
    │   ├── assets/
    │   │   └── ...
    │   ├── components/
    │   │   └── ...
    │   ├── screens/
    │   │   ├── HomeScreen.js
    │   │   ├── SignInScreen.js
    │   │   └── SignUpScreen.js
    │   ├── store/
    │   │   ├── actions/
    |   |   |   ├── actionTypes.js
    │   │   │   └── user.js
    │   │   ├── reducers/
    │   │   │   └── user.js
    |   |   └── storeConfig.js
    │   └── Navigation.js
    ├── app.json
    ├── index.js
    ├── package.json
    └── README.md


app_name/
  __tests__/
  android/
  ios/
  app/
  	assets/
  		fonts/
  			...
  		images/
		components/
			...
		screens/
			HomeScreen.js
			SignInScreen.js
			SignUpScreen.js
		store/
			actions/
				actionTypes.js
				user.js
			reducers/
				user.js
			storeConfig.js
		Navigation.js
	app.json
	index.js
	package.json


#### Instructions

- Change app_name with the name of your app in every occurrence
- Install libraries
> npm i

- or
> yarn install

- For Android:
 + Connect your device or open an emulator and run:
 	>yarn start
 + or
	>npm start
 + open another terminal and run:
 	>cd android/
	>./gradlew installDebug
- For iOS
 + You can only run with an emulator, on MacOS, so you can simply run:
  >react-native run-ios

- OBS: react-native run-android breaks almost every time, running the commands said here is the safest way to get it to work fast
