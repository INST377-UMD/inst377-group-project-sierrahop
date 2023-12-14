# README

Project Title: Color Block

Description: This project aims to solve the issue of creative block when it comes to picking color schemes for designers, particularly web designers. It uses the Colr.org API to randomly generate colors that work well together, and applies them to the website, in order to provide a visual example.

Target Browsers: Google Chrome, Safari

[Link to User Manual](https://github.com/INST377-UMD/inst377-group-project-sierrahop/blob/main/docs/UserManual.md)

[Link to Developer Manual](https://github.com/sierrahop/inst377-group-project?tab=readme-ov-file#developer-manual)

# Developer Manual

Install dependencies (do this after you clone the repo): npm i

Start the web application: npm start

Stop the web application: CTRL + C in your terminal

Used Express.js and Supabase

API: https://www.colr.org/api.html

    POST /savedpalettes -> saves color palette to an external database

    GET /getsavedpalettes -> gets saved palettes from external database

Known Bugs: None! (that i know of)

Road-Map: Future developments will center around allowing users to generate color palettes based on specific inputs and colors that they already want.
