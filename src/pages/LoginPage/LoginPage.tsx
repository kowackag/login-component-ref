import { RefObject, useRef, useState } from "react";
import { LoginPageTemplate } from "@/components/templates/LoginPageTemplate/LoginPageTemplate";
import { loginSchema } from "./loginSchema";
import { FormRef } from "@/components/organisms/LoginForm/LoginForm";

export interface InputRef {
	getValue: () => string | undefined;
	reset: () => void;
}

export type LoginFormType = {
	onSubmit: React.FormEventHandler;
	errors?: {
		email: string;
		password: string;
		toSave: string;
	};
	formReference: RefObject<FormRef>;
};

function LoginPage() {
	const noErrorsState = {
		email: "",
		password: "",
		toSave: "",
	};
	const [errors, setErrors] = useState(noErrorsState);
	const loginFormReference = useRef<FormRef>(null);
	const onSubmit = () => {
		setErrors(noErrorsState);
		const formData = loginFormReference.current?.getFormData();

		console.log(formData);

		const result = loginSchema.safeParse(formData);

		if (!result.success) {
			return result.error.issues.map(({ path, message }) => {
				setErrors((prev) => ({
					...prev,
					[path[0]]: message,
				}));
			});
		}

		console.log(result);
		loginFormReference.current?.resetForm();
		setErrors(noErrorsState);
	};

	return (
		<LoginPageTemplate onSubmit={onSubmit} formReference={loginFormReference} errors={errors} />
	);
}

export default LoginPage;
