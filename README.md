# Table of contents:
- [Getting started](#getting-started)
- [Database configuration](#database-configuration)
- [Environment ](#enivronment)
- [EndPoint(API_URL)](#endpointapi_url)


# Getting started
- Clone the repository
```
git clone https://github.com/ankit10a/squid-task.git

```
- Intsall dependencies

```
cd <project_name>
npm install

```
- Configure your MYSQL server

- Start your MYSQL server

- Orm configuration

 pirsma orm used for db connection. To more go to official website(https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-mysql)


<!-- # Database configuration

```bash
# Connection paramertes
#The name of your database user
USER 
#The password for your database user
PASSWORD 

HOST: The name of your host name (for the local environment, it is localhost)

PORT: The port where your database server is running (typically 5432 for PostgreSQL)

DATABASE: The name of the database

SCHEMA: The name of the schema inside the database

# convert your db configuration into URL format
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public" 
# put on .env file

```bash -->


# Migration 
``` 
npx prisma
npx prisma init

npx prisma migrate dev --name  init

```


# Environment
- For development 
```
npm run dev
```
- For produciton 

```
npm start
```

# EndPoint(API_URL) 
generic 
```
http://localhost:3000/api/v1/discovery?lat=x&long=y&limit=z&type=k
```
example 
```
http://localhost:3000/api/v1/discovery?lat=40.7128&long=-74.006&limit=2&type=Restaurant
```

- Build and run the project
```
npm run build
npm run serve
```
or 
```
npm start

```



