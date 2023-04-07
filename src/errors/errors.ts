import { ErrorType } from '../protocols/errorType'

function conflictError(message: string) : ErrorType {
    return {
        name: "ConflictError",
        message
    }
}

function notFoundError(): ErrorType {
    return {
        name: "NotFoundError",
        message: "No result for this search!"
    }
}

export default {
    conflictError,
    notFoundError
}