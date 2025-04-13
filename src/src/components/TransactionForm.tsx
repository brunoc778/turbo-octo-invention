import React, { useState } from 'react';

interface TransactionFormProps {
  onSubmit: (transaction: {
    description: string;
    amount: number;
    type: 'income' | 'expense';
    category: string;
    date: string;
  }) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      description,
      amount: parseFloat(amount),
      type,
      category,
      date,
    });
    
    setDescription('');
    setAmount('');
    setType('expense');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
          required
          placeholder="Ex: Salário, Conta de luz..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Valor</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
          required
          step="0.01"
          min="0"
          placeholder="R$ 0,00"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Tipo</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as 'income' | 'expense')}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
        >
          <option value="expense">Despesa</option>
          <option value="income">Receita</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
          required
        >
          <option value="">Selecione uma categoria</option>
          <option value="alimentacao">Alimentação</option>
          <option value="transporte">Transporte</option>
          <option value="moradia">Moradia</option>
          <option value="lazer">Lazer</option>
          <option value="saude">Saúde</option>
          <option value="educacao">Educação</option>
          <option value="outros">Outros</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Adicionar Transação
      </button>
    </form>
  );
};

export default TransactionForm;
