import React, {FC} from 'react';
import styles from './ChatTextComponent.module.scss';

interface ChatTextComponentProps {
}

const ChatTextComponent: FC<ChatTextComponentProps> = () => (
	<div className={styles.ChatTextComponent}>
		<div className={`${styles.holder} input-group align-items-stretch justify-content-between`}>
			<div className={styles.smileyHolder}>
				<button><i className="fas fa-smile"/></button>
			</div>
			<div className={styles.inputHolder}>
				<textarea className="custom-input" placeholder="Type your message..."/>
			</div>
			<div className={styles.fileAttachIcon}>
				<button><i className="fas fa-paperclip"/></button>
			</div>
			<div className={styles.sendButtonHolder}>
				<button className={`${styles.sendButton} theme-user-message`}>
					<i className="fas fa-paper-plane"/>
				</button>
			</div>
		</div>
	</div>
);

export default ChatTextComponent;
