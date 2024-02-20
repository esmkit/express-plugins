export interface IError {
	statusCode: number;
	errcode: number;
	errhint: string;
	message: string;
	i18nmsg?: object;
	details?: object;
}

export abstract class TError extends Error implements IError {
	public statusCode: number;
	public errcode: number;
	public errhint: string;
	public message: string;
	public i18nmsg?: object | undefined;
	public details?: object | undefined;

	constructor(error: IError) {
		super(error.message);

		this.errcode = error.errcode;
		this.errhint = error.errhint;
		this.message = error.message;
		this.i18nmsg = error.i18nmsg;
		this.details = error.details;
		this.statusCode = error.statusCode;
	}

	abstract get isOperational(): boolean;
}

export const isTrustedError = (err: Error) => {
	if (err instanceof TError) {
		return err.isOperational;
	}

	return false;
};

export default TError;
