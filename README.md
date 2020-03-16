# Movie Browser

An app to test [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction). Constructed by Joshua Trevena.

## Before you Begin

You'll need some version of Node installed, just about any version should do, but try updating if something goes wrong.  
You'll also need some type of editor and a terminal to run commands with.  
Finally you'll need an API key from The Movie Database to insert into the app.

## Initialzing the App

Start by cloning the repository.

### Server:

Configure and start the server-side.  

Assuming you're in the main folder, navigate into the server folder and locate the **config.json** file.  
Open the config with your editor and replace the "your api key here" string with your personal key (remember to keep the quotes around your key).

Finish the server prep by letting npm install your packages and starting the Express server.

```
npm install
npm start
```

### Client:

Now you just need to prep the client-side packages and start the React frontend.  
Open a new terminal in the main folder (don't close the terminal running the server process).

```
cd client
npm install
npm start
```

## Using the App

Once the browser loads the app, you should be on the main page.

At the top is the **Movie Browser** heading, this can be clicked on any page to load the main page.

Just below that is the searchbar input, type a movie name here to query MovieDB for movies.

Below that is the movie grid, where results are displayed. If no query is entered, it displays the 20 most popular movies according to MovieDB.

Click on any of the movie posters to be taken to a page for that movie.  
A general summary, rating, and casting info should be present.  
You can click on the actor names to be taken to a similar page for individual actors.