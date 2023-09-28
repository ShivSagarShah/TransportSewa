// import { BASE_URL } from "../Helper/helpe";

//actions
export const GET_ALL_VEHICLES = 'GET_ALL_VEHICLES';
export const GET_ALL_ENGAGED_VEHICLES = 'GET_ALL_ENGAGED_VEHICLES';
export const GET_ALL_AVAILABLE_VEHICLES = 'GET_ALL_AVAILABLE_VEHICLES';
export const GET_ALL_OFF_DUTY_VEHICLES = 'GET_ALL_OFF_DUTY_VEHICLES';
export const GET_HISTORY = 'GET_HISTORY';
export const SET_NAVIGATION = 'SET_NAVIGATION';
export const POST_OFF_DUTY = 'POST_OFF_DUTY';


//base url for the sample method
const API_URL = 'http://35.154.180.54/api/';
const BASE_URL = 'http://35.154.180.54/api/';


//initializing axios
const axios = require("axios").default;

//get the technology list
export const getAllVehicles = () => {
  //configuration for the bearer token to authenticate.
  const skillsconfig = {
    headers: {
      Authorization: ``,
    },
  };
  try {
    return async dispatch => {
      const res = await axios.get(
        BASE_URL+"all",
        skillsconfig
      );
      if (res.data) {
        // console.log('====================================');
        // console.log(res.data);
        // console.log('====================================');
        dispatch({
          type: GET_ALL_VEHICLES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};

//get the available vehicle list
export const getAll_available_Vehicles = () => {
  //configuration for the bearer token to authenticate.
  const skillsconfig = {
    headers: {
      Authorization: ``,
    },
  };
  try {
    return async dispatch => {
      const res = await axios.get(
        BASE_URL+"available",
        skillsconfig
      );
      if (res.data) {
        // console.log('=====GET_ALL_AVAILABLE_VEHICLES===============================');
        // console.log(res.data);
        // console.log('====================================');
        dispatch({
          type: GET_ALL_AVAILABLE_VEHICLES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};

//get engaged vehicles list
export const getAll_engaged_Vehicles = () => {
  //configuration for the bearer token to authenticate.
  const skillsconfig = {
    headers: {
      Authorization: ``,
    },
  };
  try {
    return async dispatch => {
      const res = await axios.get(
        BASE_URL+"engaged",
        skillsconfig
      );
      if (res.data) {
        // console.log('=======GET_ALL_ENGAGED_VEHICLES=============================');
        // console.log(res.data);
        // console.log('====================================');
        dispatch({
          type: GET_ALL_ENGAGED_VEHICLES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};

//get offduty vehicles list
export const getAll_offduty_Vehicles = () => {
  //configuration for the bearer token to authenticate.
  const skillsconfig = {
    headers: {
      Authorization: ``,
    },
  };
  try {
    return async dispatch => {
      const res = await axios.get(
        BASE_URL+"offDuty",
        skillsconfig
      );
      if (res.data) {
        // console.log('=======GET_ALL_OFF_DUTY_VEHICLES=============================');
        // console.log(res.data);
        // console.log('====================================');
        dispatch({
          type: GET_ALL_OFF_DUTY_VEHICLES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};

//get history
export const getAll_history = () => {
  //configuration for the bearer token to authenticate.
  const skillsconfig = {
    headers: {
      Authorization: ``,
    },
  };
  try {
    return async dispatch => {
      const res = await axios.get(
        BASE_URL+"history",
        skillsconfig
      );
      if (res.data) {
        // console.log('=======GET_HISTORY=============================');
        // console.log(res.data);
        // console.log('====================================');
        dispatch({
          type: GET_HISTORY,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};

//get history
export const post_status_change_to_off_duty = (props) => {

  const config = {
    title: "sdfasdf",
    item: {
      vehicle_no:props.vehicle_no
    }
  }
  
  try {
    return async dispatch => {
      const res = await axios.post(
        BASE_URL+"change/status/offduty",
        config
      );
      if (res.data) {
        // console.log('=======SET_DATA=============================');
        // console.log(res.data);
        // console.log('====================================');
        dispatch({
          type: POST_OFF_DUTY,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};

//avaialble =1
//offduty = 0
// engage = 2