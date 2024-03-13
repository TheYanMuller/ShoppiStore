import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import Menu from "../screens/Menu";
import Details from "../screens/Details";
import Cart from "../screens/Cart";
import Payment from "../screens/Payment";
import MenuHeader from "../components/MenuHeader";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import User from "../screens/User";

const Stack = createNativeStackNavigator();

export const HomeRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerTitle: "Lista de Produtos",
          headerRight: () => <MenuHeader />,
          headerStyle:{
            backgroundColor: "#3E7786",
          },
          headerTintColor: "#ffff"
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitle: "Detalhes",
          headerRight: () => <MenuHeader />,
          headerStyle:{
            backgroundColor: "#3E7786",
          },
          headerTintColor: "#ffff"
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: "Carrinho",
          headerStyle:{
            backgroundColor: "#3E7786",
          },
          headerTintColor: "#ffff"
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerTitle: "Pagamento",
          headerRight: () => <MenuHeader />,
          headerStyle:{
            backgroundColor: "#3E7786",
          },
          headerTintColor: "#ffff"
        }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor:"#3E7786",
        tabBarInactiveBackgroundColor: "#3E7786"
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={30} color="#ffff" />
          ),
          tabBarActiveBackgroundColor: "#3E7786",
          tabBarInactiveBackgroundColor: "#3E7786"
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="person" size={30} color="#ffff" />
            
          ),
          tabBarActiveBackgroundColor: "#3E7786",
          tabBarInactiveBackgroundColor: "#3E7786"
        }}
      />
    </Tab.Navigator>
  );
};
