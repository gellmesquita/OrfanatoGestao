import {createAction, createReducer} from '@reduxjs/toolkit';

const LOGIN= createAction('LOGIN');
const LOGOUT= createAction('LOGOUT');

const INITIAL_STATE={
    isAuthenticated: (localStorage.getItem('token'))? true: false,
}

export default createReducer(INITIAL_STATE, {
    [LOGIN.type]: (state, action)=>({...state,isAuthenticated:true }),
    [LOGOUT.type]: (state, action)=>({...state,isAuthenticated:false }),
})

