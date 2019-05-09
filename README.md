# burger
Burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Let's eat!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not -- I did add delete button because it just made sense to have it as an option.  Although, that may be over thinking a "Burger logger"

![](burgersrcnshot.png)
I added this screenshot because Buzz helped me figure out why screenshots weren't showing in my README for the last couple assigments -- Voilà!

## Getting Started

This app requires the MySQL, Express, Handlebars and   npm packages :

   * [Mysql](https://www.npmjs.com/package/mysql)

   * [Express](https://www.npmjs.com/package/express)

   * [Handlebars](https://www.npmjs.com/package/handlebars)

   * [dotenv](https://www.npmjs.com/package/dotenv)
      

### Deployment
* Clone repo
* Run npm install
* You will need to add a password to connect the Mysql database to run locally



Check it out on Heroku: https://blooming-ocean-27728.herokuapp.com/

### Issues
This project was largely successful due to the Cat App Activty.  It was the starter code for me -- I then adapted to the specific requirements of the Burger app. I did keep the delete fuctionality that was introduced in the cat activity. But, only when a Burger was in the "devoured/Eaten" category.  I would have played with the CSS more, but need to put my energy into our next project.  It was a little tricky moving from file to file to access different sections, but I got the hang of it. I like Handlebars -- although three files for one html page seems complicated.

Uploading to heroku was a hassle, but lucklily I had it set up so I could use this as an example in our class activity. And was able to deploy it with help from Bryan and Buzz.

## Built With

* [JavaScript]
* [MySQL created using MySQL Workbench]

## Authors

* **Jennifer Ginelli** - *Initial work* - [jcnimble](https://jcnimble.github.io/)

## Acknowledgments

   * UPENN201903FSF4-FT/13-handlebars/01-Activities/17-CatsApp/Solved/
   * Bryan esteemed Professor
   * Buzz and Aaron dedicated TAs


