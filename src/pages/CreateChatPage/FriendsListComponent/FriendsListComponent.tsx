import React, {FC, useEffect, useState} from 'react';
import styles from './FriendsListComponent.module.scss';
import friendsMockData from '../../../data/mockFriendsData.json';
import {Utils} from "../../../utils/Utils";
import CheckboxComponent from "../../../components/common/CheckboxComponent/CheckboxComponent";


interface FriendsListComponentProps {
	searchQuery: string;
}

const FriendsListComponent: FC<FriendsListComponentProps> = (props) => {
	const [arrangedFriends, setArrangedFriends] = useState(Utils.arrangeFriends(friendsMockData));

	useEffect(() => {
		setArrangedFriends(Utils.arrangeFriends(friendsMockData
			.filter(friend => friend.first_name.toLowerCase().includes(props.searchQuery.toLowerCase()))));
	}, [props.searchQuery]);

	return <div className={styles.FriendsListComponent}>
		{
			Object.keys(arrangedFriends).map(charKey => <div key={charKey}>
				<div className="small my-3 theme-primary-font-color">{charKey}</div>
				{arrangedFriends[charKey].map(friend => <div key={friend.email} className="card border-0 mt-3">
					<div className="card-body">
						<div className="row align-items-center">
							<div className="col-auto">
								<div className={styles.avatar}/>
							</div>
							<div className="col g-0">
								<div className="name theme-dark-font">{friend.first_name} {friend.last_name}</div>
								<div className="email theme-light-font">{friend.email}</div>
							</div>
							<div className="col-auto">
								<CheckboxComponent/>
							</div>
						</div>
					</div>
				</div>)}
			</div>)
		}
	</div>
};

export default FriendsListComponent;
