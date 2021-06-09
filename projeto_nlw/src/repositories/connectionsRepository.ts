import { EntityRepository, Repository } from "typeorm";
import { connection } from "../entities/connection"

@EntityRepository(connection)
class connectionsRepository extends Repository<connection>{

}

export { connectionsRepository }