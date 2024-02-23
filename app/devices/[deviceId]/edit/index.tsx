import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { Link, useLocalSearchParams, usePathname, useRouter, useSegments } from 'expo-router';

export default function Edit() {
    const router = useRouter();

    const pathname = usePathname();
    console.log(pathname);

    const segments = useSegments();
    console.log(segments);

    const { deviceId } = useLocalSearchParams<{ deviceId: string }>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => router.back()} title="Back" />

            <Text>{`Questa è la pagina di editing del device ${deviceId}`}</Text>

            <View style={{ gap: 5, width: '100%' }}>
                {new Array(5).fill(0).map((_, index) => {
                    return (
                        <Link
                            key={index}
                            href={{ pathname: `devices/${deviceId}/edit/${index}` }}
                            asChild
                        >
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
