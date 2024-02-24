import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';;


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to = "/login"/>}/>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;