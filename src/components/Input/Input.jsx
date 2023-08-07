import React from 'react';
import cl from './Input.module.css';

const Input = ({
	type,
	label,
	value,
	onChange,
	placeholder,
	customStyle,
	name,
	id,
}) => {
	return (
		<div style={customStyle} className={cl.inputWrapper}>
			<label htmlFor={id}>{label}</label>
			{type === 'textarea' ? (
				<textarea
					name={name}
					value={value}
					id={id}
					onChange={onChange}
					placeholder={placeholder}
				/>
			) : (
				<input
					name={name}
					className={cl.customInput}
					id={id}
					placeholder={placeholder}
					type={type}
					value={value}
					onChange={onChange}
				/>
			)}
		</div>
	);
};

export default Input;
