import { StatusCodes } from "http-status-codes";

export default class HttpError extends Error {

    private _statusCode: StatusCodes;

    constructor(message: string, statusCode: StatusCodes){
        super(message);
        this._statusCode = statusCode;
    }

    get statusCode(){
        return this._statusCode;
    }
}