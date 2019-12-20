import {Route} from 'react-router-dom';
import React from 'react';
import Home from './../components/home';
import Login from './../components/login';
const routers = [
    {
        path:'/',
        exact:true,
        main:(match)=> <Home match={match}/>
    },
    {
        path:'/login',
        exact:true,
        main: (match)=><Login match={match}/>
    }
]
const AppRouter  = routers.map((item,index)=>{
    return <Route  path={item.path} key ={index} exact = {item.exact} component = {item.main}/>
})
export default AppRouter ;