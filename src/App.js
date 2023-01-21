
import './App.css';
import Footer from './components/Footer';
import Routers from './routers/Router'
import './styles/HomePage.css'

function App() {
  return (
    <div className="App-Container">
      <Routers></Routers>
      <Footer></Footer>
    </div>
  );
}

export default App;
