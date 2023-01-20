import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ParamListBase, RouteProp } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { routes } from './routes';

const Tab = createBottomTabNavigator();
const options = (route: RouteProp<ParamListBase, string>) => {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      let icon: React.ReactNode;

      if (route.name === routes.HOME) {
        const name = focused ? 'home' : 'home-outline';
        icon = <Ionicons name={name} size={size} color={color} />;
      }

      if (route.name === routes.SETTINGS) {
        const name = focused ? 'settings' : 'settings-outline';
        icon = <Ionicons name={name} size={size} color={color} />;
      }

      return icon;
    },
  } satisfies BottomTabNavigationOptions;
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => options(route)}>
      <Tab.Screen name={routes.HOME} component={HomeScreen} />
      <Tab.Screen name={routes.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
