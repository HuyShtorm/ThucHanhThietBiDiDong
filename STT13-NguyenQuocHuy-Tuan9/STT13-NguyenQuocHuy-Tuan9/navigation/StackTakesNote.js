import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TrangChu from '../screens/TrangChu';
import DangNhap from '../screens/DangNhap';
import DangKy from '../screens/DangKy';
import Notes from '../screens/Notes';
import ThemNote from '../screens/ThemNote';
import ChinhSuaNote from '../screens/ChinhSuaNote';



const Stack = createNativeStackNavigator();

export default function StackTakeNotes() {
    return (
        <Stack.Navigator
            initialRouteName="Trang Chủ" // Thiết lập màn hình mặc định
            backBehavior="history"
        >
            {/* Các màn hình khác */}
            <Stack.Screen name="Trang Chủ" component={TrangChu} />
            <Stack.Screen name="DangNhap" component={DangNhap} />
            <Stack.Screen name="DangKy" component={DangKy} />
            <Stack.Screen name="Notes" component={Notes} />
            <Stack.Screen name="ChinhSuaNote" component={ChinhSuaNote} />
            <Stack.Screen name="ThemNote" component={ThemNote} />
        </Stack.Navigator>
    );
}






