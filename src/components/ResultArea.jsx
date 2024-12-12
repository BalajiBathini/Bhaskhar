// ResultArea.jsx
import React from 'react';

const ResultArea = ({ resultText }) => {
  return (
    <div className="result" id="resultArea">
      {resultText}
    </div>
  );
};

export default ResultArea;