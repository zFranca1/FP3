import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Account from "../models/Account";

export default {
  async create(request: Request, response: Response) {
    //desestruturar o corpo da requisição (JSON)
    const { login, password } = request.body;

    const accountRepository = AppDataSource.getRepository(Account);

    const account = accountRepository.create({
      login,
      password,
    });

    await accountRepository.save(account);

    return response.status(201).json(account);
  },
  async index(request: Request, response: Response) {
    const accountRepository = AppDataSource.getRepository(Account);

    //Filtrar pelo nome (WHERE)
    // const users = await userRepository
    // .find({ nome: "José Carlos dos Santos" });

    //Filtrar pelo nome (WHERE) usando a função LIKE
    // const users = await userRepository
    // .find({ nome: Like("%Ana%") });

    // Filtrar as colunas (SELECT)
    // const users = await userRepository
    //   .createQueryBuilder("user")
    //   .select(["user.nome", "user.salario"])
    //   .getMany();

    //Buscar tudo
    const users = await accountRepository.find();

    response.json(users);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const userRepository = AppDataSource.getRepository(Account);

    const account = await userRepository.findOneBy({
      id: +id,
    });

    response.json(account);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const userRepository = AppDataSource.getRepository(Account);

    const account = await userRepository.findOneBy({
      id: +id,
    });

    if (account) {
      await userRepository.remove(account);
      return response.status(204).json(account);
    }
    response.status(404).json();
  },
};
