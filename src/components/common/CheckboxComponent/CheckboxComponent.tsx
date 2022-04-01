import React, {FC} from 'react';
import "./CheckboxComponent.scss";

interface CheckboxComponentProps {
}

const CheckboxComponent: FC<CheckboxComponentProps> = () => {
	return <label className="CheckboxComponent custom-checkbox">
		<input type="checkbox"/>
		<i className="fa_cus fas fa-check-square"/>
		<i className="fa_cus far fa-square"/>
	</label>
};

export default CheckboxComponent;
