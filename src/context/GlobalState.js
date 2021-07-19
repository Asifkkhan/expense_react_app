import react,{createContext,useReducer} from 'react';
import AppReducer  from './AppReducer';
const initialState ={
    transaction:[

        { id:1 , description: "income 1" , transactionamount:1000 },
        { id:2 , description: "Expense 1" , transactionamount:500 },
        { id:3 , description: "income 1" , transactionamount:15000 },
        { id:4 , description: "Expense 2" , transactionamount:2000 }
        
        

    ]



}
//create global context
export const GlobalContext=createContext(initialState);

//create a provider for global context

export const GlobalProvider=({children})=>{
    const [state]=useReducer(AppReducer,initialState)

    return(

        <GlobalContext.Provider value= { 

            {
                transactions: state.transactions
            }



        }>

          
            {children}
        </GlobalContext.Provider>
    )



}