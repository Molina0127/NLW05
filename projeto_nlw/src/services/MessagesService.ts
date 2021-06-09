import { getCustomRepository, Repository } from "typeorm"
import { message } from "../entities/message";
import { messagesRepository } from "../repositories/messagesRepository";

interface IMessagesCreate {
    admin_id?: string;
    text: string;
    user_id: string;
}

class MessagesService {

    private messagesRepository: Repository<message>;

    constructor() {
        this.messagesRepository = getCustomRepository(messagesRepository);
    }
    async create({ admin_id, text, user_id }: IMessagesCreate) {

        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        });

        await this.messagesRepository.save(message);

        return message;

    }

    async listByUser(user_id: string) {

        const list = await this.messagesRepository.find({
            where: { user_id },
            relations: ["User"],
        });

        return list;
    }
}

export { MessagesService }

