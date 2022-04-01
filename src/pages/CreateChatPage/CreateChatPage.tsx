import React, {FC, useState} from "react";
import styles from "./CreateChatPage.module.scss";
import {animated, useSpring} from "react-spring";
import SearchInputComponent from "../../components/common/SearchInputComponent/SearchInputComponent";
import FriendsListComponent from "./FriendsListComponent/FriendsListComponent";

interface CreateChatPageProps {
}

const CreateChatPage: FC<CreateChatPageProps> = () => {
	const props = useSpring({
		to: {opacity: 1},
		from: {opacity: 0},
	});
	const [searchQuery, setSearchQuery] = useState('');
	return <animated.div style={props} className={styles.CreateChatPage}>
		<h4 className={`theme-dark-font m-mb-8`}>Create Chat</h4>
		<div className={styles.searchInputHolder}>
			<SearchInputComponent placeHolder="Search users everywhere" searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
		</div>
		<div className={styles.friendListHolder}>
			<FriendsListComponent searchQuery={searchQuery}/>
		</div>
	</animated.div>
};

export default CreateChatPage;
