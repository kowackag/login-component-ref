import { forwardRef, useImperativeHandle, useRef } from "react";

import { InputField, InputRef } from "@/components/molecules/InputField/InputField";
import { Button } from "@/components/atoms/Button/Button";

export interface FormRef {
	getFormData: () => {
		email: string;
		password: string;
	};
	resetForm: () => void;
}

export type RegisterFormType = {
	onSubmit: React.FormEventHandler;
	errors?: {
		email: string;
		password: string;
	};
};

export const RegisterForm = forwardRef(({ onSubmit, errors }: RegisterFormType, ref) => {
	const emailInputRef = useRef<InputRef>(null);
	const passwordInputRef = useRef<InputRef>(null);

	useImperativeHandle(
		ref,
		() => ({
			getFormData: () => ({
				email: emailInputRef.current?.getValue(),
				password: passwordInputRef.current?.getValue(),
			}),
			resetForm: () => {
				console.log(1)
				emailInputRef.current?.reset();
				passwordInputRef.current?.reset();
			},
		}),
		[],
	);

	return (
		<div>
			<InputField name="email" label="Email" ref={emailInputRef} error={errors?.email} />
			<InputField
				name="password"
				label="Password"
				type="password"
				ref={passwordInputRef}
				error={errors?.password}
			/>
			<Button handleButton={onSubmit} text="Sign up" type="submit" />
		</div>
	);
});
