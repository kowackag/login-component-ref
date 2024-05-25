import { Ref } from "react";

export type FormFieldTypes = {
	name: string;
	label: string;
	type?: HTMLInputElement["type"];
	ref: Ref<HTMLInputElement>;
	error?: string;
};

export type FormDataType = {
	email?: string;
	password?: string;
};
