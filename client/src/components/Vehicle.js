import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking,
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome5';
import React, {useEffect, useState} from 'react';

export default function Vehicle(props) {
    const {
        driver_name,
        branch ,
        vehicle_no,
        phone_no,
        vehicle_type,
        status,
        trips,
        engaged_message,
        createdAt,
        updatedAt
    } = props.props;
    
    const [setModalVisible1,setModalVisible2,setModalVisible3,nav_status,set_vehicle_no_change]=props.mod;

    const _pressCall = (phone_no)=>{
        console.log(phone_no);
        const url=`tel://${phone_no}`;
        Linking.openURL(url);
    }
    
    return (
        <View style={{
            flexDirection:"row",
            justifyContent: "center",
            alignItems:"center",
            gap:2,
            height:60,
            //borderColor:"black",
            //borderWidth:1
        }}>
            <View>
                {(vehicle_type.includes("2"))?
                    (<Icon1 name="motorbike" size={30} color="black" />):(
                        (vehicle_type.includes("3"))?(
                        <Icon3 name="rickshaw" size={30} color="black" />
                        ):
                        (<Icon4 name="car" size={30} color="black" />)
                )}               
            </View>
            <View>
                <View
                    style={{
                        flexDirection:"row",
                        gap:15,
                        
                    }}
                >
                    <Text style={{
                        fontSize:20,
                        fontWeight:"bold"
                    }}>
                    {driver_name}
                    </Text>
                    <View style={{
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <Text style={{
                            fontSize:10,
                        }}>
                        {engaged_message}
                        </Text>
                    </View>
                </View>
                <View style={{
                    flexDirection:"row",
                    gap:0
                }}>
                    <View style={{
                        width:70 
                    }}>
                        <Text>
                        {branch}
                        </Text>
                    </View>
                    <View style={{
                        width:90        
                    }}>
                        <Text>
                        {vehicle_no}
                        </Text>
                    </View>
                    <View style={{
                        width:60        
                    }}>
                        <Text>
                        Trips : {trips}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{
                backgroundColor:"",
                height:30,
                width:30,
                borderRadius:10,
                justifyContent: "center",
                alignItems:"center",
                
            }}>
                <TouchableOpacity 
                    onPress={()=>_pressCall(phone_no)}
                >
                    <Icon2 name="phone" size={30} color="#4F8EF7" />
                </TouchableOpacity>
                
            </View>
            
            <View style={{
                justifyContent: "center",
                alignItems:"center",
                gap:5
            }}>
                {
                    (nav_status===0) ?(

                        <TouchableOpacity
                            onPress={()=>{
                                setModalVisible2(true)
                                set_vehicle_no_change(vehicle_no);
                            }}
                        >
                            <View style={{
                                backgroundColor:"green",
                                borderRadius:5,
                                justifyContent: "center",
                                alignItems:"center",
                                width:60,
                            }}>
                                <Text style={{
                                    color:"white"
                                }}>
                                    Available
                                </Text>
                            </View>
                        </TouchableOpacity>

                    ):(<View></View>
                    )
                }
                {
                    (nav_status==1) ?(

                        <TouchableOpacity
                        onPress={()=>{
                            setModalVisible3(true)
                            set_vehicle_no_change(vehicle_no);
                        }}
                        >
                            <View style={{
                                    backgroundColor:"orange",
                                    borderRadius:5,
                                    justifyContent: "center",
                                    alignItems:"center",
                                    width:60
                                }}>
                                <Text style={{
                                        color:"white"
                                    }}>
                                    Engage
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ):(<View></View>
                    )
                }
                {
                    (nav_status===1) ?(
                        <TouchableOpacity
                        onPress={()=>{
                            setModalVisible1(true)
                            set_vehicle_no_change(vehicle_no);
                        }}
                        >
                            <View style={{
                                    backgroundColor:"red",
                                    borderRadius:5,
                                    justifyContent: "center",
                                    alignItems:"center",
                                    width:60
                                }}>
                                <Text style={{
                                        color:"white"
                                    }}>
                                    Off Duty
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ):(<View></View>
                    )
                }
                {
                    (nav_status===2) ?(

                        <TouchableOpacity
                            onPress={()=>{
                                setModalVisible2(true)
                                set_vehicle_no_change(vehicle_no);
                            }}
                        >
                            <View style={{
                                backgroundColor:"green",
                                borderRadius:5,
                                justifyContent: "center",
                                alignItems:"center",
                                width:60,
                            }}>
                                <Text style={{
                                    color:"white"
                                }}>
                                    Available
                                </Text>
                            </View>
                        </TouchableOpacity>

                    ):(<View></View>
                    )
                }
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

});
//off_duty : 1
// engage : 3
// available : 2