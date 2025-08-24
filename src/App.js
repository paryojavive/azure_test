import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Azure Static Web App</h1>
        <p>Welcome to your React application deployed on Azure!</p>
        
        <div className="counter-section">
          <p>Counter: {count}</p>
          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button onClick={() => setCount(count - 1)}>
            Decrement
          </button>
        </div>
        
        <div className="features">
          <h2>Features</h2>
          <ul>
            <li>✅ React 18 with Hooks</li>
            <li>✅ Azure Static Web Apps</li>
            <li>✅ Modern CSS Styling</li>
            <li>✅ Responsive Design</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
