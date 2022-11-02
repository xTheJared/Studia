import React, {useContext, useState} from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from 'uuid';

const DodajWydatekOkno = () => {
    const { dispatch } = useContext(AppContext);
    const [name, setName]= useState('');
    const [cost, setCost]= useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const Wydatki = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: Wydatki,
        })
    };
    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name'>Nazwa</label>
                    <input
                    required='required'
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>
                <div className='cls-sm'>
                    <label for='cost'>Koszt</label>
                    <input
                     required='required'
                     type='text'
                     className='form-control'
                     id='cost'
                     value={cost}
                     onChange={(event) => setCost(event.target.value)}
                     ></input>
                </div>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary'>
                        Zapisz
                    </button>
                </div>
            </div>
        </form>
    );
};

export default DodajWydatekOkno;    