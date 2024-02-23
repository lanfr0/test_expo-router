import React from 'react';
import { Button, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Profile() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => router.back()} title="Back" />

            <Text>Pagina profilo</Text>
        </View>
    );
}
