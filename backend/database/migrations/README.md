# Database Migrations

Store database migrations here.

Example migration file structure:

```typescript
// 1_CreateUsersTable.ts
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1234567890123 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                    },
                    // ... more columns
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
```