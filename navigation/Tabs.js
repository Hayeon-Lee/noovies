import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react";
import Search from "../screens/Search";
import Movies from "../screens/Movies";
import Tv from "../screens/TV";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelPosition: "beside-icon",
      tabBarActiveTintColor: "#f6ea8c",
      tabBarInactiveTintColor: "#F8FAFF",
      tabBarStyle: { backgroundColor: "#353866" },
      headerStyle: { backgroundColor: "#F8FAFF" },
    }}
  >
    <Tab.Screen
      name="Movies"
      component={Movies}
      options={{
        headerTitleStyle: {
          color: "#353866",
        },
      }}
    />
    <Tab.Screen
      name="Tv"
      component={Tv}
      options={{
        tabBarBadge: "💖",
        tabBarBadgeStyle: {
          backgroundColor: "white",
        },
        headerTitleStyle: {
          color: "#353866",
        },
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        headerTitleStyle: {
          color: "#353866",
        },
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
