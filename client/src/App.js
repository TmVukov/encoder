import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Encoder from './components/Encoder';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/encoder"
          element={
            <PrivateRoute>
              <Encoder />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
