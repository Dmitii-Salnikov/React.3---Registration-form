import styles from './Input.module.css';
import { ErrorContainer } from '../errorContainer/ErrorContainer';

export const Input = ({ type, name, inputTitle, placeholder }) => {
	return (
		<InputLayout
			type={type}
			name={name}
			inputTitle={inputTitle}
			placeholder={placeholder}
		/>
	);
};

const InputLayout = ({ type, name, inputTitle, placeholder, onChange }) => {
	return (
		<label className={styles.label}>
			<h2 className={styles.inputTitle}>{inputTitle}</h2>
			<input
				className={styles.input}
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
			/>
			<ErrorContainer />
		</label>
	);
};
