import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './app/navigators/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
