import { forwardRef, useImperativeHandle, useRef } from "react";

import { InputField, InputRef } from "@/components/molecules/InputField/InputField";
import { Checkbox } from "@/components/molecules/Checkbox/Checkbox";
import { Button } from "@/components/atoms/Button/Button";

export type LoginFormType = {
	onSubmit: React.FormEventHandler;
	errors?: {
		email: string;
		password: string;
		toSave: string;
	};
};

export interface FormRef {
	getFormData: () => {
		email: string;
		password: string;
		toSave: boolean;
	};
	resetForm: () => void;
}

export const LoginForm = forwardRef(({ onSubmit, errors }: LoginFormType, ref) => {
	const emailInputRef = useRef<InputRef>(null);
	const passwordInputRef = useRef<InputRef>(null);
	const saveCheckboxRef = useRef<InputRef>(null);

	useImperativeHandle(
		ref,
		() => ({
			getFormData: () => ({
				email: emailInputRef.current?.getValue(),
				password: passwordInputRef.current?.getValue(),
				toSavae: saveCheckboxRef.current?.getValue(),
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
			<Checkbox name="toSave" label="Remember me?" ref={saveCheckboxRef} />
			<Button handleButton={onSubmit} text="Login" type="submit" />
		</div>
	);
});
