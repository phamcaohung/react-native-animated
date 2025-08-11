import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text } from 'react-native';
import Animation from './Animation';
import AnimationSecond from './AnimationSecond';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const TabScreens = () => {
    const getStyle = (focused) => focused ? styles.active : styles.none

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} style={styles.container}>
            <Tab.Screen
                name='Fisrt Animation'
                component={AnimationSecond}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons 
                            name='animation'
                            size={24} 
                            style={getStyle(focused)}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.text, getStyle(focused)]}>
                            Fisrt Animation
                        </Text>
                    )
                }}
            />
            <Tab.Screen
                name='Second Animation'
                component={Animation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons 
                            name='animation-outline'
                            size={24} 
                            style={getStyle(focused)}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.text, getStyle(focused)]}>
                            Second Animation
                        </Text>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    active: {
        color: 'black'
    },
    none: {
        color: "gray"
    },
    container: {
        backgroundColor: "black"
    }
})

export default TabScreens
