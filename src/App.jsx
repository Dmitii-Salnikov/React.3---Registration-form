import styles from './App.module.css';
import { Form } from './components/form/Form';

export const App = () => {
	return <AppLayout />;
};

const AppLayout = () => {
	return (
		<>
			<div className={styles.container}>
				<Form />
			</div>
		</>
	);
};
