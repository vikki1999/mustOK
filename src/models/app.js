import { routerRedux } from "../../node_modules/dva/router";
import {login } from '../services/example';
import {message } from 'antd';

const delay = timeout => new Promise(resolve => setTimeout(resolve,timeout));
 
export default {
  namespace: 'app',
  state: {
    loginLoading:false,//
  },
  reducers: {
    showLoginLoading(state){
      return{
        loginLoading:true,
      };
    },
    hideLoginLoading(state){
      return{
        loginLoading:false,
      };
    },
  },
  effects: {
    *login({payload:value},{call,put}){
     
    if(value.username === 'admin' && value.password === 'admin'){
      yield put ({type:'showLoginLoading'})
      yield call(delay,2000)
      yield put({ type: 'hideLoginLoading' })
      yield put (routerRedux.push('/main'))
    }else{
      yield put ({type:'showLoginLoading'})
      yield call(delay,2000)
      yield put({ type: 'hideLoginLoading' })
      yield call(message.error('用户名或密码错误！'));
    }
  
    }
  },
  subscriptions: {
    setup({dispatch}){

    },
  },
};
