Install blank app
``npm init``, ``npm install express``

Running App Locally
``node index.js`` file {index.js} bergantung pengaturan awal ketika npm init

# new source https://www.youtube.com/watch?v=L72fhGm1tfE (Express crash course)

Create an application skeleton (langkah sebelumnya tidak diperlukan)
``npx express-generator``, ``npm install``

Running Skeleton App
``set DEBUG=express-js:* | npm start`` {express-js} project name

Routing (https://expressjs.com/en/guide/routing.html)

Template push progress
``git add . | git commit -m '' | git push main``

Install devDependencies nodemon untuk mengawasi perubahan koding yang dilakukan agar tidak selalu merestart server. 
``npm i -D nodemon``
kemudian tambahkan di package.json 
``"scripts": { "dev": "  nodemon ./bin/www" }, ``
untuk menjalankan
``npm run dev`` atau ``set DEBUG=express-js:* | npm run dev``

Add uuid depedencies
``npm i uuid``

# new source https://www.youtube.com/watch?v=SBvmnHTQIPY (Node.js App From Scratch | Express, MongoDB & Google OAuth)
Add depedency 
``npm i mongoose`` to work with database, create model, etc
``npm i connect-mongo`` to allow to store session in db
``npm i express-session`` for session and cookies
``npm i dotenv`` for config env variable
``npm i moment`` for format date
``npm i passport`` for authentication
``npm i passport-google-oauth20`` for google auth



