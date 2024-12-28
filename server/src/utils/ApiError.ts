class ApiError extends Error {
  statusCode: number;
  data: any; // Nullable field, so it can be `null`
  success: boolean;
  errors: any[]; // Array to store additional error details

  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    errors: any[] = [],
    stack: string = ""
  ) {
    super(message); // Call the base class constructor (Error)

    this.statusCode = statusCode;
    this.data = null; // Default data to null
    this.message = message;
    this.success = false; // Always false for errors
    this.errors = errors;

    // Capture the stack trace
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
