import React, { useState } from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, ImageBackground } from 'react-native';

export default function App() {

  const [titleText, setTitleText] = useState("Wishing you God's Blessings On Your Birthday!!!");
  const [bodyText, setBodyText] = useState("As you celebrate your birthday today, May God's blessings be with you always. May He surround you with tender loving care and may His presence be ever near. May He make all your dreams come true not just today, but all year through. May the good Lord continue to shower you with happiness, good fortune, prosperity and good health all the days of your life.");
  const [lastText, setLastText] = useState("Happy -->BIRTHDAY<-- to you");

  return (
    
       <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
        <Image
        style={styles.stretch}
        source={require('./assets/butterflyflower.png')}
      />
       <Text style={styles.titleText}>{titleText}
        {"\n"}</Text>
      <Text style={styles.bodyText}>{bodyText}</Text>
      <Text style={styles.lastText}>{lastText}</Text>
          <Image
        style={styles.tinyPic}
        source={require('./assets/flower.png')}
      />
    </ImageBackground>
    
    
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 400,
    height: 200,
    resizeMode: 'stretch',
  },
  titleText: {
    width: 350,
    fontSize: 15,
    fontWeight: "bold",
    color: 'ivory'
  },
  bodyText: {
    width: 300,
    fontFamily: 'serif',
    fontSize: 19,
    lineHeight: 18,
    fontWeight: "bold",
    fontStyle: 'italic',
    color: 'purple'
  },
  lastText: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'blue'
  },
  tinyPic: {
    width: 400,
    height: 200,
  },
});
