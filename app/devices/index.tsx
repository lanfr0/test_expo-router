import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { Link, usePathname, useRouter, useSegments } from 'expo-router';

export default function Devices() {
    const router = useRouter();

    const pathname = usePathname();
    console.log(pathname);

    const segments = useSegments();
    console.log(segments);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => router.back()} title="Back" />

            <Text>Questa è la lista dei device</Text>

            <View style={{ gap: 5, width: '100%' }}>
                {new Array(5).fill(0).map((_, index) => {
                    return (
                        <Link key={index} href={{ pathname: `devices/${index}` }} asChild>
                            <Pressable>
                                <View
                                    style={{
                                        height: 50,
                                        backgroundColor: 'grey',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Text>{index}</Text>
                                </View>
                            </Pressable>
                        </Link>
                    );
                })}
            </View>
        </View>
    );
}
