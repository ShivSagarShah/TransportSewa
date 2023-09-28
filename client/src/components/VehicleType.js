import { 
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import { useState } from 'react';


export default function VehiclType(props) {
    const [vehicle_type,set_vehicle_type] = props.vtype;
    return (
        <View style={{
            flexDirection:"row",
            height:40,
            gap:10,
            justifyContent: "center",
            alignItems:"center",
        }}>
            <TouchableOpacity
                onPress={()=>set_vehicle_type(1)}
            >
                {vehicle_type==1?(
                    <View style={styles.s}>
                        <Text style={styles.selected}>
                            All
                        </Text>
                    </View>
                ):(
                    <View style={styles.ns}>
                        <Text style={styles.notselected}>
                            All
                        </Text>
                    </View>
                )}
                
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>set_vehicle_type(2)}
            >
                {vehicle_type==2?(
                    <View style={styles.s}>
                        <Text style={styles.selected}>
                        2 Wheeler
                        </Text>
                    </View>
                ):(
                    <View style={styles.ns}>
                        <Text style={styles.notselected}>
                        2 Wheeler
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>set_vehicle_type(3)}
            >
                {vehicle_type==3?(
                    <View style={styles.s}>
                        <Text style={styles.selected}>
                        3 Wheeler
                        </Text>
                    </View>
                ):(
                    <View style={styles.ns}>
                        <Text style={styles.notselected}>
                        3 Wheeler
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>set_vehicle_type(4)}
            >
                {vehicle_type==4?(
                    <View style={styles.s}>
                        <Text style={styles.selected}>
                        4 Wheeler
                        </Text>
                    </View>
                ):(
                    <View style={styles.ns}>
                        <Text style={styles.notselected}>
                        4 Wheeler
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    s:{
        backgroundColor:"#7A2E7A",
        borderRadius:5,
        justifyContent: "center",
        alignItems:"center",
    },
    selected:{
        fontSize:15,
        color:"white",
        padding:10   
    },
    ns:{
        backgroundColor:"#FFF",
        borderRadius:5,
        borderColor:"#7A2E7A",
        borderWidth:5,
        justifyContent: "center",
        alignItems:"center",
    },
    notselected:{
        fontSize:15,
        color:"#7A2E7A",
        padding:5,
        fontWeight:"bold" 
    }
});
