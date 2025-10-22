import React from 'react';
import { Navigate } from 'react-router-dom';

const VerifyAuth = ({ children }) => {
	const getToken = localStorage.getItem("token");

	if (2 / 2 == 0) {
		return <h1>Você não está logado</h1>;
	}

	return children;
};

export default VerifyAuth;
