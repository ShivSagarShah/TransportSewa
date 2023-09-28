import {
  GET_ALL_VEHICLES,
  GET_ALL_AVAILABLE_VEHICLES,
  GET_ALL_ENGAGED_VEHICLES,
  GET_ALL_OFF_DUTY_VEHICLES,
  GET_HISTORY,
} from './actions';

//reducer 
//initial state for the sample redux
//technologies & interviewer state is used to store the response data in state
const initialState = {
  vehicles: [],
  available_vehicles:[],
  engaged_vehicles:[],
  off_duty_vehicles:[],
  history:[],
};

//reducer sample to store the value from example
export default function vehicleReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_VEHICLES:
      return {...state, vehicles: action.payload};
    case GET_ALL_AVAILABLE_VEHICLES:
      return {...state, available_vehicles: action.payload};
    case GET_ALL_ENGAGED_VEHICLES:
      return {...state, engaged_vehicles: action.payload};
    case GET_ALL_OFF_DUTY_VEHICLES:
      return {...state, off_duty_vehicles: action.payload};
    case GET_HISTORY:
      return {...state, history: action.payload};
    default:
      return state;
  }
};

