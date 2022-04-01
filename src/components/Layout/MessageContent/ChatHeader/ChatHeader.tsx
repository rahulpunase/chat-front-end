import React, {FC, useContext} from 'react';
import styles from './ChatHeader.module.scss';
import {CommonContext} from "../../../../contexts/CommonStateContext";
import otherPersonProfileImage from "../../../../assets/images/other-person.jpg";


interface ChatHeaderProps {
}

const ChatHeader: FC<ChatHeaderProps> = () => {
	const commonCtx = useContext(CommonContext);
	return <div className={`${styles.ChatHeader} theme-border-bottom`}>
		<div className="d-flex align-items-center w-100">
			<div className="col-2 theme-light-primary-font d-flex justify-content-center" onClick={() => commonCtx.setChatId('')}>
				<i className="fa fa-angle-left"/>
			</div>
			<div className="col-8 d-flex align-items-center">
				<div className={styles.profileHolder}>
					<div className={styles.profile}>
						<img src={otherPersonProfileImage}/>
					</div>
				</div>
				<div className={`${styles.details}`}>
					<div className={`${styles.name} theme-dark-font`}>
						Allie Chartlane
					</div>
					<div className={`${styles.tag} text-muted`}>typing...</div>
				</div>
			</div>
			<div className="col-2 theme-light-primary-font d-flex justify-content-center">
				<i className="fa fa-ellipsis-v"/>
			</div>
		</div>
	</div>
};

export default ChatHeader;
