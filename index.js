import { AppRegistry } from 'react-native';
import App from './src/app.json';
import { name as appName } from './src/app.json';
import { render } from 'react-dom';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});

render(<App />, document.getElementById('app-root'));
