import React from 'react';
export const TransactionHistory = () => {
    return(
       <div>
           <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus">
                    Project 1 Income
                    <span>PKR 1000</span>
                    <button className="delete-btn">X</button>

                </li>
                <li className="minus">
                    Project 1 Salaries 
                    <span> PKR 2000</span>
                    <button className="delete-btn">X</button>

                </li>


            </ul>



        </div>
       

        





    )



}
