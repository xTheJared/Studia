import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";

const WszystkieWydatki = () => {
        const {Wydatki} = useContext(AppContext);

        const totalExpenses = Wydatki.reduce((total, item)=>{
            return (total+=item.cost);
        }, 0);


    return (
        <div className='alert alert-primary'>
            <span>Wydano: {totalExpenses}zł</span>
        </div>
    );

};

export default WszystkieWydatki;