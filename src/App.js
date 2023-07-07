import React from 'react';
import Nav from './component/nav/Nav';
import Header from './component/header/Header';
import Cnav from './control/controlNav/Cnav';
import CHeader from './control/cHeader/CHeader';
import Table from './control/table/Table';
import './App.css';

const App = () => (
  <div>
   <Nav/>
   <Header/>
    <Cnav/>
   <CHeader/>
   <Table/>
   
  </div>
);

export default App;
