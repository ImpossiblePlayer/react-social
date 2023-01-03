import logo from './logo.svg';
import './App.css';
import { FormInput } from '../FormInput';
import { useState } from 'react';

const App: React.FC = () => {
	const [emailInputValue, setEmailInputValue] = useState<string>();
	return (
		<div className='App'>
			<FormInput
				type='text'
				placeHolder='hello'
				onChange={setEmailInputValue}
				value={emailInputValue}
			/>
		</div>
	);
};

export { App };

