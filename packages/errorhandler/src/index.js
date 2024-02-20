import errorHandler from "./errorhandler";

export default function () {
	return async (err, req, res, next) => {
		if (errorHandler.isTrustedError(err)) {
			return res.status(err.status).json({
				errors: {
					code: err.code,
					status: err.status,
					message: err.message,
					details: err.details,
					stack: process.env.NODE_ENV === "development" ? err.stack : {},
				},
			});
		}

		res.status(500).json({
			errors: {
				code: "C00000",
				status: 500,
				message: err.message,
				details: err.details,
				stack: process.env.NODE_ENV === "development" ? err.stack : {},
			},
		});
		return next(err);
	};
}
