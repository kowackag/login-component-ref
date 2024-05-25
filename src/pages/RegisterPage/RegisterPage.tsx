import { RefObject, useRef, useState } from "react";
import { RegisterPageTemplate } from "@/components/templates/RegisterPageTemplate";
import { registerShema } from "./registerSchema";
import { FormRef } from "@/components/organisms/RegisterForm";

export type RegisterFieldsTypes = {
	email: string;
	password: string;
};
export type RegisterFormType = {
	onSubmit: React.FormEventHandler;
	errors?: {
		email: string;
		password: string;
	};
	formReference: RefObject<FormRef>;
};

function RegisterPage() {
	const noErrorsState = {
		email: "",
		password: "",
	};
	const [errors, setErrors] = useState(noErrorsState);
	const registerFormReference = useRef<FormRef>(null);
	const onSubmit = () => {
		setErrors(noErrorsState);
		const formData = registerFormReference.current?.getFormData();
		console.log(formData);

		const result = registerShema.safeParse(formData);

		if (!result.success) {
			return result.error.issues.map(({ path, message }) => {
				setErrors((prev) => ({
					...prev,
					[path[0]]: message,
				}));
			});
		}
		console.log(result);
		registerFormReference.current?.resetForm();
		setErrors(noErrorsState);
	};

	return (
		<RegisterPageTemplate
			onSubmit={onSubmit}
			formReference={registerFormReference}
			errors={errors}
		/>
	);
}

export default RegisterPage;
