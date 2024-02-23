import React from 'react';

import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false, headerShadowVisible: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="[settingId]/index" />
        </Stack>
    );
}
