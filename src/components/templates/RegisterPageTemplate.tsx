import { Link } from "react-router-dom";

import { RegisterForm } from "@/components/organisms/RegisterForm";
import { SocialIconBox } from "@/components/molecules/SocialIconBox";
import { LineDivider } from "@/components/molecules/LineDivider";
import { Title } from "@/components/atoms/Title";

import { RegisterFormType } from "@/pages/RegisterPage/RegisterPage";

export const RegisterPageTemplate = ({ onSubmit, errors, formReference }: RegisterFormType) => {
	return (
		<div className="flex min-h-screen w-full bg-navy-blue">
			<section className="m-auto min-h-[556px] w-4/5 rounded-lg bg-white px-11 py-10 font-primaryRegular shadow-md-2 sm:w-96">
				<Title>Sign up</Title>
				<RegisterForm onSubmit={onSubmit} errors={errors} ref={formReference} />
				<LineDivider />
				<SocialIconBox />
				<div className="mb-0 mt-4 flex justify-center font-primaryMedium">
					<p>Already a user?</p>
					<Link className="ml-1 uppercase underline" to="/login">
						login
					</Link>
				</div>
			</section>
		</div>
	);
};
