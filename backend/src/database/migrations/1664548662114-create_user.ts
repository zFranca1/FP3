import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1664548662114 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
              {
                name: "id",
                type: "integer",
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment"
              },
              {
                name: "nome",
                type: "varchar"
              },
              {
                name: "salario",
                type: "decimal",
                scale: 2,
                precision: 10
              }
            ]
          }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }

}
