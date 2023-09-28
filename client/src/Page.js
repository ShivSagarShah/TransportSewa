import {
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  View,
  ScrollView,
  Modal,
  Pressable,
  TextInput
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
import Header from './components/Header';
import Navigation from './components/Navigation';
import VehiclType from './components/VehicleType';
import Vehicle from './components/Vehicle';
const BASE_URL = 'http://35.154.180.54/api/';
import axios from 'axios';

export default function Page({navigation}) {

  const dispatch = useDispatch();
  const fetchData = () => dispatch(getAllVehicles());
  const fetchDataAvailable = () => dispatch(getAll_available_Vehicles());
  const fetchDataEngaged = () => dispatch(getAll_engaged_Vehicles());
  const fetchDataOFFDUTY = () => dispatch(getAll_offduty_Vehicles());
  

  useEffect(() => {
    fetchData();
    fetchDataAvailable();
    fetchDataEngaged();
    fetchDataOFFDUTY();
  }, []);

  // changing navigation
  const [vehicle_type, set_vehicle_type] = useState(1);

  var vehicles = useSelector(x => x.vehicleReducer.vehicles);
  function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
  }    
  vehicles.sort(GetSortOrder("trips"));

  const vehicles_off_duty = useSelector(x => x.vehicleReducer.off_duty_vehicles);
  const vehicles_engaged = useSelector(x => x.vehicleReducer.engaged_vehicles);
  const vehicles_available = useSelector(x => x.vehicleReducer.available_vehicles);

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const [nav_status, set_nav_status] = useState(0);

  const [ct_available, set_ct_available] = useState(0);
  const [ct_engaged, set_ct_engaged] = useState(0);
  const [ct_off_duty, set_ct_off_duty] = useState(0);

  const [reload, set_reload] = useState(0);
  const [vehicle_no_change, set_vehicle_no_change] = useState(0);

  const [text, set_text] = useState("");
  const [fireModal,setFireModal] = useState(false);

  useEffect(() => {
    fetchData();
    fetchDataAvailable();
    fetchDataEngaged();
    fetchDataOFFDUTY();
    set_ct_available(vehicles_available.length);
    set_ct_engaged(vehicles_engaged.length);
    set_ct_off_duty(vehicles_off_duty.length);
    console.log("hi");
  }, [nav_status, reload]);

  // Rapid GET Req stack
  const getSetZero = () => {
    //configuration for the bearer token to authenticate.
    const skillsconfig = {
      headers: {
        Authorization: ``,
      },
    };

        const res = axios.get(
          BASE_URL+"/tripscount/zero",
          skillsconfig
        )
        .then(()=>{
          set_reload(1 - reload);
        });
        if (res.data) {
          console.log("set to zero")
        } else {
          console.log('Unable to fetch');
        }
  };

  // Rapid POST Req stack
  //http://localhost:8080/api/change/status/avaiable
  const change_to_available = (vehicle_num) => {
    const addinterviewConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(vehicle_num);
    const interviewerData = {
      title: "cdb",
      item: {
        vehicle_no: vehicle_num
      }
    };
    // console.log(BASE_URL + 'change/status/avaiable');
    {
      axios
        .post(
          BASE_URL + 'change/status/avaiable',
          interviewerData
        )
        .then(response => {
          if (response.data) {
            console.log('====================================');
            console.log(response.data);
            console.log('====================================');
            set_reload(1 - reload);
          } else {
            console.log('Unable to fetch');
          }
        })
        .catch((error) => {
          // Handle any errors that occur
          console.error(error);
        });;
    }
  };

  //http://localhost:8080/api/change/status/offduty
  const change_to_off_duty = (vehicle_num) => {
    const addinterviewConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(vehicle_num);
    const interviewerData = {
      title: "cdb",
      item: {
        vehicle_no: vehicle_num
      }
    };
    // console.log(BASE_URL + 'change/status/avaiable');
    {
      axios
        .post(
          BASE_URL + 'change/status/offduty',
          interviewerData
        )
        .then(response => {
          if (response.data) {
            console.log('====================================');
            console.log(response.data);
            console.log('====================================');
            set_reload(1 - reload);
          } else {
            console.log('Unable to fetch');
          }
        })
        .catch((error) => {
          // Handle any errors that occur
          console.error(error);
        });;
    }
  };


  //http://localhost:8080/api/change/status/engaged
  const change_to_engaged = (vehicle_num) => {
    const addinterviewConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(vehicle_num);
    const interviewerData = {
      title: "cdb",
      item: {
        vehicle_no: vehicle_num
      }
    };
    // console.log(BASE_URL + 'change/status/avaiable');
    {
      axios
        .post(
          BASE_URL + 'change/status/engage',
          interviewerData
        )
        .then(response => {
          if (response.data) {
            console.log('====================================');
            console.log(response.data);
            console.log('====================================');
            set_reload(1 - reload);
          } else {
            console.log('Unable to fetch');
          }
        })
        .catch((error) => {
          // Handle any errors that occur
          console.error(error);
        });;
    }
  };

  //http://localhost:8080/api/change/status/engaged
  const increase_trip_count = (vehicle_num) => {
    const addinterviewConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(vehicle_num);
    const interviewerData = {
      title: "cdb",
      item: {
        vehicle_no: vehicle_num
      }
    };
    // console.log(BASE_URL + 'change/status/avaiable');
    {
      axios
        .post(
          BASE_URL + 'trip/increment',
          interviewerData
        )
        .then(response => {
          if (response.data) {
            console.log('====================================');
            console.log(response.data);
            console.log('====================================');
            set_reload(1 - reload);
          } else {
            console.log('Unable to fetch');
          }
        })
        .catch((error) => {
          // Handle any errors that occur
          console.error(error);
        });;
    }
  };

  //http://localhost:8080/api/history/add
  const add_history = (vehicle_num) => {
    const addinterviewConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const interviewerData = {
        title: "cdb",
        item: {
          vehicle_id: 21,
          driver_name: vehicle_num,
          trip_date_and_time: new Date(Date.now()),
          engaged_message: text
        }
    };
    // console.log(BASE_URL + 'change/status/avaiable');
    {
      axios
        .post(
          BASE_URL + 'history/add',
          interviewerData
        )
        .then(response => {
          if (response.data) {
            console.log('====================================');
            console.log(response.data);
            console.log('====================================');
            set_reload(1 - reload);
          } else {
            console.log('Unable to fetch');
          }
        })
        .catch((error) => {
          // Handle any errors that occur
          console.error(error);
        });;
    }
  };

  return (
    <View style={styles.AndroidSafeArea}>
    {/* <SafeAreaView style={styles.AndroidSafeArea}> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={fireModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setFireModal(!fireModal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirm Set Trip to Zero?</Text>
            <View style={{
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setFireModal(!fireModal)}>
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  getSetZero()
                  setFireModal(!fireModal);
                  // change_to_off_duty(vehicle_no_change);
                }}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible1(!modalVisible1);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirm Submission ?*</Text>
            <View style={{
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible1(!modalVisible1)}>
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible1(!modalVisible1);
                  change_to_off_duty(vehicle_no_change);
                }}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible2(!modalVisible2);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirm Submission ?</Text>
            <View style={{
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible2(!modalVisible2)}>
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible2(!modalVisible2);
                  if(nav_status==2)increase_trip_count(vehicle_no_change);
                  change_to_available(vehicle_no_change);
                }}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible3(!modalVisible3);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter Message before engaging :</Text>
            <View style={{
              borderColor: "black",
              borderWidth: 2,
              width: 200,
              borderRadius: 10
            }}>
              <TextInput 
                onChangeText={(val) => set_text(val)}
              />
            </View>
            <View style={{ height: 10 }} />
            <View style={{
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible3(!modalVisible3)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible3(!modalVisible3);
                  change_to_engaged(vehicle_no_change);
                  add_history(vehicle_no_change);
                }}>
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Header props={[setFireModal,navigation]}/>
      <Navigation nav={[nav_status, set_nav_status]} cts={{ ct_available, ct_engaged, ct_off_duty }} />
      <VehiclType vtype={[vehicle_type, set_vehicle_type]} />
      <ScrollView>
        {
          vehicles.map((e) => {
            if (e.status === nav_status) {
              if (e.vehicle_type.includes(vehicle_type.toString())) {
                return (
                  <Vehicle props={e} key={e.vehicle_no} mod={[setModalVisible1, setModalVisible2, setModalVisible3, nav_status, set_vehicle_no_change]} />
                )
              }
              else if (vehicle_type === 1) {
                return (
                  <Vehicle props={e} key={e.vehicle_no} mod={[setModalVisible1, setModalVisible2, setModalVisible3, nav_status, set_vehicle_no_change]} />
                )
              }
            }
          })}
      </ScrollView>
    {/* </SafeAreaView> */}
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
