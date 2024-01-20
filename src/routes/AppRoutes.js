import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Project from '../pages/Project';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/project' element={<Project />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
