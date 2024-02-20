class APIError extends Error {
	constructor(errcode = "Internal Server Error", status = 500, details = "", isOperational = true) {
		super(errcode);
		this.name = this.constructor.name; // 错误类型
		this.status = status; // HTTP 状态码
		this.details = details; // 可能有多种数据类型，比如[],{},""
		this.message = typeof errcode === "object" ? `${errcode.explain}` : `${errcode}`; // 系统错误信息: 更详细信息
		this.code = typeof errcode === "object" ? errcode.code : "C00000"; // 系统错误码
		this.isOperational = isOperational;
		Error.captureStackTrace(this, this.constructor.name);
	}
}

export default APIError;
