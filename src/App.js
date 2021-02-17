import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Home, Photography } from "./Pages";
import { Footer, Slider } from "./Components";

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/photography" component={Photography} />
			<Redirect to="/" />
		</Switch>
		<Footer />
		<Slider />
	</Router>
);

export default App;
