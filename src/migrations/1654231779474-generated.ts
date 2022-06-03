import {MigrationInterface, QueryRunner} from "typeorm";

export class generated1654231779474 implements MigrationInterface {
    name = 'generated1654231779474'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Post" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "userId" integer NOT NULL, "title" varchar, "body" varchar)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Post"`);
    }

}
