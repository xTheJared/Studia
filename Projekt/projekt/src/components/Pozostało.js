import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Pozostało = () => {
    const {Wydatki, Budżet} = useContext(AppContext);

    const totalExpenses = Wydatki.reduce((total, item) =>{
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > Budżet ? 'alert-danger' : 'alert-success';
    
    return (
        <div className={`alert ${alertType}`}>
            <span>Pozostało: {Budżet - totalExpenses}zł</span>
        </div>
    );
};

export default Pozostało;