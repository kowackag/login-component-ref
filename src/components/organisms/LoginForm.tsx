import { InputField } from "@/components/molecules/InputField";
import { Checkbox } from "@/components/molecules/Checkbox";

import { LoginFormType } from "@/pages/LoginPage/LoginPage";
import { Button } from "../atoms/Button";

export const LoginForm = ({
	onSubmit,
	errors,
	emailInputRef,
	passwordInputRef,
	saveCheckboxRef,
}: LoginFormType) => {
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
			<Checkbox
				name="toSave"
				label="Remember me?"
				ref={saveCheckboxRef}
			/>
			<Button handleButton={onSubmit} text="Login" type="submit"/>
		</div>
	);
};
