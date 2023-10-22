
import dataHome from "../datahome";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Pressable,
  } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import search from "./search";

const Home = createStackNavigator();
const Header = () => {
    return (
      <View style={styles.container}>
        <Pressable >
          <Image
            source={require("../../../assets/IMG/outlined.png")}
            style={styles.img}
          ></Image>
        </Pressable>
  
        <Text style={styles.text}>Chat</Text>
  
        <Pressable>
          <Image
            source={require("../../../assets/IMG/bi_cart-check.png")}
            style={styles.img}
          ></Image>
        </Pressable>
      </View>
    );
  };
    const Body = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text>Mọi thắc mắc xin liên hệ shop qua khung chat</Text>
      </View>

      {dataHome.map((item) => (
        <View style={styles.view1}>
          <Image source={item.imageLocal} style={styles.img} />

           <View style={styles.view2}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text1}>Shop : {item.shop}</Text>
          </View>

          <Pressable style={styles.Pre}>
            <Text style={styles.textChat}>Chat</Text>
          </Pressable>
        </View>
      ))}
      
    </View>
  );
}
    const Footer = () => {
        const navigation = useNavigation();
        const Tab = createMaterialBottomTabNavigator();
        return (
          <View style={stylesfoot.container}>
            <Pressable>
              <Image
                source={require("../img/list.png")}
                style={styles.img}
              ></Image>
            </Pressable>
      
            <Pressable onPress={()=>{navigation.navigate('Seach')}}>
              <Image
                source={require("../img//home.png")}
                style={styles.img}
              ></Image>
            </Pressable>
      
            <Pressable>
              <Image
                source={require("../img/previous.png")}
                style={styles.img}
              ></Image>
            </Pressable>
          </View>
        );
      };
    
    const styleshead = StyleSheet.create({
        container: {
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: 50,
          backgroundColor: "#1BA9FF",
          position: "sticky",
          top: 0,
          zIndex: 1,
        },
        img: {
          width: 24,
          height: 24,
        },
        text: {
          color: "#ffff",
          fontSize: 20,
          fontWeight: 500,
        },
      });
    const stylesbody = StyleSheet.create({
        container: {
          backgroundColor: "#ffff",
        },
        view: {
          alignItems: "center",
          margin: 20,
          marginBottom: 40,
          backgroundColor: "#FFCF96",
          height: 50,
          padding: 15,
          borderRadius: 10,
        },
        view1: {
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems:'center',
          padding:20,
          margin:5,
          borderRadius:20,
          backgroundColor:'#EBFFFA'
        },
        view2: {
          flexDirection: "column",
        },
        img: {
          width: 74,
          height: 74,
          borderRadius:5,
        },
        text: {
          fontSize: 16,
          fontWeight:500,
          width:150,
        },
        text1: {
          fontSize: 16,
          color: "red",
          paddingTop:10,
          width:150,
        },
        textChat:{
          textAlign:'center',
          padding:7,
          fontSize:16,
          color:'#ffff',
        },
        Pre:{
          height:38,
          width:88,
          backgroundColor:'#F31111',
        }
      });
      const stylesfoot = StyleSheet.create({
        container: {
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: 80,
          backgroundColor: "#1BA9FF",
          position: "sticky",
          bottom: 0,
          zIndex: 1,
        },
        img: {
          width: 24,
          height: 24,
        },
        text: {
          color: "#ffff",
          fontSize: 20,
          fontWeight: 500,
        },
      });


      export default Home;
