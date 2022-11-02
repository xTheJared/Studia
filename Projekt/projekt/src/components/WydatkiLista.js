import React, {useContext} from "react";
import WydatkiKoszt from "./WydatkiKoszt";
import { AppContext } from "../context/AppContext";

const WydatkiLista = () => {
    const {Wydatki} = useContext(AppContext);
     return (
        <ul className='list-group'>
            {Wydatki.map((Wydatki) => (
                <WydatkiKoszt
                id={Wydatki.id}
                name={Wydatki.name}
                cost={Wydatki.cost} />

            ))}
        </ul>
    );
};

export default WydatkiLista;