import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumnAdminInUser1717942348075 implements MigrationInterface {
    name = 'AddColumnAdminInUser1717942348075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "admin"`);
    }

}
