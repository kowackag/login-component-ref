import { Ref, forwardRef, useImperativeHandle, useRef } from "react";
import { ErrorMessage } from "@/components/atoms/Error";

export type CheckboxFieldTypes = {
	name: string;
	label: string;
	ref: Ref<HTMLInputElement>;
	error?: string;
};

export interface CheckboxRef {
	getValue: () => void;
	reset: () => void;
}
export const Checkbox = forwardRef<CheckboxRef, CheckboxFieldTypes>(
	({ name, label, error }, ref) => {
		const valueRef = useRef<HTMLInputElement>(null);

		useImperativeHandle(ref, () => ({
			getValue: () => valueRef.current?.checked,
			reset: () => {
				valueRef.current!.checked = false;
			},
		}));

		return (
			<div className="justify-beetwen mb-4 flex align-middle">
				<input
					id={name}
					name={name}
					type="checkbox"
					ref={valueRef}
					className="peer fixed h-5 w-5 opacity-0"
				/>
				<p className="mr-3 inline-block h-5 w-5 rounded-sm border border-neutral-300 p-0 leading-5 text-white peer-checked:border-none peer-checked:bg-bright-rose ">
					<svg width="16px" height="16px">
						<use href="/icons.svg#check"></use>
					</svg>
				</p>
				<label htmlFor={name} className="font-primaryMedium leading-5">
					{label}
				</label>
				{error ? <ErrorMessage message={error} /> : null}
			</div>
		);
	},
);
