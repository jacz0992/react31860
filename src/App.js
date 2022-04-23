import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <><Navbar /><ItemListContainer greeting='Holaaa!!'></ItemListContainer></>
  );
}



export default App;
