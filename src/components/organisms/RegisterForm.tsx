import { InputField } from "@/components/molecules/InputField";
import { ConfirmButton } from "@/components/atoms/ConfirmButton";

import { RegisterFormType } from "@/pages/RegisterPage";

export const RegisterForm = ({
	onSubmit,
	emailInputRef,
	passwordInputRef,
	errors,
}: RegisterFormType) => {
	return (
		<div>
			<InputField
				name="email"
				label="Email"
				ref={emailInputRef}
				error={errors?.email}
			/>
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
};
