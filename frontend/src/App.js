import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App ">
      <Header />
      <Container>
        <main>
          <h2>Welcom to store</h2>
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
