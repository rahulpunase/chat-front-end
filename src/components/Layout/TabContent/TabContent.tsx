import React, {FC} from "react";
import styles from "./TabContent.module.scss";
import { Switch, Route } from "react-router-dom";
import CreateChatPage from "../../../pages/CreateChatPage/CreateChatPage";
import NotificationPage from "../../../pages/NotificationPage/NotificationPage";
import FriendsPage from "../../../pages/FriendsPage/FriendsPage";
import ChatsPage from "../../../pages/ChatsPage/ChatsPage";

interface TabContentProps {
}

const TabContent: FC<TabContentProps> = () => (
	<aside className={`${styles.TabContent} d-flex theme-bk-color`}>
		<div className={`${styles.holder}`}>
			<div className="container py-8 h-100">
				<div className="content h-100">
					<Switch>
						<Route path={"/tab/create-chat"}>
							<CreateChatPage/>
						</Route>
						<Route path={"/tab/friends"}>
							<FriendsPage/>
						</Route>
						<Route path={"/tab/chats"}>
							<ChatsPage/>
						</Route>
						<Route path={"/tab/notification"}>
							<NotificationPage/>
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	</aside>
);

export default TabContent;
