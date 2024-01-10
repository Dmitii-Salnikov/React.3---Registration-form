import styles from './ErrorContainer.module.css';

export const ErrorContainer = () => {
	return <ErrorLayout />;
};

const ErrorLayout = () => {
	return (
		<>
			<p className={styles.errorContainer}>текст</p>
		</>
	);
};
