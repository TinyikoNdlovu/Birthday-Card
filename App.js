import React, { useState } from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {

  const [titleText, setTitleText] = useState("Wishing you God's Blessings On Your Birthday!!!");
  const [bodyText, setBodyText] = useState("As you celebrate your birthday today, May God's blessings be with you always. May He surround you with tender loving care and may His presence be ever near. May He make all your dreams come true not just today, but all year through. May the good Lord continue to shower you with happiness, good fortune, prosperity and good health all the days of your life.");
  const [lastText, setLastText] = useState("Happy -->BIRTHDAY<-- to you");

  return (
    <View style={styles.container}>
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
      
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    width: 350,
    fontSize: 15,
    fontWeight: "bold",
    color: 'green'
  },
  stretch: {
    width: 400,
    height: 200,
    resizeMode: 'stretch',
  },
  bodyText: {
    width: 300,
    fontFamily: 'serif',
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "900",
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
