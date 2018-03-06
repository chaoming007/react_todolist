import React from 'react'
import { BrowserRouter,Switch,Route,NavLink, Redirect } from 'react-router-dom'

import Search from './Search'
import List from './List'
import Nav from './Nav'

class App extends React.Component{
    render(){
        return(
        	<div className="content">
                <Search />
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/:str" component={ List } ></Route>
                            <Redirect from="*" to="/all" />
                        </Switch>
                        <Nav />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default App