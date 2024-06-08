import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormComponent from './Components/FormComponent';
import SuccessComponent from './Components/SuccessComponent';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FormComponent />} />
      <Route path="/success" element={<SuccessComponent />} />
    </Routes>
  );
};

export default App;
