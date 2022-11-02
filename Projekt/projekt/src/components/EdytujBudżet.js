import React from 'react';

const EdytujBudżet = (props) => {
	return (
		<>
			<span>Budżet: zł{props.Budżet}</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edytuj
			</button>
		</>
	);
};

export default EdytujBudżet;