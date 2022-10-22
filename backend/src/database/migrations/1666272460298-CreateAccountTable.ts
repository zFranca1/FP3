import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAccountTable1666272460298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            //Realizar alterações: criar tabela, criar um novo atributo, deletar um atributo
            await queryRunner.createTable(
              new Table({
                name: "account",
                columns: [
                  {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                  },
                  {
                    name: "login",
                    type: "varchar",
                  },
                  {
                    name: "password",
                    type: "varchar",
                    scale: 2,
                  },
                ],
              })
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("account");
    }

}
