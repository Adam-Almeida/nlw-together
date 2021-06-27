import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController{
    async handle(request: Request, response: Response){
      const { user_id } = request;

      const listCompliments = new ListUserSendComplimentsService();

      const compliments = await listCompliments.list(user_id);

      return response.json(compliments);
    }  
 
}

export { ListUserSendComplimentsController };
