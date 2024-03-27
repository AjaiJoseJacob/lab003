import React, { createContext, useContext, useState } from 'react';

export const TransactionsContext = createContext();

export const TransactionContainer = ({ children }) => {
  const [transactionsData, setTransactionsData] = useState([
    { id: 1, name: 'Coffee Time', place: 'London, ON', amount: '$15', date: '2024-03-26' },
    { id: 2, name: 'Mac Store', place: 'Toronto, ON', amount: '$120', date: '2024-03-26' },
    { id: 3, name: 'Ulta Beauty', place: 'Vancouver, BC', amount: '$60', date: '2024-03-26' },
    { id: 4, name: 'Walmart', place: 'Calgary', amount: '$35', date: '2024-03-26' },
    { id: 6, name: 'The Olive Garden', place: 'Halifax, NS', amount: '$85', date: '2024-03-26' },
    { id: 7, name: 'Adidas', place: 'Winnipeg, MB', amount: '$160', date: '2024-03-26' },
    { id: 8, name: 'Starbucks', place: 'Edmonton, AB', amount: '$7', date: '2024-03-26' },
    { id: 9, name: 'Loblaws', place: 'Quebec City, QC', amount: '$45', date: '2024-03-26' },
    { id: 10, name: 'AMC Theatres', place: 'Victoria, BC', amount: '$25', date: '2024-03-26' }
    // Add more transactions as needed
  ]);

  return (
    <TransactionsContext.Provider value={{ transactionsData, setTransactionsData }}>
      {children}
    </TransactionsContext.Provider>
  );
};
