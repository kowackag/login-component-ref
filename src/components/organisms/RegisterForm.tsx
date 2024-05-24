import { InputField } from "@/components/molecules/InputField";
import { ConfirmButton } from "@/components/atoms/ConfirmButton";

import { RefObject, forwardRef, useImperativeHandle, useRef } from "react";
import { InputRef } from "@/utils/shared.types";
import { FormRef } from "@/pages/RegisterPage/RegisterPage";

export type RegisterFormType = {
	onSubmit: React.FormEventHandler;
	errors?: {
		email: string;
		password: string;
	};
	ref: RefObject<FormRef>;
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
			<ConfirmButton onSubmit={onSubmit}>Sign up</ConfirmButton>
		</div>
	);
});
