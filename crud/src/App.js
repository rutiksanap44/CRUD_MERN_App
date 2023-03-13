import './App.css';

// importing components
import AddUser from './components/AddUser'
import Navbar from './components/NavBar';
import CodeForInterviews from './components/CodeForInterview'
import AllUsers from './components/AllUsers'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<CodeForInterviews />} />
        <Route path='all' element={<AllUsers />} />
        <Route path='add' element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
