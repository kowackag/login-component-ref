import { RefObject, useRef, useState } from "react";

import { LoginPageTemplate } from "@/components/templates/LoginPageTemplate";

import { loginSchema } from "./loginSchema";

// import { FormDataType } from "@/utils/shared.types";
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
	emailInputRef: RefObject<InputRef>;
	passwordInputRef: RefObject<InputRef>;
	saveCheckboxRef: RefObject<InputRef>;
};

function LoginPage() {
	const [errors, setErrors] = useState({
		email: "",
		password: "",
		toSave: "",
	});
	const emailInputRef = useRef<InputRef>(null);
	const passwordInputRef = useRef<InputRef>(null);
	const saveCheckboxRef = useRef<InputRef>(null);

	const onSubmit = () => {
		setErrors({
			email: "",
			password: "",
			toSave: "",
		});
		const formData = {
			email: emailInputRef.current?.getValue(),
			password: passwordInputRef.current?.getValue(),
			toSave: saveCheckboxRef.current?.getValue(),
		};

		const result = loginSchema.safeParse(formData);

		if (!result.success) {
			return result.error.issues.map(({ path, message }) => {
				setErrors((prev) => ({
					...prev,
					[path[0]]: message,
				}));
			});
		}
		console.log(formData);
		emailInputRef.current?.reset();
		passwordInputRef.current?.reset();
		setErrors(() => ({
			email: "",
			password: "",
			toSave: "",
		}));
	};

	return (
		<LoginPageTemplate
			onSubmit={onSubmit}
			emailInputRef={emailInputRef}
			passwordInputRef={passwordInputRef}
			saveCheckboxRef={saveCheckboxRef}
			errors={errors}
		/>
	);
}

export default LoginPage;
