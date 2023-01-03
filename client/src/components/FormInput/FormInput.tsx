import styles from './FormInput.module.scss';

const FormInput = (props: TypedFormInput) => {
	const { type = 'text', value = '' } = props;
	return <input className={styles.AuthFormInput} type={type} value={value} />;
};

type TypedFormInput = {
	onChange: Function;
	type?: string;
	value?: string;
	placeHolder?: string;
};

export { FormInput };
