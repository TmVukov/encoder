import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormError from './FormError';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const { token } = await res.json();

        navigate('/encoder');
        sessionStorage.setItem('token', token);
      } else {
        const { error } = await res.json();
        throw new Error(error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="form" noValidate>
      <div className="input-box">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        {error && <FormError value={email} regex={/^\S+@\S+$/i} type="email" />}
      </div>
      <div className="input-box">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        {error && (
          <FormError
            value={password}
            regex={/^(?=.*\d).{6,}$/}
            type="password"
          />
        )}
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default Login;
