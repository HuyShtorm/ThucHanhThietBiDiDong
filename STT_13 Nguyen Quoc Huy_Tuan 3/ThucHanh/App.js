import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
export default function App() {
  return (
    <View style={styles.container}>
      <Text><h1>Xin chào đến với Web</h1>
      </Text>
      <h1> LOGIN </h1>
      <form name="frmLoginInfo" id="frmLoginInfo" method="post" action="#">
      <table border="1" id="frmLoginInfoContainer">
        <tr>
          <td>
            <b>Tên đăng nhập:</b>
          </td>
          <td>
            <input type="text" name="txtUsername" id="txtUsername" />
          </td>
        </tr>
        <tr>
          <td>
            <b>Mật khẩu:</b>
          </td>
          <td>
            <input type="password" name="txtPassword" id="txtPassword" />
          </td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <input type="reset" name="btnClear" id="btnClear" value="clear" />
          </td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <input type="submit" name="btnSubmit" id="btnSubmit" value="LOGIN" />
          </td>
        </tr>

      </table>
      
    </form> 
 
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
});
