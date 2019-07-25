import React from "react";
import Books from "./pages/Books";

// importing the router and switch
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* when the exact path is / we render the books component instead of putting <book/> there */}
          <Route exact path = '/' component={Books}/>
          <Route exact path = '/books' component={Books}/>
          {/* similar to req.params where id can be anything an drender our detail component */}
          <Route exact path = '/books/:id' component={Detail}/>
          {/* default component is the NoMatch */}
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
