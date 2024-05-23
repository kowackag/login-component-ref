import { Ref } from "react";

export interface InputRef {
	getValue: () => string | undefined;
	reset: () => void;
}

export interface IFormValues {
	email: string;
	password: number;
	toSave: boolean;
}

export type FormFieldTypes = {
	name: string;
	label: string;
	type?: HTMLInputElement["type"];
	// onChange: ChangeEventHandler;
	// onBlur: FocusEventHandler<HTMLInputElement>;
	ref: Ref<HTMLInputElement>;
	error?: string;
};

export type CheckboxFieldTypes = {
	name: string;
	label: string;
	// onChange: ChangeEventHandler;
	// onBlur: FocusEventHandler<HTMLInputElement>;
	ref: Ref<HTMLInputElement>;
	error?: string;
};

export type FormDataType = {
	email?: string;
	password?: string;
};
