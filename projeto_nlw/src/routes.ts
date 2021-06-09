import { Router } from "express";
import { MessagesController } from "./controllers/MessagesCotroller";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

/**
 * Tipos de parâmetros
 * 
 * Routes Params => Parâmetros de rotas
 * http://localhost:3333/settings/1 - Parâmetros que vem na própria rota 
 * 
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=something - Parâmetros que vem depois da rota
 * 
 * Body Params => Quando nós passamos um objeto por meio de uma requisição {
 *  //Nesse caso é um JSON
 * }
 */

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);


export { routes };

