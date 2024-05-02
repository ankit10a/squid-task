# Table of contents:
- [Getting started](#getting-started)
- [Database configuration](#database-configuration)
- [Environment ](#enivronment)
- [EndPoint(API_URL)](#endpointapi_url)
- [Build and run the project](#build-and-run)


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


# Database Configuration

generic

```
   DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"  

```

``` 
# root or admin name
  User = username
# In this project mysql is used 
  database = mysql
#password 
  password = 123pass
#host
  host = localhost
#port
  port = 3302
#schema
  schema = abc

# DBURL
  Url = "mysql://username:123pass@localhost:3302/mydb?schema=abc

  DBURL = "{databaseEngine}://{username}:{password}@{host}:{port}/mydb?schema={schema_name}

```
 generate URL and put on .env file for the database connection


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

# Build and run the project
```
npm run build
npm run serve
```
or 
```
npm start

```



