import APIError from "./apierrors";

class ErrorHandler {
	// eslint-disable-next-line class-methods-use-this
	async handleError(err) {
		console.log("Error message from the centralized error-handling component", err);
		// TODO 根据不同的情况记录错误日志到特定的数据库中
		// await sendMailToAdminIfCritical();
	}

	// eslint-disable-next-line class-methods-use-this
	isTrustedError(err) {
		if (err instanceof APIError) {
			return err.isOperational;
		}
		return false;
	}
}

const errorHandler = new ErrorHandler();

export default errorHandler;
