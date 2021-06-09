import { EntityRepository, Repository } from "typeorm";
import { message } from "../entities/message";

@EntityRepository(message)
class messagesRepository extends Repository<message>{

}

export { messagesRepository }