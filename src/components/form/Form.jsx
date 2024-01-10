import { Input } from '../input/Input';
import { useStore } from '../../utils/useStore';
import styles from './Form.module.css';

export const Form = () => {
	const { getState, updateState } = useStore();

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData(getState());
	};

	const sendFormData = (formData) => {
		console.log(formData);
	};

	const { email, password, repeatPassword } = getState();

	const onChange = ({ target }) => updateState(target.name, target.value);

	return (
		<FormLayout
			onSubmit={onSubmit}
			sendFormData={sendFormData}
			email={email}
			repeatPassword={repeatPassword}
			password={password}
			updateState={updateState}
			getState={getState}
			onChange={onChange}
		/>
	);
};

const FormLayout = ({ onSubmit, email, password, repeatPassword }) => {
	return (
		<>
			<form onSubmit={onSubmit} className={styles.form}>
				<Input
					inputTitle="Email"
					type="email"
					name="email"
					placeholder="Введите Вашу почту"
					value={email}
				/>
				<Input
					inputTitle="Пароль"
					type="password"
					name="password"
					placeholder="Введите Ваш пароль"
					value={password}
				/>
				<Input
					inputTitle="Повторите пароль"
					placeholder="Повторите пароль"
					type="password"
					name="repeatPassword"
					value={repeatPassword}
				/>
				<button type="submit" className={styles.submitButton}>
					Зарегистрироваться
				</button>
			</form>
		</>
	);
};
