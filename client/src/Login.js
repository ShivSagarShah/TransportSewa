import { 
    StyleSheet, 
    TextInput, 
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import React, { useState } from "react";
import Icon from 'react-native-vector-icons/AntDesign';
import {LinearGradient} from 'expo-linear-gradient';
import Djjs from '../assets/Djjs.png'

export default function Login({navigation}) {

    const hardCodeUser="DJJS001";
    const hardCodePassword="Sewa@23";
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () =>{
        navigation.navigate('Page', {name: 'Djjs'});
    };
    

    return (
        <LinearGradient 
            style={styles.gradient}
            locations={[0, 1]}
            colors={["#ca4b7c", "#fe7187"]}
        >
            <View
            style={styles.container}
            >
            <View style={styles.box1} />
            <View style={styles.box2}>
                <Image source={Djjs} style={styles.image}/>
                <Text style={styles.topic}>Transport Seva</Text>
                {/* for spacing */}
                <View style={{height:40}}/>
                
                    <View style={styles.inps}>
                        <Text style={styles.inpText}>
                            User Name : 
                        </Text >
                        <TextInput
                            style={styles.input}
                            onChangeText={(userName) => setUserName(userName)}
                        />
                    </View>
                    <View style={styles.inps}>
                        <Text style={styles.inpText}>
                            User Password :
                        </Text>
                        <TextInput 
                            style={styles.input}
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <View style={{height:40}}/>
                    <TouchableOpacity 
                        onPress={() =>{
                            if(hardCodeUser === userName && hardCodePassword === password){
                                navigation.navigate('Page', {name: 'DJJS'});
                            }
                        }}
                        
                    >
                        <View style={styles.button}>
                            <Text style={{color:"#FFF",fontWeight: "bold"}}>
                                Get Started  
                            </Text>
                            <Icon name="rightcircle" color="#4F8EF7" />
                        </View>
                    </TouchableOpacity>

            </View>
            <View style={styles.box3} />
            </View>
        </LinearGradient>
      );
}

const styles = StyleSheet.create({
    container: {
        height:"100%"
    },
    box1:{
        flex: 2, 
    },
    box2: {
        flex: 2,
        justifyContent: 'center',
        alignItems:'center'
    },
    box3:{
        flex: 3,
    },
    gradient :{
        flex : 1
    },
    image:{
        height: 100,
        width: 100,
    },
    input: {
        height: 40,
        width:240,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        borderColor:"white",
        borderWidth:3,
        color:"white"
    },
    inps:{
        
    },
    inpText :{
        color:"white",
        fontWeight:"bold",
        fontSize:18
    },
    topic:{
        color:"white",
        fontWeight:"bold",
        fontSize:30
    },
    button:{
        height:40,
        width:240,
        backgroundColor:"#3D265A",
        borderRadius:10,
        alignItems:'center',
        justifyContent:"center",
        color:"white",
        fontWeight:"bold",
        flexDirection:"row",
        gap:20
    }
});
