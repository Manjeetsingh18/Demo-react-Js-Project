import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';


// import loginReducer from '../../container/Login/reducer';
// import homeReducer from '../../container/Home/reducer';
import dashboardReducer from '../../container/Dashboard/reducer';


export default combineReducers({
    routerReducer,
    // login: loginReducer,
    // home: homeReducer,
    dashboard: dashboardReducer,
    
    multireducer: multireducer({}),
});