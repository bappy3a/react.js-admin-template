import './App.css';
import Header from './Components/common/Header';
import Sidebar from './Components/common/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div class="container-fluid page-body-wrapper">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
