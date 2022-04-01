import _load from "lodash";
import {IConversation} from "../components/Layout/MessageContent/ConversationContainer/ConversationContainer";

export const Utils = {
	arrangeFriends: (friends: any[]) => {
		const _friends = friends
			.sort((charA, charB) => {
				if (charA.first_name[0] > charB.first_name[0]) return 1;
				if (charA.first_name[0] < charB.first_name[0]) return -1;
				return 0;
			}).map(friend => ({
				...friend,
				char: friend.first_name[0]
			}));
		return _load.groupBy(_friends, 'char');
	},

	arrangeConversation: (conversation: IConversation[]): Array<IConversation> => {
		// sort according to date
		const finalArray: Array<IConversation> = [];
		const sortedAndMapped = conversation.map(conversation => ({
			...conversation,
			toMapDate: conversation.time ? new Date(conversation.time).toDateString() : ''
		}));
		const groupedByDate = _load.groupBy(sortedAndMapped, 'toMapDate');
		const sortedKeys = Object.keys(groupedByDate).sort((timeKeyA, timeKeyB) => {
			const timeA = new Date(timeKeyA).getTime();
			const timeB = new Date(timeKeyB).getTime();
			if (timeA < timeB) return -1;
			if (timeA > timeB) return 1;
			return 0;
		});
		sortedKeys.forEach((key, index) => {
			finalArray.push({
				id: index*101010,
				stringToShow: key
			});
			groupedByDate[key].forEach((val: IConversation) => {
				finalArray.push(val)
			});
		});
		return finalArray;
	}
}
