import React from "react";
import styles from "./App.module.scss";
import TabNavigation from "./components/Layout/TabNavigation/TabNavigation";
import TabContent from "./components/Layout/TabContent/TabContent";
import {Switch, Route, Redirect} from "react-router-dom";
import MessageContent from "./components/Layout/MessageContent/MessageContent";
import {useWindowSize} from "./hooks/useWindowSize";
import {CommonContextProvider} from "./contexts/CommonStateContext";

function App() {
	return (
		<div className={`${styles.App__component} layout overflow-hidden blue`}>
			<Switch>
				<Route exact={true} path={'/'}>
					<Redirect to={'/tab/create-chat'}/>
				</Route>
				<Route path={'/tab'}>
					<CommonContextProvider>
						<MessageContent/>
						<TabContent/>
						<TabNavigation/>
					</CommonContextProvider>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
