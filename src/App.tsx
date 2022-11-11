import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/a" element={<div>A</div>} />
        <Route path="/b" element={<div>B</div>} />
        <Route path="/c" element={<div>C</div>} />
      </Routes>
      <Link to="/">/ 페이지</Link>
      <Link to="/a">/a 페이지</Link>
      <Link to="/b">/b 페이지</Link>
      <Link to="/c">/c 페이지</Link>
    </div>
  );
};

export default App;
