import { ErrorMessage } from "@/components/atoms/Error/Error";
import { forwardRef, useImperativeHandle, useRef, Ref } from "react";

export type InputFieldTypes = {
	name: string;
	label: string;
	type?: HTMLInputElement["type"];
	ref: Ref<HTMLInputElement>;
	error?: string;
};
export interface InputRef {
	getValue: () => string | undefined;
	reset: () => void;
}

export const InputField = forwardRef<InputRef, InputFieldTypes>(
	({ name, label, type = "text", error }, ref) => {
		const valueRef = useRef<HTMLInputElement>(null);

		useImperativeHandle(
			ref,
			() => ({
				getValue: () => valueRef.current?.value,
				reset: () => {
					console.log(2)
					valueRef.current!.value = "";
				},
			}),
			[],
		);

		return (
			<div className="relative py-3">
				<label className="inline-block font-primaryMedium" htmlFor={name}>
					{label}
				</label>
				<input
					name={name}
					type={type}
					ref={valueRef}
					className="w-full rounded-md border-2 border-neutral-300 bg-transparent px-2 leading-9 outline-none"
				/>
				{error ? <ErrorMessage message={error} /> : null}
			</div>
		);
	},
);
