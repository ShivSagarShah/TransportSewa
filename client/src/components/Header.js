import { 
    StyleSheet,
    View,
    Image,
    Text,
    Pressable
} from 'react-native';
import Djjs from '../../assets/Djjs.png';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';


export default function Header(props) {
    const [setFireModal,navigation] = props.props;
    return (
        <View 
            style={{
                flexDirection:"row",
                justifyContent: "center",
                alignItems:"center",
                gap:30
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
                Welcome Aboard!
            </Text>
            <View style={{
                flexDirection:"row",
                gap:10
            }}>
                <Pressable
                    onPress={()=>setFireModal(true)}
                >
                    <Icon2 
                        name="fire" 
                        color="orange" 
                        size={25}
                    />
                </Pressable>
                <Pressable
                    onPress={()=>navigation.navigate('History', {name: 'DJJS'})}
                >
                    <Icon1 
                        name="history" 
                        color="black" 
                        size={25}
                    />
                </Pressable>
                <Pressable
                    onPress={()=>navigation.navigate('Search', {name: 'DJJS'})}
                >
                    <Icon 
                        name="search1" 
                        color="black" 
                        size={25}
                    />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

});
