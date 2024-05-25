import { ErrorMessage } from "@/components/atoms/Error";
import { FormFieldTypes } from "@/utils/shared.types";
import { forwardRef, useImperativeHandle, useRef } from "react";

export interface InputRef {
	getValue: () => string | undefined;
	reset: () => void;
}

export const InputField = forwardRef<InputRef, FormFieldTypes>(
	({ name, label, type = "text", error }, ref) => {
		const valueRef = useRef<HTMLInputElement>(null);

		useImperativeHandle(
			ref,
			() => ({
				getValue: () => valueRef.current?.value,
				reset: () => {
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
