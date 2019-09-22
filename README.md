
This project is a toy-app, called Desolate Hollows, where the User plays as a witch or wizard that is brewing protions. The game creates a potion name based on the ingredients chosen, and randomly generates an affect for this potion to have. The app was inspired by a randomly generated Heroku name (not the one used for this project!), and was built for the purpose of familiarizing myself with interacting with an SQL backend (linked below) through Ruby on Rails. This is Version 1 of the project, built for a one-to-many relationship between users and inventory items. A second version of this project, built for a many-to-many relationship between multiple resources, is planned. 

##Backend:

https://github.com/SorenHopkins/desolateHollow


##Technologies Used:

Handlebars, CSS, HTML, Bootstrap, Javascript, JQuery


##Unsolved Issues:

The app needs a great deal of styling, and several key features for setting a tone
were not built. The biggest feature is a backend feature, however- rather than
making multiple layered promises, I'd like to be able to make a single API call
and receive the desired response.


##Wireframes:

![alt text](https://i.imgur.com/hKSfaZ7.png)
It very much did not end up looking like this!
The original plan was to create a joined resource for comparing selected ingredients to potion recipes. However, time constraints kept the project to a simple single-resource set-up.


##User Stories:

As a user, I would like to be able to select ingredients and add them to my inventory.
As a user, I would like to be able to use those ingredients to craft a 'potion',
and have that added to my inventory.
As a user, I would like to be able to sign in and sign out, and have my progress saved.
As a user, I would like to be able to 'use' a potion, and have something happen.
