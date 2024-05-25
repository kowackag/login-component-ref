import { forwardRef, useImperativeHandle, useRef } from "react";

import { InputField, InputRef } from "@/components/molecules/InputField";
import { Checkbox } from "@/components/molecules/Checkbox";
import { Button } from "@/components/atoms/Button";

// emailInputRef: RefObject<InputRef>;
// passwordInputRef: RefObject<InputRef>;
// saveCheckboxRef: RefObject<InputRef>;
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
