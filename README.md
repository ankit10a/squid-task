# Getting started
- Clone the repository
```
git clone https://github.com/ankit10a/squid-task.git

```
-Intsall dependencies 
```
cd <project_name>
npm install

- Configure your MYSQL server

- Start your MYSQL server

- Orm configuration
 pirsma orm used for db connection. To more go to official website(https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-mysql)


- db configuration
```
USER: The name of your database user
PASSWORD: The password for your database user
HOST: The name of your host name (for the local environment, it is localhost)
PORT: The port where your database server is running (typically 5432 for PostgreSQL)
DATABASE: The name of the database
SCHEMA: The name of the schema inside the database

convert your db configuration into URL format
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public" 

and put on .env file

- Migration 
npx prisma
npx prisma init

npx prisma migrate dev --name  init






