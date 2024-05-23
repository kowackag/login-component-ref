import { Link } from "react-router-dom";

import { LoginForm } from "@/components/organisms/LoginForm";
import { SocialIconBox } from "@/components/molecules/SocialIconBox";
import { LineDivider } from "@/components/molecules/LineDivider";
import { Title } from "@/components/atoms/Title";
import { AuthWrapper } from "@/components/atoms/AuthWrapper";
import { AuthBackground } from "@/components/atoms/AuthBackground";

import { LoginFormType } from "@/pages/LoginPage/LoginPage";

export const LoginPageTemplate = ({
	onSubmit,
	errors,
	emailInputRef,
	passwordInputRef,
	saveCheckboxRef,
}: LoginFormType) => {
	return (
		<AuthBackground>
			<AuthWrapper>
				<Title>Login</Title>
				<LoginForm
					onSubmit={onSubmit}
					errors={errors}
					emailInputRef={emailInputRef}
					passwordInputRef={passwordInputRef}
					saveCheckboxRef={saveCheckboxRef}
				/>
				<Link className="block text-end font-primaryRegular text-neutral-400" to="/">
					Forgot password?
				</Link>
				<LineDivider />
				<SocialIconBox />
				<div className="mb-0 mt-4 flex justify-center font-primaryMedium">
					<p>Need an account?</p>
					<Link className="ml-1 uppercase underline" to="/register">
						sign up
					</Link>
				</div>
			</AuthWrapper>
		</AuthBackground>
	);
};
