Install blank app
``npm init``, ``npm install express``

Running App Locally
``node index.js`` file {index.js} bergantung pengaturan awal ketika npm init

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
``npm run dev``