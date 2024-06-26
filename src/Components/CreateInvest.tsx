import React, { useState } from 'react';
import { createInvest } from '../services/investService';

const CreateInvest: React.FC = () => {
  const [invest, setInvest] = useState({
    nome: '',
    idade: 0,
    valorInvestimento: 0,
    tempoDeInvestimento: '3 meses',
    risco: 'Baixo',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInvest((prevInvest) => ({ ...prevInvest, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createInvest(invest);
      console.log(response);
    } catch (error) {
      console.error('Erro ao criar investimento:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input type="text" name="nome" value={invest.nome} onChange={handleChange} required />
      
      <label>Idade:</label>
      <input type="number" name="idade" value={invest.idade} onChange={handleChange} required />
      
      <label>Valor do Investimento:</label>
      <input type="number" name="valorInvestimento" value={invest.valorInvestimento} onChange={handleChange} required />
      
      <label>Tempo de Investimento:</label>
      <select name="tempoDeInvestimento" value={invest.tempoDeInvestimento} onChange={handleChange}>
        <option value="3 meses">3 meses</option>
        <option value="6 meses">6 meses</option>
        <option value="12 meses">12 meses</option>
      </select>

      <label>Risco:</label>
      <select name="risco" value={invest.risco} onChange={handleChange}>
        <option value="Baixo">Baixo</option>
        <option value="Medio">Medio</option>
        <option value="Alto">Alto</option>
      </select>

      <button type="submit">Create</button>
    </form>
  );
};

export default CreateInvest;
