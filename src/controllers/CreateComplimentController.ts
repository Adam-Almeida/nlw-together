import { Request, Response } from "express";
import { CreateComplimentsServices } from "../services/CreateComplimentsService";

class CreateComplimentController {
      async handle(request:Request, response:Response){
      const {
        tag_id,
        user_sender,
        user_receiver,
        message  
      } = request.body;

      const createComplimentsService = new CreateComplimentsServices;
      const compliment = await createComplimentsService.execute({
        tag_id,
        user_sender,
        user_receiver,
        message
      });
      return response.json(compliment);
  }

}

export { CreateComplimentController };