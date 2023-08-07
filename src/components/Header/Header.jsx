import React, { useState } from 'react';
import logoImg from '../../assets/icons/logo-white.svg';

import cl from './Header.module.css';

const Header = () => {
	const [showNav, setShowNav] = useState(false);

	const toggleNav = () => {
		setShowNav(!showNav);
	};

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const hideNav = () => {
		setShowNav(false);
	};

	return (
		<header className={cl.header}>
			<div className={cl.logoWrapper}>
				<img className={cl.logo} src={logoImg} alt="Logo" />
			</div>
			<nav className={`${cl.nav} ${showNav ? cl.show : ''}`}>
				<div className={cl.hamburgerMenu} onClick={toggleNav}>
					<div className={cl.hamburgerLine}></div>
					<div className={cl.hamburgerLine}></div>
					<div className={cl.hamburgerLine}></div>
				</div>
				<div
					className={`${cl.navLinks} ${showNav ? cl.show : ''}`}
					onMouseLeave={hideNav}
				>
					<a
						href="#introduction"
						onClick={() => scrollToSection('introduction')}
					>
						Introduction
					</a>
					<a href="#works" onClick={() => scrollToSection('works')}>
						Work
					</a>
					<a
						href="#connect"
						onClick={() => scrollToSection('connect')}
					>
						Connect
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;
