import { StatusCodes } from "http-status-codes";
import { responseFail, responseSuccess } from "../helpers/reponse";
import { IResponseApi } from "../interfaces/reponseControllerInterface";
import { IWelcome } from "../interfaces/welcomeInterface";

class HelloController {
    
    postHello = async (welcome:IWelcome)=>{
        let response: IResponseApi;
        try {
            response = responseSuccess({data:welcome, message:"you have the one pice !!"}, StatusCodes.OK)
            
        } catch (error) {
            response = responseFail(error);
        }
        return response;

    }
}
export default HelloController;