import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getInvestById, deleteInvest, calculateResult } from '../services/investService';

const InvestDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [invest, setInvest] = useState<any>(null);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const fetchInvest = async () => {
      try {
        const data = await getInvestById(id!);
        setInvest(data);
      } catch (error) {
        console.error('Erro ao buscar investimento:', error);
      }
    };

    fetchInvest();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteInvest(id!);
      navigate('/list');
    } catch (error) {
      console.error('Erro ao deletar investimento:', error);
    }
  };

  const handleCalculate = async () => {
    try {
      const data = await calculateResult(id!);
      setResult(data);
    } catch (error) {
      console.error('Erro ao calcular resultado:', error);
    }
  };

  if (!invest) return <div>Loading...</div>;

  return (
    <div>
      <h2>{invest.nome}</h2>
      <p>Idade: {invest.idade}</p>
      <p>Valor do Investimento: {invest.valorInvestimento}</p>
      <p>Tempo de Investimento: {invest.tempoDeInvestimento}</p>
      <p>Risco: {invest.risco}</p>
      
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleCalculate}>Calculate Result</button>

      {result && <p>Result: {result.resultado}</p>}
    </div>
  );
};

export default InvestDetail;
