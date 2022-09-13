import React, { useState } from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {

  const [titleText, setTitleText] = useState("Wishing you God's Blessings On Your Birthday");
  const [bodyText, setBodyText] = useState("As you celebrate your birthday today, May God's blessings be with you always. May He surround you with tender loving care and may His presence be ever near. May He make all your dreams come true not just today, but all year through. May the good Lord continue to shower you with happiness, good fortune, prosperity and good health all the days of your life.");
  const [lastText, setLastText] = useState("Happy -->BIRTHDAY<-- to you");

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{titleText}
        {"\n"}</Text>
      <Image
        style={styles.stretch}
        source={require('./assets/birthday.png')}
      />
      <Text style={styles.bodyText}>{bodyText}
      {"\n"}</Text>
      <Text style={styles.lastText}>{lastText}
      {"\n"}</Text>
          <Image
        style={styles.tinyPic}
        source={require('./assets/butterflyflower.png')}
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
    fontSize: 20,
    fontWeight: "bold",
    color: 'purple'
  },
  stretch: {
    width: 700,
    height: 270,
    resizeMode: 'stretch',
  },
  bodyText: {
    width: 600,
    fontFamily: 'Helvetica',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "500",
    fontStyle: 'italic',
    color: 'purple'
  },
  lastText: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'blue'
  },
  tinyPic: {
    width: 700,
    height: 300,
  },
});
