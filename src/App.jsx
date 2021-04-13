import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AdminTest from './AdminComponents/AdminTest';
import MainAuth from './AuthComponents/MainAuth';
import MainForm from './FormComponents/MainForm';
import Protected from './MiddlewareComponents/Protected';


const App = () => {

    return (
        <main>
            <Switch>
            <Route  path='/' exact > 
                <Protected Comp={MainAuth}/>
            </Route>
            <Route exact path='/form'>
                <Protected Comp = {MainForm}/>
            </Route>     
            <Route exact path='/admin'>
                <Protected Comp = {AdminTest}/>
            </Route>  
            </Switch>
        </main>
    )
}

export default App;