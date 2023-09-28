import { 
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import { useState } from 'react';

export default function Navigation(props) {
    const [nav_status,set_nav_status]=props.nav;
    const {ct_available,ct_engaged,ct_off_duty}= props.cts;
    return (
        <View
            style={{
                flexDirection:"row",
                height:40,
                gap:10,
                justifyContent: "center",
                alignItems:"center",
            }}
        >
            <TouchableOpacity
                onPress={()=>set_nav_status(0)}
            > 
                <View   style={{
                        justifyContent: "center",
                        alignItems:"center",
                }}>   
                    <View style={{
                        justifyContent: "center",
                        alignItems:"center",
                        flexDirection:"row"
                    }}>
                        <Text style={{
                            fontSize:20,
                            fontWeight:"bold"
                        }}>
                            Off Duty
                        </Text>
                        <View style={{
                            backgroundColor:"red",
                            height:25,
                            width:25,
                            justifyContent: "center",
                            alignItems:"center",
                            borderRadius:20,
                            color:"white"
                        }}
                        >
                        <Text style={{
                            color:"white"
                        }}>
                            {ct_off_duty}
                        </Text>
                        </View>
                    </View>
                    {
                        nav_status===0
                        ?(<View style={{
                            backgroundColor:"blue",
                            height:3,
                            width:"100%"}}/>
                        ):(<View style={{
                            backgroundColor:"white",
                            height:3,
                            width:"100%"}}/>
                        )
                    }
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>set_nav_status(1)}
            >
                <View   style={{
                    justifyContent: "center",
                    alignItems:"center",
                }}>
                    <View style={{
                        justifyContent: "center",
                        alignItems:"center",
                        flexDirection:"row",
                    }}>
                        <Text style={{
                            fontSize:20,
                            fontWeight:"bold"
                        }}>
                            Available
                        </Text>
                        <View style={{
                            backgroundColor:"green",
                            height:25,
                            width:25,
                            justifyContent: "center",
                            alignItems:"center",
                            borderRadius:20,
                            color:"white"
                        }}
                        >
                        <Text style={{
                            color:"white"
                        }}>
                            {ct_available}
                        </Text>
                        </View>
                    </View>
                    {
                        nav_status===1
                        ?(<View style={{
                            backgroundColor:"blue",
                            height:3,
                            width:"100%"}}/>
                        ):(<View style={{
                            backgroundColor:"white",
                            height:3,
                            width:"100%"}}/>
                        )
                    }
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>set_nav_status(2)}
            >
                <View   style={{
                    justifyContent: "center",
                    alignItems:"center",
                }}>
                    <View style={{
                            justifyContent: "center",
                            alignItems:"center",
                            flexDirection:"row"
                        }}>
                        <Text style={{
                            fontSize:20,
                            fontWeight:"bold"
                        }}>
                            Engaged
                        </Text>
                        <View style={{
                            backgroundColor:"orange",
                            height:25,
                            width:25,
                            justifyContent: "center",
                            alignItems:"center",
                            borderRadius:20,
                            color:"white"
                        }}
                        >
                        <Text style={{
                            color:"white"
                        }}>
                            {ct_engaged}
                        </Text>
                        </View>
                    </View>
                    {
                        nav_status===2
                        ?(<View style={{
                            backgroundColor:"blue",
                            height:3,
                            width:"100%"}}/>
                        ):(<View style={{
                            backgroundColor:"white",
                            height:3,
                            width:"100%"}}/>
                        )
                    }
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

});
