import React from 'react';
import { Button, Text, View } from 'react-native';
import { usePathname, useRouter, useSegments } from 'expo-router';

export default function Homepage() {
    const router = useRouter();

    const pathname = usePathname();
    console.log(pathname);

    const segments = useSegments();
    console.log(segments);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Questa è la homepage</Text>

            <Button onPress={() => router.push({ pathname: 'profile' })} title="Profilo" />
            <Button onPress={() => router.push({ pathname: 'devices' })} title="Devices" />
        </View>
    );
}
