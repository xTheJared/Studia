import { createContext, useReducer } from 'react';


const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return{
                ...state,
                Wydatki: [...state.Wydatki, action.payload],
            }
            case 'DELETE_EXPENSE':
            return {
                ...state,
                Wydatki: state.Wydatki.filter((expense) => expense.id !==action.payload),
            };
        default:
            return state;
    }
};

const initialState = {
    Budżet: 2000,
    Wydatki: [

    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
    <AppContext.Provider
    value={{
        Budżet: state.Budżet,
        Wydatki: state.Wydatki,
        dispatch,
    }}
    >
        {props.children}
    </AppContext.Provider>)
}