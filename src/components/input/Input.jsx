import styles from './Input.module.css';

export const Input = ({ type, name, placeholder, title }) => {
	return (
		<InputLayout type={type} name={name} placeholder={placeholder} title={title} />
	);
};

const InputLayout = ({ type, name, placeholder, title }) => {
	return (
		<>
			<label className={styles.label} htmlFor={name}>
				<h2 className={styles.title}>{title}</h2>
				<input
					type={type}
					name={name}
					placeholder={placeholder}
					className={styles.input}
				/>
				<div className={styles.errorContainer}>
					<p className={styles.error}>допустимо не более 20 символов</p>
				</div>
			</label>
		</>
	);
};
