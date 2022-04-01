import React, {FC, useContext} from 'react';
import styles from './MessageContent.module.scss';
import {useWindowSize} from "../../../hooks/useWindowSize";
import ChatHeader from "./ChatHeader/ChatHeader";
import {CommonContext} from "../../../contexts/CommonStateContext";
import ConversationContainer from "./ConversationContainer/ConversationContainer";
import ChatTextComponent from "./ChatTextComponent/ChatTextComponent";

interface MessageContentProps {
}


const MessageContent: FC<MessageContentProps> = () => {
	const [currentWidth, currentHeight] = useWindowSize();

	const commonCtx = useContext(CommonContext);

	return <div className={`${styles.MessageContent} h-100 justify-content-center`}>
			<div className={`${styles.messageContainer} ${commonCtx.chatId ? styles.showContainer : ''} h-100 container`}>
				<ChatHeader/>
				<ConversationContainer/>
				<ChatTextComponent/>
			</div>
		</div>
};

export default MessageContent;
