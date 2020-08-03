# Artcile

https://dev.to/macru/dockerizing-react-app-and-express-api-with-mongodb-2pdm

https://medium.com/@xiaolishen/develop-in-docker-a-node-backend-and-a-react-front-end-talking-to-each-other-5c522156f634

https://levelup.gitconnected.com/dockerizing-a-react-application-using-nginx-and-react-router-43154cc8e58c



# Command

`docker rmi $(docker images -q)` - delete img

`docker-compose build` - build img

`docker-compose up` - старт проекта

## Mission

Сделать страницу авторизации (пользователи могут быть заранее созданы), чтобы
пользователь мог зайти на страницу и авторизоваться.

После авторизации пользователю должны быть доступны список пользователей с ссылкой или
кнопкой удаления, редактирования.

При редактировании возможно менять пароль(обязательно), логин(обязательно) и другую
информации (не обязательно).

Реализовать страницу добавление пользователя. Форма должна быть с полями:
- логин
- пароль
- и другое (по желанию)

Реализация п. 1.2. на meteor или react. Отдать проект в докере, а именно в docker-compose.yml,
чтобы все было описано и могли запустить. Инструкция должна быть написана в README.md
