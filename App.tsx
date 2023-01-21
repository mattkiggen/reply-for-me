import 'react-native-url-polyfill/auto';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './app/navigators/BottomTabNavigator';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
