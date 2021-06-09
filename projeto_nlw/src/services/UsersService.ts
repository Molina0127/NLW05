import { getCustomRepository, Repository } from "typeorm"
import { user } from "../entities/user";
import { usersRepository } from "../repositories/usersRepository"



class UsersService {

    private usersRepository: Repository<user>;

    constructor() {
        this.usersRepository = getCustomRepository(usersRepository);
    }
    async create(email: string) {

        //Verificar se o usuário existe

        const userExists = await this.usersRepository.findOne({
            email,
        })

        //Se o usuário não existir, salvar no DB
        if (userExists) {
            return userExists;
        }

        //Se o usuário existir, exiba o user
        const user = this.usersRepository.create({
            email,
        });

        await this.usersRepository.save(user);

        return user;
    }

    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });

        return user;
    }
}

export { UsersService };