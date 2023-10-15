import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, {useState} from "react";

import PickerColor from '../view/PickerColor'

const Screen1 = ({navigation, route}) => {

  const {data} = route.params || {data: require("../img/vs_blue.png")}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.one}>
        <Image
          source={data}
          style={{ marginTop: 10, width: '100%', height: '95%'}}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={styles.two}>
        <View style={{ width: "90%", height: "20%" }}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 15,
              marginTop: 10,
              marginLeft: 15,
            }}
          >
            Điện thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            height: "20%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "50%",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../img/star.png")}
              style={{ marginLeft: 15, marginTop: 10, width: 30, height: 30 }}
            ></Image>
            <Image
              source={require("../img/star.png")}
              style={{ marginTop: 10, width: 30, height: 30 }}
            ></Image>
            <Image
              source={require("../img/star.png")}
              style={{ marginTop: 10, width: 30, height: 30 }}
            ></Image>
            <Image
              source={require("../img/star.png")}
              style={{ marginTop: 10, width: 30, height: 30 }}
            ></Image>
            <Image
              source={require("../img/star.png")}
              style={{ marginTop: 10, width: 30, height: 30 }}
            ></Image>
          </View>
          <View
            style={{ height: "100%", width: "50%", justifyContent: "center" }}
          >
            <Text style={{ fontWeight: "400", fontSize: 16 }}>
              (Xem 828 đánh giá)
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "90%",
            height: "20%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "50%",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontSize: 18,
                marginLeft: 15,
                marginTop: 10,
              }}
            >
              1.790.000 đ
            </Text>
          </View>
          <View
            style={{ height: "100%", width: "50%", justifyContent: "center" }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontSize: 15,
                textDecorationLine: "line-through",
                color: "grey",
              }}
            >
              1.790.000 đ
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "90%",
            height: "20%",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              height: "100%",
              width: "50%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: 13,
                marginLeft: 15,
              }}
            >
              Ở ĐÂU RẺ HƠN HOÀN TIỀN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <Image
              source={require("../img/chamHoi.png")}
              style={{ marginLeft: 5 }}
            ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "90%",
            height: "20%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              width: "94%",
              height: "90%",
              borderWidth: 1,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 10,
            }}

            onPress={() => navigation.navigate('ChooseColor')}
          >
            <View
              style={{
                width: "90%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "400", fontSize: 15 }}>
                4 MÀU - CHỌN MÀU
              </Text>
            </View>
            <View
              style={{
                width: "10%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../img/Vector.png")}></Image>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.three}>
        <TouchableOpacity
          style={{
            width: "90%",
            height: 55,
            backgroundColor: "red",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
        marginBottom: 15,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 22 }}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  one: {
    width: "100%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
  },

  two: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },

  three: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
