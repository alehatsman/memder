import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { photoCards } from './constants'
import { Card } from './components/Card'
import { OverlayLabel } from './components/OverlayLabel'
import styles from './App.styles'
import { IconButton } from './components/IconButton'

const App = () => {
  const [ref, setRef] = useState(null)

  const handleOnSwipedLeft = () => ref.swipeLeft()
  const handleOnSwipedTop = () => ref.swipeTop()
  const handleOnSwipedRight = () => ref.swipeRight()

  return (
    <View
      style={styles.container}
    >
      <View style={styles.swiperContainer}>
        <Swiper
          ref={ref => setRef(ref)}
          animateCardOpacity
          containerStyle={styles.container}
          cards={photoCards}
          renderCard={card => <Card card={card} />}
          cardIndex={0}
          backgroundColor="white"
          stackSize={2}
          infinite
          showSecondCard
          animateOverlayLabelsOpacity
          overlayLabels={{
            left: {
              title: 'NOPE',
              element: <OverlayLabel label="NOPE" color="#E5566D" />,
              style: {
                wrapper: styles.overlayWrapper,
              },
            },
            right: {
              title: 'LIKE',
              element: <OverlayLabel label="LIKE" color="#4CCC93" />,
              style: {
                wrapper: {
                  ...styles.overlayWrapper,
                  alignItems: 'flex-start',
                  marginLeft: 30,
                },
              },
            },
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <IconButton
          name="close"
          onPress={handleOnSwipedLeft}
          color="white"
          backgroundColor="#E5566D"
        />
        <IconButton
          name="star"
          onPress={handleOnSwipedTop}
          color="white"
          backgroundColor="#3CA3FF"
        />
        <IconButton
          name="heart"
          onPress={handleOnSwipedRight}
          color="white"
          backgroundColor="#4CCC93"
        />
      </View>
    </View>
  )
}

export default App
