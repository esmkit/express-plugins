export interface HttpStatusInterface {
  errcode: number;
  errhint: string;
  message: string;
  statusCode: number;
}

export const httpStatus: Array<HttpStatusInterface> = [
  {
    errcode: 200,
    errhint: "OK",
    message: "The request was successful.",
    statusCode: 200,
  },
  {
    errcode: 201,
    errhint: "Created",
    message: "The request has been fulfilled and resulted in a new resource being created.",
    statusCode: 201,
  },
  {
    errcode: 400,
    errhint: "Bad Request",
    message: "The server cannot process the request.",
    statusCode: 400,
  },
  {
    errcode: 401,
    errhint: "Unauthorized",
    message: "Authentication credentials is invalid.",
    statusCode: 401,
  },
  {
    errcode: 402,
    errhint: "Payment Required",
    message: "Payment is required to access the requested resource.",
    statusCode: 402,
  },
  {
    errcode: 403,
    errhint: "Forbidden",
    message: "Don't have necessary permissions for this resource.",
    statusCode: 403,
  },
  {
    errcode: 404,
    errhint: "Not Found",
    message: "The URL is not recognized or endpoint is valid but the resource itself does not exist.",
    statusCode: 404,
  },
  {
    errcode: 405,
    errhint: "Method Not Allowed",
    message: "The request method is not supported for the requested resource.",
    statusCode: 405,
  },
  {
    errcode: 406,
    errhint: "Not Acceptable",
    message:
      "The server cannot produce a response matching the list of acceptable values defined in the request's headers.",
    statusCode: 406,
  },
  {
    errcode: 407,
    errhint: "Proxy Authentication Required",
    message: "The client must authenticate itself to the proxy.",
    statusCode: 407,
  },
  {
    errcode: 408,
    errhint: "Request Timeout",
    message: "The server terminated the request due to it taking too long.",
    statusCode: 408,
  },
  {
    errcode: 409,
    errhint: "Conflict",
    message: "The request conflicts with the current state of the target resource.",
    statusCode: 409,
  },
  {
    errcode: 410,
    errhint: "Gone",
    message: "The requested resource is no longer available and will not be available again.",
    statusCode: 410,
  },
  {
    errcode: 411,
    errhint: "Length Required",
    message: "The server refuses to accept the request without a defined Content-Length.",
    statusCode: 411,
  },
  {
    errcode: 412,
    errhint: "Precondition Failed",
    message: "One or more preconditions sent in the request header fields are not met.",
    statusCode: 412,
  },
  {
    errcode: 413,
    errhint: "Payload Too Large",
    message: "The request is larger than the server is willing or able to process.",
    statusCode: 413,
  },
  {
    errcode: 414,
    errhint: "URI Too Long",
    message: "The URI provided was too long for the server to process.",
    statusCode: 414,
  },
  {
    errcode: 415,
    errhint: "Unsupported Media Type",
    message: "The server does not support the media type transmitted in the request.",
    statusCode: 415,
  },
  {
    errcode: 416,
    errhint: "Range Not Satisfiable",
    message: "The requested range cannot be fulfilled.",
    statusCode: 416,
  },
  {
    errcode: 417,
    errhint: "Expectation Failed",
    message: "The server could not meet the requirements specified in the Expect request header.",
    statusCode: 417,
  },
  {
    errcode: 418,
    errhint: "I'm a teapot",
    message: "The server refuses the attempt to brew coffee with a teapot.",
    statusCode: 418,
  },
  {
    errcode: 419,
    errhint: "Authentication Timeout",
    message: "The client's authentication has expired or is not valid for the requested resource.",
    statusCode: 419,
  },
  {
    errcode: 420,
    errhint: "Method Failure",
    message: "The server is overwhelmed and requests the client to calm down and try again later.",
    statusCode: 420,
  },
  {
    errcode: 421,
    errhint: "Misdirected Request",
    message: "The request was directed at a server that is not able to produce a response for this request.",
    statusCode: 421,
  },
  {
    errcode: 422,
    errhint: "Unprocessable Entity",
    message: "The request was well-formed but was unable to be followed due to semantic errors.",
    statusCode: 422,
  },
  {
    errcode: 423,
    errhint: "Locked",
    message: "The resource that is being accessed is locked.",
    statusCode: 423,
  },
  {
    errcode: 424,
    errhint: "Failed Dependency",
    message: "The request failed due to the failure of a previous request.",
    statusCode: 424,
  },
  {
    errcode: 426,
    errhint: "Upgrade Required",
    message: "The client must switch to a different protocol.",
    statusCode: 426,
  },
  {
    errcode: 428,
    errhint: "Precondition Required",
    message: "The server requires the request to be conditional.",
    statusCode: 428,
  },
  {
    errcode: 429,
    errhint: "Too Many Requests",
    message: "Sent too many requests in a given amount of time.",
    statusCode: 429,
  },
  {
    errcode: 431,
    errhint: "Request Header Fields Too Large",
    message: "The server refuses to process the request because the request's headers are too large.",
    statusCode: 431,
  },
  {
    errcode: 451,
    errhint: "Unavailable For Legal Reasons",
    message: "The server is denying access to the resource as a consequence of a legal demand.",
    statusCode: 451,
  },
  {
    errcode: 500,
    errhint: "Internal Server Error",
    message: "An unexpected condition was encountered.",
    statusCode: 500,
  },
  {
    errcode: 501,
    errhint: "Not Implemented",
    message: "The server does not support the functionality required to fulfill the request.",
    statusCode: 501,
  },
  {
    errcode: 502,
    errhint: "Bad Gateway",
    message: "The server received an invalid response from an upstream server.",
    statusCode: 502,
  },
  {
    errcode: 503,
    errhint: "Service Unavailable",
    message: "The server is currently unable to handle the request due to a temporary overload or maintenance.",
    statusCode: 503,
  },
  {
    errcode: 504,
    errhint: "Gateway Timeout",
    message: "The server did not receive a timely response from an upstream server.",
    statusCode: 504,
  },
  {
    errcode: 505,
    errhint: "HTTP Version Not Supported",
    message: "The server does not support the HTTP protocol version used in the request.",
    statusCode: 505,
  },
  {
    errcode: 506,
    errhint: "Variant Also Negotiates",
    message: "Transparent content negotiation for the request results in a circular reference.",
    statusCode: 506,
  },
  {
    errcode: 507,
    errhint: "Insufficient Storage",
    message: "The server is unable to store the representation needed to complete the request.",
    statusCode: 507,
  },
  {
    errcode: 508,
    errhint: "Loop Detected",
    message: "The server detected an infinite loop while processing the request.",
    statusCode: 508,
  },
  {
    errcode: 510,
    errhint: "Not Extended",
    message: "Further extensions to the request are required for the server to fulfill it.",
    statusCode: 510,
  },
  {
    errcode: 511,
    errhint: "Network Authentication Required",
    message: "The client must authenticate to gain network access.",
    statusCode: 511,
  },
];

