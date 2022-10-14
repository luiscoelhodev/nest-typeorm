import { MigrationInterface, QueryRunner } from "typeorm";

export class addActiveColumnInUsers1665787609318 implements MigrationInterface {
    name = 'addActiveColumnInUsers1665787609318'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`active\` tinyint  NOT NULL DEFAULT 0 AFTER \`email\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`active\``);
    }

}
