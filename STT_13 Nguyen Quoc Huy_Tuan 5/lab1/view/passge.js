import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import CheckIcon from './CheckIcon';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <View style={styles.one}>
          <View>
            <Text style={styles.textOne}>PASSWORD</Text>
            <Text style={styles.textOne}>GENERATOR</Text>
          </View>
        </View>
        <View style={styles.two}>
          <View
            style={{
              width: "90%",
              height: 60,
              backgroundColor: "#151537",
              justifyContent: "center",
              paddingLeft: 15,
            }}
          >
            <TextInput style={{ fontSize: 15, color: "white" }}></TextInput>
          </View>
        </View>
        <View style={styles.three}>
          <View style={styles.containThree}>
            <View
              style={{
                width: "100%",
                height: "20%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "55%",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.textThree}>Password length</Text>
              </View>
              <View
                style={{
                  width: "45%",
                  height: "50%",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              >
                <TextInput style={{ fontSize: 16 }}></TextInput>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "20%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.textMiddle}>
                <Text style={styles.textThree}>Include lower case letters</Text>
              </View>
              <View style={styles.box}>
                <View style={styles.boxChild}>
                  <CheckIcon />
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "20%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.textMiddle}>
                <Text style={styles.textThree}>Include upcase letters</Text>
              </View>
              <View style={styles.box}>
                <View style={styles.boxChild}></View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "20%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.textMiddle}>
                <Text style={styles.textThree}>Include number</Text>
              </View>
              <View style={styles.box}>
                <View style={styles.boxChild}>
                  <CheckIcon />
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "20%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.textMiddle}>
                <Text style={styles.textThree}>Include special symbol</Text>
              </View>
              <View style={styles.box}>
                <View style={styles.boxChild}></View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.four}>
          <TouchableOpacity
            style={{ width: "90%", height: 60, backgroundColor: "#3b3b98" }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.textFour}>PASSWORD GENERATOR</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#9595c1",
    alignItems: "center",
    justifyContent: "center",
  },

  secondContainer: {
    width: "90%",
    height: "95%",
    borderWidth: 1,
    backgroundColor: "#23235b",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  one: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },

  textOne: {
    fontWeight: "700",
    fontSize: 25,
    lineHeight: 29.3,
    color: "#fff",
  },

  two: {
    width: "100%",
    height: "13%",
    alignItems: "center",
    justifyContent: "center",
  },

  three: {
    width: "100%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
  },

  textThree: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },

  containThree: {
    width: "88%",
    height: "100%",
  },

  textMiddle: {
    width: "80%",
    height: "100%",
    justifyContent: "center",
  },

  box: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  boxChild:{
    width: 30,
    height: 30,
    borderWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  four: {
    width: "100%",
    height: "12%",
    alignItems: "center",
    justifyContent: "center",
  },

  textFour: {
    fontWeight: "700",
    fontSize: 18,
    color: "#fff",
  },
});
