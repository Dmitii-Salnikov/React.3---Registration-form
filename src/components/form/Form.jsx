import { Input } from '../input/Input';
import styles from './Form.module.css';

export const Form = () => {
	return <FormLayout />;
};

const FormLayout = () => {
	return (
		<form className={styles.form}>
			<Input
				type="email"
				name="email"
				placeholder="Введите Вашу почту"
				title="Email"
			/>
			<Input
				type="password"
				name="password"
				placeholder="Введите Ваш пароль"
				title="Пароль"
			/>
			<Input
				type="password"
				name="password"
				placeholder="Повторите пароль"
				title="Повторите пароль"
			/>
			<button type="submit" className={styles.submitButton}>
				Зарегистрироваться
			</button>
		</form>
	);
};
