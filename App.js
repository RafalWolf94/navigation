import {StatusBar, StyleSheet} from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealOverviewScreen from './src/screens/MealOverviewScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesScreen from './src/screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
import {Provider} from 'react-redux';
import {store} from './store/redux/store';

export default function App() {

    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    function DrawerNavigation() {
        return (
            <Drawer.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#351401',
                },
                headerTintColor: 'white',
                sceneStyle: {backgroundColor: '#3f2f25'},
                drawerContentStyle: {
                    backgroundColor: '#3f2f25'
                },
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: '#3f2f25',
                drawerActiveBackgroundColor: '#efa374',
            }}>
                <Drawer.Screen name="Categories" component={CategoriesScreen}
                               options={{
                                   title: 'All Categories',
                                   drawerIcon: ({color, size}) => <Ionicons color={color} size={size} name={'list'}/>
                               }}
                />
                <Drawer.Screen name="Favorites" component={FavoritesScreen}
                               options={{
                                   drawerIcon: ({color, size}) => <Ionicons color={color} size={size} name={'star'}/>,
                               }}
                />
            </Drawer.Navigator>
        );
    }

    return (
        <>
            <StatusBar style="dark"/>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: '#351401',
                            },
                            headerTintColor: 'white',
                            contentStyle: {
                                backgroundColor: '#3f2f25',
                            },
                        }}>
                        <Stack.Screen
                            name="Drawer"
                            component={DrawerNavigation}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen name="MealsOverview" component={MealOverviewScreen}/>
                        <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});