import logo from './logo.svg';
import './App.css';
import FormPage from './component/FormPage';
import TopikSelecter from './component/TopikSelecter';

function App() {
  return (
    <div className="App">
      <h1 className='navbar'>MCQ TEST PLATFORM</h1>
      <FormPage />
      <TopikSelecter />
    </div>
  );
}

export default App;
