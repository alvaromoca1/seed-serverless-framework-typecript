import { StatusCodes } from "http-status-codes";

export interface IResponseBody{
    data?:any;
    message?:string;
}
export interface IResponseApi {
    statusCode: StatusCodes;
    success: boolean;
    data: any;
    message: string;
};