import React from 'react';
import './dist/css/styles.css'
import { Calculator } from './components/Calculator/index.ts';

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Calculator />
    </div>
  );
}

export default App;
