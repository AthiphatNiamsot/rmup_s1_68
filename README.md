# Prisma
Athiphat Niamsot

## Required
- git
- Docker & Docker compose
- ProgresSql
- Node.js
- Prisma
- Vscode

## Develop 
```bash
```
## Frist time
<<<<<<< HEAD
```
npx prisma init --datasource-provider postgresql
npx prisma generate
npx prisma db push
```
=======

>>>>>>> b19785747b57c5c45d6e970cad827c7cd831ccc9

## Running
### Database
```
docker compose up -d
```
### Schema 
```
npx prisma init --datasource-provider postgresql
npx prisma studio
```


### Update schema
1. Updete some schema
2. Run this command `npx prisma generate`
    2.1 `npx prisma studio` working ชื่อตารางเปลี่ยน แต่ขึ้น popup ผิดพลาด
    2.2 conect db not change ชื่อตารางไม่ถูกเปลี่ยน 
3. Run this command `npx prisma db push`
    3.1 `npx prisma studio` ชื่อตารางเปลี่ยน ไม่แต่ขึ้น error
    3.2 connect db ชื่อตารางเปลี่ยนข้อมูลล่าสุด

### Nomal
  ## Develop 
```bash
npx prisma generate
```



