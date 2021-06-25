import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest{
  email: string;
  password: string;
}

class AuthenticateUserService{

  async execute({email, password} : IAuthenticateRequest){
    const userRepositories = getCustomRepository(UsersRepositories);
    const user = await userRepositories.findOne({
      email
    });

    if(!user){
      throw new Error("User or Password Incorrect");
    }
    
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new Error("User or Password Incorrect");
    }

    const token = sign({
        email: user.email
      }, "e449fddbc5775133cebca1de651b5ae6",{
        subject: user.id,
        expiresIn: "1d"
      }
    );

    return token;

  }

}

export { AuthenticateUserService };