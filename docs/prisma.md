
# Prisma

## good to know

as we use multiple database, error handling with as described [here](https://www.prisma.io/docs/orm/prisma-client/debugging-and-troubleshooting/handling-exceptions-and-errors) will be IMPOSIBLE for now.

as example as we use `PrismaClientKnownRequestError` it will be depend on which client we generate. it is because `Prisma.PrismaClientKnownRequestError` will refer to the last generate client

## CREATE USER

later we MUST revoke unnecessary permissions

```sql
/*
Commands must be executed while connected to the right database - authdb. Make sure of it.
*/

GRANT USAGE ON SCHEMA public TO authuser;

grant create on schema public to authuser;

GRANT ALL  ON ALL TABLES IN SCHEMA public TO authuser;

GRANT ALL  ON ALL SEQUENCES IN SCHEMA public TO authuser;
```

```sql
/*
Commands must be executed while connected to the right database - smartppdb. Make sure of it.
*/

GRANT USAGE ON SCHEMA public TO smartuser;

grant create on schema public to smartuser;

GRANT ALL  ON ALL TABLES IN SCHEMA public TO smartuser;

GRANT ALL  ON ALL SEQUENCES IN SCHEMA public TO smartuser;
```

```sh
pnpm prisma db pull --schema=./src/prisma/db-auth/schema.prisma
pnpm prisma db pull --schema=./src/prisma/db-smartppdb/schema.prisma

pnpm prisma generate --schema=./src/prisma/db-auth/schema.prisma
pnpm prisma generate --schema=./src/prisma/db-smartppdb/schema.prisma

```
