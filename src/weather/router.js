import Hello from "./helloword";
import { Router, Route } from 'react-router';
import createBrowserHistory from "history/createBrowserHistory"
import React from 'react';
export default function App () {
  return (
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Hello}/>
    </Router>
  )
}
