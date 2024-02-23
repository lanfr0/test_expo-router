import React from 'react';

import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false, headerShadowVisible: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="[deviceId]/index" />
            <Stack.Screen name="[deviceId]/edit" />
        </Stack>
    );
}
