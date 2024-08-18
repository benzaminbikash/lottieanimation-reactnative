import { View, Text, Pressable } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";

const Index = () => {
  const giftRef = useRef();
  const loveRef = useRef();
  const [liked, setLiked] = useState(false);
  console.log(liked);
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        style={{ width: "100%", height: 400 }}
        source={require("../assets/images/animate.json")}
        autoPlay
        loop
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable
          onPress={() => {
            if (liked) {
              loveRef.current.reset();
            } else {
              loveRef.current.play(0, 190);
            }
            setLiked(!liked);
          }}
        >
          <LottieView
            ref={loveRef}
            loop={false}
            style={{ width: 100, height: 100 }}
            source={require("../assets/images/heart.json")}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            giftRef.current.play();
          }}
        >
          <LottieView
            ref={giftRef}
            style={{ width: 100, height: 100 }}
            source={require("../assets/images/Animation - 1723950835126.json")}
            loop={false}
          />
        </Pressable>
      </View>

      <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>
        React Native Lottie Animation
      </Text>
    </View>
  );
};

export default Index;
