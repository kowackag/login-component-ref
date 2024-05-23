import { MouseEventHandler, ReactNode } from "react";

export const ConfirmButton = ({
	children,
	onSubmit,
	...props
}: {
	children: ReactNode;
	onSubmit: MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<button
			className="my-2 w-full rounded-lg bg-bright-rose text-center font-primaryMedium text-sm uppercase leading-10 tracking-widest text-neutral-100 shadow-btn"
			type="submit"
			{...props}
			onClick={onSubmit}
		>
			{children}
		</button>
	);
};
