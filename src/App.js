import './App.css';
import Contactpage from './pages/contactpage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Homepage from './pages/homepage';
import Reset from './pages/reset';
import Resend from './pages/resend';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';

function App() {
  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  }  

  return (
      <HashRouter>
        <Routes>
          <Route path="/login" element={
            <Login />
          } />
          <Route path='/signup' element={
            <Signup />
          } />
          <Route path='/reset' element={
            <div><Reset /></div>
          } />
          <Route path='/resend' element={
            <div><Resend /></div>
          } />
          <Route path="/" element={
            <RequireAuth>
              <Homepage />
            </RequireAuth>
          } />
          <Route path="/contact" element={
            <RequireAuth>
              <Contactpage />
            </RequireAuth>
          } />  
        </Routes>
      </HashRouter>
  );
}

export default App;
