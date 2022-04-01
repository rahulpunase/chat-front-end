import React, {FC, useState} from 'react';
import styles from './ConversationContainer.module.scss';
import mockTextData from '../../../../data/mockConversationData.json';
import {Utils} from "../../../../utils/Utils";
import MessageCardComponent from "./MessageCardComponent/MessageCardComponent";

interface ConversationContainerProps {
}

export interface IConversation {
	id: number;
	stringToShow?: string;
	message?: string;
	time?: string;
	fromLoggedInUser?: boolean;
	firstName?: string;
	lastName?: string;
}

const ConversationContainer: FC<ConversationContainerProps> = () => {
	const [conversationData, setConversationData] = useState<Array<IConversation>>(Utils.arrangeConversation(mockTextData));
	return <div className={styles.ConversationContainer}>
		{conversationData.map((conversation: IConversation) => <div key={conversation.id}
		                                                            className={styles.messageContainer}>
			{conversation.stringToShow ?
				<div className={styles.timeString}>
					<small className="text-muted">{conversation.stringToShow}</small>
				</div> : <MessageCardComponent conversation={conversation}/>
			}
		</div>)}
	</div>
};

export default ConversationContainer;
