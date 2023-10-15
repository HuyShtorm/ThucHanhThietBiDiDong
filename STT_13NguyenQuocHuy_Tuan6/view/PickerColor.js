import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  SafeAreaView
} from "react-native";
import React, {useState} from "react";

const Screen2 = ({navigation}) => {
  const [image, setImage] = useState(require("../img/vs_blue.png"))
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: 120,
              height: 140,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Image
              source={image}
              style={{ width: 115, height: 135, marginLeft: 6, marginTop: 6 }}
              resizeMode="contain"
            ></Image>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ width: 220, height: 50, marginTop: 17 }}>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 20,
                lineHeight: 18,
                paddingTop: 5,
              }}
            >
              Điện thoại Vsmart Joy 3 Hàng chính hãng
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bot}>
        <View
          style={{ flex: 0.7, justifyContent: "center" }}
        >
          <Text style={{ fontWeight: "400", fontSize: 18, paddingLeft: 15 }}>
            Chọn một màu bên dưới:{" "}
          </Text>
        </View>
        <View style={{ flex: 8.5, }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                width: 110,
                height: 105,
                backgroundColor: "#c5f1fb",
              }}
              onPress={()=>{setImage(require("../img/vs_silver.png"))}}
            ></Pressable>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                width: 110,
                height: 105,
                backgroundColor: "#f30d0d",
              }}
              onPress={()=>{setImage(require("../img/vs_red.png"))}}
            ></Pressable>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                width: 110,
                height: 105,
                backgroundColor: "#000000",
              }}
              onPress={()=>{setImage(require("../img/vs_black.png"))}}
            ></Pressable>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                width: 110,
                height: 105,
                backgroundColor: "#234896",
              }}
              onPress={()=>{setImage(require("../img/vs_blue.png"))}}
            ></Pressable>
          </View>
        </View>
        <View
          style={{
            flex: 1.3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 326,
              height: 50,
              borderWidth: 1.5,
              backgroundColor: "#4d6dc1",
              borderRadius: 12,
              borderColor: "red",
            }}
            onPress={()=> navigation.navigate('Home', {data: image})}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                letterSpacing: 0.5,
              }}
            >
              XONG
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    flex: 2,
    flexDirection: "row",
  },

  bot: {
    flex: 8,
    backgroundColor: "#c4c4c4",
  },
});
