import { useLocalSearchParams, usePathname, useRouter, useSegments } from 'expo-router';
import { Button, Text, View } from 'react-native';
import React from 'react';

export default function Device() {
    const router = useRouter();

    const pathname = usePathname();
    console.log(pathname);

    const segments = useSegments();
    console.log(segments);

    const { deviceId } = useLocalSearchParams<{ deviceId: string }>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => router.back()} title="Back" />

            <Text>{`Questa è la pagina del device ${deviceId}`}</Text>
            <Button
                onPress={() => router.push({ pathname: `/devices/${deviceId}/edit` })}
                title="Edit"
            />
        </View>
    );
}
