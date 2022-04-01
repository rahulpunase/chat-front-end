import React, {FC, useState, useContext} from 'react';
import styles from './ChatsListComponent.module.scss';
import mockChats from "../../../data/mockChatData.json";
import {NavLink} from "react-router-dom";
import {CommonContext} from "../../../contexts/CommonStateContext";

interface ChatsListComponentProps {
}

const ChatsListComponent: FC<ChatsListComponentProps> = () => {
	const [chats, setChats] = useState<Array<{ id: number, firstName: string, lastName: string, recentMessage: string }>>(mockChats);
	const commonCtx = useContext(CommonContext);

	const setChatToActive = (id: number) => {
		commonCtx.setChatId(String(id));
	}
	return <div className={styles.ChatsListComponent}>
		{chats.map(chat => <div key={chat.id} className={`${styles.cardItem} card border-0 mt-3`} onClick={() => setChatToActive(chat.id)}>
				<div className="card-body">
					<div className="row align-items-start">
						<div className="col-auto">
							<div className={styles.avatar}/>
						</div>
						<div className="col g-0">
							<div className="row g-0">
								<div className="col-9 theme-dark-font">{chat.firstName} {chat.lastName}</div>
								<div className="col-3 text-end"><small
									className="time-small text-muted">08:34 AM</small></div>
							</div>
							<div className="theme-light-font">{chat.recentMessage}</div>
						</div>
					</div>
				</div>
		</div>)}
	</div>
};

export default ChatsListComponent;
