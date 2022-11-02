import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import EdytujBudżet from './EdytujBudżet';
import Edytowanie from './Edytowanie';

const  Budżet = () => {
    const { Budżet, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
		setIsEditing(true);
    };

    const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<Edytowanie handleSaveClick={handleSaveClick} Budżet={Budżet} />
			) : (
				<EdytujBudżet handleEditClick={handleEditClick} Budżet={Budżet} />
			)}
		</div>
	);
};

export default Budżet;