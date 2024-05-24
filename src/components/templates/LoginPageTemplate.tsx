import { Link } from "react-router-dom";

import { LoginForm } from "@/components/organisms/LoginForm";
import { SocialIconBox } from "@/components/molecules/SocialIconBox";
import { LineDivider } from "@/components/molecules/LineDivider";
import { Title } from "@/components/atoms/Title";

import { LoginFormType } from "@/pages/LoginPage/LoginPage";

export const LoginPageTemplate = ({
	onSubmit,
	errors,
	emailInputRef,
	passwordInputRef,
	saveCheckboxRef,
}: LoginFormType) => {
	return (
		<div className="flex min-h-screen w-full bg-navy-blue">
			<section className="m-auto min-h-[556px] w-4/5 rounded-lg bg-white px-11 py-10 font-primaryRegular shadow-md-2 sm:w-96">
				<Title text="Login" level="h1" />
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
			</section>
		</div>
	);
};
