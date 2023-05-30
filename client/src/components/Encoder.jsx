import { useState } from 'react';
import '../App.css';

const Encoder = () => {
  const [string, setString] = useState('');
  const [encoded, setEncoded] = useState('');
  const token = sessionStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/encode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ string }),
      });

      const data = await res.json();

      if (data) {
        setEncoded(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-box">
          <input
            type="text"
            value={string}
            onChange={(e) => setString(e.target.value)}
            placeholder="type in string..."
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {encoded && <h1 className="encoded-string">{encoded}</h1>}
    </>
  );
};

export default Encoder;
