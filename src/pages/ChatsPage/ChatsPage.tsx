import React, {FC, useState} from 'react';
import styles from './ChatsPage.module.scss';
import SearchInputComponent from "../../components/common/SearchInputComponent/SearchInputComponent";
import ChatsListComponent from "./ChatsListComponent/ChatsListComponent";

interface ChatsPageProps {
}

const ChatsPage: FC<ChatsPageProps> = () => {
	const [searchQuery, setSearchQuery] = useState('');
	return <div className={styles.ChatsPage}>
		<h4 className={`theme-dark-font m-mb-8`}>Chats</h4>
		<div className={styles.searchInputHolder}>
			<SearchInputComponent placeHolder="Search messages and chats" searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
		</div>
		<div className={styles.chatListHolder}>
			<ChatsListComponent/>
		</div>
	</div>
};

export default ChatsPage;
