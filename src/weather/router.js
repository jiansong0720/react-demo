import {Route, Router} from 'react-router';
import history from "history/createHashHistory"
import React from 'react';
import Hello from "./Hello";
import TableList from "./TableList";

export default function App() {
    return (
        <Router history={history()}>
            <div>
                <Route path="/" exact component={Hello}/>
                <Route path="/TableList" component={TableList}/>
            </div>
        </Router>
    )
}