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
> Breaking change in connect-mongo V4 and rewritten the whole project using Typescript. Please checkout the [migration guide](https://github.com/jdesboeufs/connect-mongo/blob/master/MIGRATION_V4.md) and [changelog](https://github.com/jdesboeufs/connect-mongo/blob/master/CHANGELOG.md) for details.

cross-env makes it so you can have a single command without worrying about setting or using the environment variable properly for the platform. Just set it like you would if it's running on a POSIX system, and cross-env will take care of setting it properly.
``npm i -D cross-env``
kemudian tambahkan di package.json 
``"scripts": { "start": "cross-env NODE_ENV=production node ./bin/www", "dev": "cross-env NODE_ENV=development nodemon ./bin/www" },``

+ Database in cloud server use mongodb -> create cluster -> SECURITY/create db access user -> SECURITY/ set network access server -> Deployment/database connect to application

+ Google cloud platform console -> create project -> Api&Service/ Enable api & service -> Enable 'Google+ API' -> Add OAuth Consent Screen -> create Credentials (OAuth client ID) to get user consern then use their data -> [add redirect uri]() http://localhost:3000/auth/google/callback
