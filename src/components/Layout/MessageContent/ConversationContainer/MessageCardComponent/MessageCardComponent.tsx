import React, {FC} from 'react';
import styles from './MessageCardComponent.module.scss';
import loggedInPerson from "../../../../../assets/images/logged-in-person.jpg";
import otherPersonProfileImage from "../../../../../assets/images/other-person.jpg";
import {IConversation} from "../ConversationContainer";

interface MessageCardComponentProps {
	conversation: IConversation
}

const MessageCardComponent: FC<MessageCardComponentProps> = ({conversation}) => {
	return <>
				{conversation.fromLoggedInUser && <div className={`${styles.MessageCardComponent} ${styles.userMessage}`}>
					<div className={`${styles.same}`}>
						<div className={styles.optionHolder}>
							<i className="fa fa-ellipsis-v theme-light-primary-font"/>
						</div>
						<div className={styles.messageDetailsHolder}>
							<div
								className={`${styles.messageContent} theme-user-message`}>{conversation.message}</div>
							<div><small className="text-muted time-small">{conversation.time}</small></div>
						</div>
						<div className={styles.profileHolder}>
							<div className={styles.profile}>
								<img src={loggedInPerson}/>
							</div>
						</div>
					</div>
				</div>
				}
				{!conversation.fromLoggedInUser && <div className={`${styles.MessageCardComponent} ${styles.otherUserMessage}`}>
					<div className={`${styles.same}`}>
						<div className={styles.profileHolder}>
							<div className={styles.profile}>
								<img src={otherPersonProfileImage}/>
							</div>
						</div>
						<div className={styles.messageDetailsHolder}>
							<div
								className={`${styles.messageContent} theme-other-user-message`}>{conversation.message}</div>
							<div><small className="text-muted time-small">{conversation.time}</small></div>
						</div>
						<div className={styles.optionHolder}>
							<i className="fa fa-ellipsis-v theme-light-primary-font"/>
						</div>
					</div>
				</div>}
			</>
};

export default MessageCardComponent;
