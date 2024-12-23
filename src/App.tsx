import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import AmazonCart from './components/AmazonCart';
import CartList from './components/CartList';
import './components/styles/App.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AmazonCart />} />
          <Route path="/cart-list" element={<CartList />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
