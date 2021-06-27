import { Request, Response } from "express";
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService";

class ListUserReceiverComplimentsController{
    async handle(request: Request, response: Response){
      const { user_id } = request;

      const listCompliments = new ListUserReceiverComplimentsService();

      const compliments = await listCompliments.list(user_id);

      return response.json(compliments);
    }  

}

export { ListUserReceiverComplimentsController };
