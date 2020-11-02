# Iterative Ideas Blog

## Description
This blog application is a blog where you can post, update, and delete posts that belong to you. You can also see what other users have posted too! Anyone who wishes to use this has to create an account so that your posts stay safe.

To use this application:
* follow the steps below
* click login
* sign up with credentials
* start reading, writing, and editing posts

### Link to deployed application on Heroku
https://iterative-ideas-blog.herokuapp.com/

![image](https://user-images.githubusercontent.com/65309756/97836580-d855ae80-1c99-11eb-865d-a15e51f5c77a.png)

## Installation

You will need to make sure these packages are installed (run them one at a time):
```
npm init -y
npm install express
npm install express-session
npm install connect-session-sequelize
npm install express sequelize mysql2
npm install express-handlebars
npm install dotenv
npm install bcrypt
```
Then, access the database from the command link:
```
mysql -u root -p
```
Once inside, type (it will access the database and link it to the application:
```
source db/schema.sql
```
Then, type this to leave mysql
```
quit
```
The start the server
```
npm start
```
Lastly, go to ```http://localhost:3001/``` in your web browser to start using!
