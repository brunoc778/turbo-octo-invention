import React, { useState } from 'react';
import './App.css';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: string;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState(0);

  const handleAddTransaction = (newTransaction: Omit<Transaction, 'id'>) => {
    const transaction = {
      ...newTransaction,
      id: Date.now(),
    };
    setTransactions([transaction, ...transactions]);
    setBalance(prevBalance => 
      transaction.type === 'income' 
        ? prevBalance + transaction.amount 
        : prevBalance - transaction.amount
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-600 p-6 text-white shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Corun Finance</h1>
          <p className="text-red-100">Seu controle financeiro seguro</p>
        </div>
      </header>
      
      <main className="container mx-auto p-6">
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Saldo Atual</h2>
          <p className={`text-4xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            R$ {balance.toFixed(2)}
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
