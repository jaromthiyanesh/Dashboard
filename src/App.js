import './App.css';
import Crud from './components/Crud';
import Frontbar from './components/Frontbar';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
     <Navbar/>
     <Frontbar/>
     <Crud/>
     <Hero/>
     
    </div>
  );
}

export default App;
