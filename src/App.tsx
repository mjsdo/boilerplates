import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        da
        <Route path="/" element={<div>Home</div>} />
        <Route path="/a" element={<div>A</div>} />
        <Route path="/b" element={<div>B</div>} />
        <Route path="/c" element={<div>C</div>} />
        <Route path="/d" element={<div>새로운 페이지!!!!!</div>} />
      </Routes>
      <Link to="/">/ 페이지aaaaa</Link>
      <Link to="/a">/a 페이지</Link>
      <Link to="/b">/b 페이지</Link>
      <Link to="/c">/c 페이지</Link>
      <Link to="/d">새 페이지</Link>
      <Link to="/e">e새 페이지</Link>
      dddddd
    </div>
  );
};

export default App;
