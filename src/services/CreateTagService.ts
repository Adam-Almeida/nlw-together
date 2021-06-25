import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";


class CreateTagService{
  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepositories);

    if(!name){
      throw new Error("Tag name undefined");
    }

    const tagAlreadyExistis = await tagsRepository.findOne({
      name
    });

    if(tagAlreadyExistis){
      throw new Error("Tag already existis");
    }

    const tag = tagsRepository.create({
      name
    })

    await tagsRepository.save(tag);

    return tag;
  }
}

export { CreateTagService };