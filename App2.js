import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [currentImageUrl, setCurrentImageUrl] = useState('')

  const getNextImage = useCallback(async () => {
    const resp = await fetch('https://meme-api.herokuapp.com/gimme')
    const res = await resp.json()
    return res.url
  })

  const onImagePress = useCallback(async () => {
    const imgUrl = await getNextImage()
    setCurrentImageUrl(imgUrl)
  }, [getNextImage, setCurrentImageUrl])

  useEffect(() => {
    onImagePress()
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onImagePress}
      >
        <Image 
          style={styles.image}
          source={currentImageUrl}
          resizeMode = "contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: win.height,
  }
});
