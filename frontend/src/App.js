import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container, Button } from 'react-bootstrap'


function App() {
  return (
    <div className="App ">
      <Header />
      <Container>
        <main>
          <h2>Welcom to store</h2>
          <div>
            <Button>button</Button>
          </div>
          <div>
            <button className='btn btn-success'>button</button>
          </div>
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
