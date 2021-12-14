import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreens'
import ProductScreen from './screens/ProductScreen';

import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App light">
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} exact />
        <Route path='/product/:id' element={<ProductScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
