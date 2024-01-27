import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import Project from '../pages/Project/Project';
import NotFound from '../pages/NotFound/NotFound';
import BBSeguros from '../pages/Projects/BBSeguros/BBSeguros';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/project' element={<Project />} />
			<Route path='/bbseguros' element={<BBSeguros />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
