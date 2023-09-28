import {
    StyleSheet,
    Text,
    Platform,
    StatusBar,
    View,
    ScrollView,
    Modal,
    Pressable,
    TextInput,
    Image
  } from 'react-native';
  import {
    getAllVehicles,
    getAll_available_Vehicles,
    getAll_engaged_Vehicles,
    getAll_offduty_Vehicles,
    getAll_history,
  } from './redux/actions';
  import React, { useEffect, useState } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  const BASE_URL = 'http://35.154.180.54/api/';
import axios from 'axios';
import Djjs from '../assets/Djjs.png';
import Icon from 'react-native-vector-icons/AntDesign';
  
export default function Search({navigation}) {
    const dispatch = useDispatch();
    const fetchDataHISTORY = () => dispatch(getAll_history());
    useEffect(() => {
        fetchDataHISTORY();
    }, []);
    var history = useSelector(x => x.vehicleReducer.history);
    
    console.log("hi",history);
    return (
      <View style={styles.AndroidSafeArea}>
        <View>
            <View 
                style={{
                    flexDirection:"row",
                    justifyContent: "center",
                    alignItems:"center",
                    gap:250
                }}
            >
                <Image 
                    source={Djjs}
                    style={{
                        borderRadius:50,
                        height:40,
                        width:40
                    }}
                />
                <Text
                    style={{
                        fontSize:20,
                        fontWeight:"bold"
                    }}
                >
                    Search
                </Text>
            </View>
        </View>
        <View style={{ height : 10 }}/>
        <View style={{
            flexDirection:"row",
            gap:5
        }}>
            <View style={{
                borderColor:"black",
                borderWidth:5,
                borderRadius:10,
                width:"90%"
            }}>
                <TextInput>
                </TextInput>
            </View>
            <View style={{
                // borderWidth:2,
                borderRadius:10
            }}>
                <Pressable style={{
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <Icon 
                        name="search1" 
                        color="black" 
                        size={25}
                    />
                </Pressable>
            </View>
        </View>
        <Text>
            helloaskdjfakdjfbksjdfb
        </Text>  
        <Text>
            hello
        </Text> 
        <Text>
            hello
        </Text> 
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      width: "80%",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  