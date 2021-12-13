import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreens' 

function App() {
  return (
    <div className="App light">
      <Header />
      <Container>
        <main>
          <h2>Welcom to store</h2>
          <hr/>
          <HomeScreen></HomeScreen>
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
