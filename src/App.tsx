import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateInvest from './Components/CreateInvest';
import ListInvests from './Components/ListInvest';
import InvestDetail from './Components/InvestDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Create Invest</Link></li>
            <li><Link to="/list">List Invests</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/create" element={<CreateInvest />} />
          <Route path="/list" element={<ListInvests />} />
          <Route path="/detail/:id" element={<InvestDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
