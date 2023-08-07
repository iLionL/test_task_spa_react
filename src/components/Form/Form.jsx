import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import cl from './Form.module.css';

const FormComponent = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	return (
		<form className={cl.formWrapper}>
			<div className={cl.info}>
				<Input
					type="text"
					label="Name"
					name="name"
					id="name"
					placeholder="Alex Smit"
					value={name}
					customStyle={{ marginRight: '12px', marginBottom: '1rem' }}
					onChange={handleNameChange}
				/>
				<p></p>
				<Input
					type="email"
					label="Email"
					name="email"
					id="email"
					placeholder="Alex@mail.com"
					value={email}
					onChange={handleEmailChange}
				/>
			</div>
			<div className={cl.contactMe}>
				<Input
					type="textarea"
					label="Message"
					name="message"
					id="message"
					placeholder="Hi there..."
					value={message}
					onChange={handleMessageChange}
				/>
			</div>

			<Button text="SEND" needIcon />
		</form>
	);
};

export default FormComponent;
