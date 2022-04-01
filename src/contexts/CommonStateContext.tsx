import React, {FC, useState} from "react";

interface ICommonStateContext {
}

interface ICommonStateContextValue {
	chatId: string;
	setChatId: React.Dispatch<React.SetStateAction<string>>;
}

const value: ICommonStateContextValue = {
	chatId: '',
	setChatId: () => {
	}
}

export const CommonContext = React.createContext(value);

export const CommonContextProvider: FC<ICommonStateContext> = (props) => {
	const [chatId, setChatId] = useState<string>('');

	const value = {
		chatId: chatId,
		setChatId: setChatId
	};

	return <CommonContext.Provider value={value}>
		{props.children}
	</CommonContext.Provider>
}

