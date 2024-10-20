import { AppRegistry } from 'react-native';
import App from './App.js';
//import { name as appName } from './src/app.json';
import { render } from 'react-dom';

AppRegistry.registerComponent("functionalGymFront", () => App);

AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});

render(<App />, document.getElementById('app-root'));
