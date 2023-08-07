import React from 'react';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cl from './Button.module.css';

const Button = ({ onClick, text, needIcon, customStyle }) => {
	return (
		<button
			style={customStyle}
			className={cl.buttonCustom}
			onClick={onClick}
		>
			{text}
			{needIcon ? (
				<span className={cl.buttonIcon}>
					<FontAwesomeIcon icon={faLongArrowRight} />
				</span>
			) : (
				<></>
			)}
		</button>
	);
};

export default Button;
