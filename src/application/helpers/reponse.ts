import { StatusCodes } from "http-status-codes";
import HttpError from "../exceptions/http-error";
import { IResponseBody } from "../interfaces/reponseControllerInterface";

const responseSuccess =(body:IResponseBody,statusCode: StatusCodes = 200)=>{
    return{
        success: true,
        data: body.data,
        message: body.message,
        statusCode
    }
}

const responseFail = (error: Error) => {
    if (error instanceof HttpError){
        console.log("statuscodenonulo", error)
        return structureFail({ message: error.message }, error.statusCode)
    } else if (error && error.message != null){
        console.log("statuscodenulo", error)
        return structureFail({ message: "Error inesperado" });
    } else {
        console.log("errornulo", error)
        return structureFail({ message: "Error inesperado" });
    }
}
const structureFail = (body:IResponseBody, statusCode: StatusCodes = 500)=> {
    return {
        success: false,
        data: body.data,
        message: body.message,
        statusCode
    };
}
export {
    responseSuccess,
    responseFail
}