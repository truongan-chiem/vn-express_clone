import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Catelogy from '../pages/catelogy/Catelogy';
import Detail from '../pages/detail/Detail';

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/detail" element={<Detail />} />
            <Route exact path="/:catalogy" element={<Catelogy />} />
        </Routes>
    );
};

export default Router;
