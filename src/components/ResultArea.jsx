import React from 'react';

const ResultArea = ({ resultText }) => {
  return (
    <div className="result" id="resultArea">
      {/* Display either error message or the API response */}
      {resultText ? (
        resultText.error || JSON.stringify(resultText, null, 2)
      ) : (
        <p>No result yet</p>
      )}
    </div>
  );
};

export default ResultArea;
