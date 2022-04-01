import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from './SearchInputComponent.module.scss';

interface SearchInputComponentProps {
	searchQuery: string;
	setSearchQuery: Dispatch<SetStateAction<string>>;
	placeHolder: string;
}

const SearchInputComponent: FC<SearchInputComponentProps> = (props) => {

	return <div className="input-group">
		<div className="input-group-text">
			<i className="fa fa-search"/>
		</div>
		<input type="text" className="custom-input" value={props.searchQuery}
			onChange={(event) => props.setSearchQuery(event.target.value)}
			placeholder={props.placeHolder}/>
	</div>
};

export default SearchInputComponent;
