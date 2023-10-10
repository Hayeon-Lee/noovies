import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import Search from "../screens/Search";
import Movies from "../screens/Movies";
import Tv from "../screens/TV";
import { YELLOW_COLOR, BLACK_COLOR, WHITE_COLOR } from "../colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? BLACK_COLOR : WHITE_COLOR,
        },
        tabBarActiveTintColor: YELLOW_COLOR,
        tabBarInactiveTintColor: isDark ? WHITE_COLOR : BLACK_COLOR,
        headerStyle: {
          backgroundColor: isDark ? BLACK_COLOR : WHITE_COLOR,
        },
        headerTintColor: isDark ? YELLOW_COLOR : BLACK_COLOR,
      }}
    >
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Tv" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default Tabs;
