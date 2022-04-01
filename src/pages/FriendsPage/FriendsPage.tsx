import React, {FC} from 'react';
import styles from './FriendsPage.module.scss';

interface FriendsPageProps {
}

const FriendsPage: FC<FriendsPageProps> = () => {
	return <div className={styles.FriendsPage}>
		<h4 className={`theme-dark-font m-mb-8`}>Chats</h4>
	</div>
};

export default FriendsPage;
