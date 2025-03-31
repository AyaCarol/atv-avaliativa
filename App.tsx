import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Login from './components/Login';
import Form from './components/Form';
import Summary from './components/Summary';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;