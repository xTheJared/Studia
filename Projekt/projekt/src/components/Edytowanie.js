import React, { useState } from 'react';

const Edytowanie = (props) => {
	const [value, setValue] = useState(props.Budżet);
	return (
		<>
			<input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handleSaveClick(value)}
			>
				Zapisz
			</button>
		</>
	);
};

export default Edytowanie;