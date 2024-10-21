import './App.css';
import Table from './components/table';
import RowState from './context/selectedrow/RowState';
import ComplaintState from './context/complaint/ComplaintState';



function App() {
  return (
    <div className="App">
      <RowState>
        <ComplaintState>
          <Table />
        </ComplaintState>
      </RowState>
    </div>
  );
}

export default App;
