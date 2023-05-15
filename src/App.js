import './App.css';
import { Buttonbar } from "./components/organisms/Buttonbar";
import { Header } from './components/organisms/Header';


function App() {
  return (
      <div className='App'>
        <Header />
        <Buttonbar />
      </div>
  );
}

export default App;