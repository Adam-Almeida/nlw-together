import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersServices";

class ListUserController{

  async handle(request: Request, response: Response){
      const userService = new ListUsersService;

      const users = await userService.list();

      return response.json(users);
  }
}

export { ListUserController };