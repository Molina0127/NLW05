import { getCustomRepository, Repository } from "typeorm";
import { setting } from "../entities/setting";
import { settingsRepository } from "../repositories/settingsRepository"


interface ISettingsCreate {
    chat: boolean,
    username: string,
}

class SettingsService {
    private settingsRepository: Repository<setting>;

    constructor() {
        this.settingsRepository = getCustomRepository(settingsRepository);
    }
    async create({ chat, username }: ISettingsCreate) {

        //Select * from settings where username = "username" limit 1;
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        });

        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }


        const settings = this.settingsRepository.create({
            chat,
            username,
        })

        await this.settingsRepository.save(settings);

        return settings;
    }

    async findByUsername(username: string) {
        const settings = await this.settingsRepository.findOne({
            username,
        });

        return settings;
    }

    async update(username: string, chat: boolean) {
        const settings = await this.settingsRepository.createQueryBuilder().
            update(setting)
            .set({ username, chat })
            .where("username = :username", {
                username
            }).execute();
    }
}

export { SettingsService };