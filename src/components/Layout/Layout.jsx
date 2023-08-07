import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children, data }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer information={data} />
		</>
	);
};

export default Layout;
