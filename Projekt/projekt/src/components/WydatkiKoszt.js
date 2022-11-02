import React, { useContext } from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext";

const WydatkiKoszt = (props) => {
    const {dispatch} = useContext(AppContext);

    const handDeleteExpense = () =>{
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        <li class='list-group-item d-flex justify-content-between algin-items-center'>
            {props.name}
            <div>
                <span class='badge badge-primary badge-pill mr-3'>
                    zł{props.cost}
                </span>
                <TiDelete size='1.5em'onClick={handDeleteExpense}></TiDelete>
            </div>
        </li>
    );
};

export default WydatkiKoszt;