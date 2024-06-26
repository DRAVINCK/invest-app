import React, { useEffect, useState } from 'react';
import { listInvests } from '../services/investService';
import { Link } from 'react-router-dom';

const ListInvests: React.FC = () => {
  const [invests, setInvests] = useState<any[]>([]);

  useEffect(() => {
    const fetchInvests = async () => {
      try {
        const data = await listInvests();
        setInvests(data);
      } catch (error) {
        console.error('Erro ao buscar investimentos:', error);
      }
    };

    fetchInvests();
  }, []);

  return (
    <div>
      <h2>List of Investments</h2>
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

export default ListInvests;
