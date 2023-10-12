import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import Search from "../screens/Search";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import { YELLOW_COLOR, BLACK_COLOR, WHITE_COLOR } from "../colors";
import { Ionicons } from "@expo/vector-icons";
import Stack from "./Stack";

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
        headerTintColor: isDark ? WHITE_COLOR : BLACK_COLOR,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Stack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"film-outline"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tv"
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tv-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"search-outline"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
