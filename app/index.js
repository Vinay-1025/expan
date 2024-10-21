import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Refund, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ 
            flex: 1, 
            backgroundColor: COLORS.lightWhite,
        }}>
            <Stack.Screen 
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                        <Text style={{ marginLeft: 10, fontSize: 18, color: COLORS.primary }}>EXPAN</Text>
                    </View>
                ),
                headerRight: () => (
                    <View style={{marginRight: 10}}>
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    </View>
                ),
                headerTitle: ""
            }}  
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View 
                style={{
                    flex: 1,
                    padding: SIZES.medium,
                    marginRight: 10,
                    marginLeft: 10,
                }}>
                    <Welcome />
                    <Refund />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;