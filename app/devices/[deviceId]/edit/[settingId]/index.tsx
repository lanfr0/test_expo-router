import { useLocalSearchParams, usePathname, useRouter, useSegments } from 'expo-router';
import { Button, Text, View } from 'react-native';
import React from 'react';

export default function Setting() {
    const router = useRouter();

    const pathname = usePathname();
    console.log(pathname);

    const segments = useSegments();
    console.log(segments);

    const { deviceId, settingId } = useLocalSearchParams<{ deviceId: string; settingId: string }>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => router.back()} title="Back" />

            <Text>{`Questa è la pagina del device ${deviceId}`}</Text>
            <Text>{`Questa è la pagina setting ${settingId}`}</Text>
        </View>
    );
}
