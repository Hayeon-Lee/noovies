import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../screens/Search";
import Movies from "../screens/Movies";
import Tv from "../screens/TV";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Movies" component={Movies} />
    <Tab.Screen name="Tv" component={Tv} />
    <Tab.Screen name="Search" component={Search} />
  </Tab.Navigator>
);

export default Tabs;
