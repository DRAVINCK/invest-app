import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateInvest from './Components/CreateInvest';
import ListInvests from './Components/ListInvest';
import InvestDetail from './Components/InvestDetail';
import ListMoreMonthsComponent from './Components/ListMoreMonthsComponent';
import ListForAgeComponent from './Components/ListForAgeComponent';
import ListForRiskComponent from './Components/ListForRiskComponent';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Create Invest</Link></li>
            <li><Link to="/list">List Invests</Link></li>
            <li><Link to="/listmoremonths">Investments with 12 Months</Link></li>
            <li><Link to="/listforage">Investments for Age +40</Link></li>
            <li><Link to="/listforrisk">Investments by Risk Level</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/create" element={<CreateInvest />} />
          <Route path="/list" element={<ListInvests />} />
          <Route path="/detail/:id" element={<InvestDetail />} />
          <Route path="/listmoremonths" element={<ListMoreMonthsComponent />} />
          <Route path="/listforage" element={<ListForAgeComponent />} />
          <Route path="/listforrisk" element={<ListForRiskComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
