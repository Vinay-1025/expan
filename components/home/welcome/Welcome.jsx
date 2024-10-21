import React from 'react'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'


const jobTypes = ["IRCTC"]


const Welcome = () => {

  const router = useRouter();
  const [refundData, setRefundData] = useState('Full-time')

  return (
    <View>
      <View  style={styles.container}>
        <Text style={styles.userName}>Welcome to Expan !</Text>
        <Text style={styles.welcomeMessage}>Track your Expanses here.</Text>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={styles.tab(refundData, item)}
              onPress={() => {
                setRefundData(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}

          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

    </View>
  )
}

export default Welcome