export type HttpStatusType =
  | 200
  | 201
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 419
  | 420
  | 421
  | 422
  | 423
  | 424
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511
  | "OK"
  | "Created"
  | "Bad Request"
  | "Unauthorized"
  | "Payment Required"
  | "Forbidden"
  | "Not Found"
  | "Method Not Allowed"
  | "Not Acceptable"
  | "Proxy Authentication Required"
  | "Request Timeout"
  | "Conflict"
  | "Gone"
  | "Length Required"
  | "Precondition Failed"
  | "Payload Too Large"
  | "URI Too Long"
  | "Unsupported Media Type"
  | "Range Not Satisfiable"
  | "Expectation Failed"
  | "I'm a teapot"
  | "Authentication Timeout"
  | "Method Failure"
  | "Misdirected Request"
  | "Unprocessable Entity"
  | "Locked"
  | "Failed Dependency"
  | "Upgrade Required"
  | "Precondition Required"
  | "Too Many Requests"
  | "Request Header Fields Too Large"
  | "Unavailable For Legal Reasons"
  | "Internal Server Error"
  | "Not Implemented"
  | "Bad Gateway"
  | "Service Unavailable"
  | "Gateway Timeout"
  | "HTTP Version Not Supported"
  | "Variant Also Negotiates"
  | "Insufficient Storage"
  | "Loop Detected"
  | "Not Extended"
  | "Network Authentication Required";

export function findHttpStatus(codeStatus: HttpStatusType) {
  if (typeof codeStatus === "number") {
    return httpStatus.find(obj => {
      return obj.errcode === codeStatus;
    });
  } else {
    return httpStatus.find(obj => {
      return obj.errhint === codeStatus;
    });
  }
}
