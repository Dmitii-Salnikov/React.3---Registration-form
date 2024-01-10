import styles from './App.module.css';
import { Form } from './components/form/Form';

export const App = () => {
	return <AppLayout />;
};

const AppLayout = () => {
	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.title}>Форма регистрации</h1>
				<Form />
			</div>
		</>
	);
};
