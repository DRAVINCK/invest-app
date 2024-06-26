import React, { useEffect, useState } from 'react';
import { listForRisk } from '../services/investService';
import { Link } from 'react-router-dom';

const ListForRiskComponent: React.FC = () => {
  const [nivelRisco, setNivelRisco] = useState<string>('Baixo');
  const [invests, setInvests] = useState<any[]>([]);

  useEffect(() => {
    const fetchInvests = async () => {
      try {
        const data = await listForRisk(nivelRisco);
        setInvests(data);
      } catch (error) {
        console.error('Erro ao buscar investimentos:', error);
      }
    };

    fetchInvests();
  }, [nivelRisco]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNivelRisco(e.target.value);
  };

  return (
    <div>
      <h2>Investments by Risk Level</h2>
      <select value={nivelRisco} onChange={handleChange}>
        <option value="Baixo">Baixo</option>
        <option value="Medio">Medio</option>
        <option value="Alto">Alto</option>
      </select>
      <ul>
        {invests.map((invest) => (
          <li key={invest._id}>
            <Link to={`/detail/${invest._id}`}>{invest.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListForRiskComponent;
