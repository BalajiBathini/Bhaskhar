import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [queryInput, setQueryInput] = useState('');
  const [resultText, setResultText] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/generate-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: queryInput }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setResultText(data.response || 'No response from API');
    } catch (error) {
      console.error('Error:', error);
      setResultText('Error fetching response');
    }
  };

  return (
    <div className="container">
      <h1>Ask Bhaskhar</h1>
      <input
        type="text"
        value={queryInput}
        onChange={(e) => setQueryInput(e.target.value)}
        placeholder="Enter your question"
      />
      <button onClick={handleSubmit}>Ask</button>
      <div className="result">
        {resultText && <p>{resultText}</p>}
      </div>
    </div>
  );
};

export default App;
