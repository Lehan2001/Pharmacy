import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './add.css';
import './App.css';
import Emp from './Emp';
import CreateEmp from './CreateEmp';
import UpdateEmp from './UpdateEmp';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Emp />} />
          <Route path='/create' element={<CreateEmp />} />
          <Route path='/update/:id' element={<UpdateEmp />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;