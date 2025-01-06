Dashboard Add-on made using Vue and Python

# Structure

```
Project Root
├── .addons.yml              # Configuration file for managing addon
├── .github
│   └── workflows
│       └── build-push.yml   # GitHub Actions workflow for building and pushing the project
├── dash
│   ├── .gitignore
│   ├── .main
│   ├── Dockerfile           # Instructions for building a Docker image for the project
│   ├── Migration.md         # Documentation for migrating the project repository
│   ├── build.yaml           # Build configuration file
│   ├── changelog.md
│   ├── config.yaml          # Main configuration file for the project
│   ├── controllers
│   │   ├── app.py           # Main application controller logic
│   │   └── ha.py            # Home Assistant Websocket connection logic
│   ├── docker-compose.yml   # Docker Compose file
│   ├── helpers
│   │   └── app.py           # Helper functions for the application
│   ├── icon.png
│   ├── logo.png
│   ├── main.py              # Entry point of the Python application
│   ├── run.sh               # Shell script to run the application
│   ├── babel.config.js      # Babel Config file
│   ├── jsconfig.json        # JS Config file
│   ├── package.json         # Dependencies file
│   ├── postcss.config.js    # Post CSS Config file
│   ├── tailwind.config.js   # Tailwind CSS Config file
│   ├── vue.config.js        # Vue JS Config file
│   ├── src
│   │   ├── assets
│   │   │   └── app.css      # Main stylesheet for the application
│   │   ├── App.vue      # Main Vue.js application component
│   │   ├── Pages
│   │   │   ├── Home.vue # Vue component for the home page
│   │   │   └── Login.vue # Vue component for the login page
│   │   ├── main.js       # Main JavaScript file for the application
│   │   ├── components
│   │   │   ├── Error.vue # Vue component for displaying error messages
│   │   │   ├── FS.vue    # Vue component
│   │   │   ├── Loader.vue # Vue component for loading animations
│   │   │   ├── Placeloader.vue # Vue component for placeholder content during loading
│   │   │   ├── SceenSaver.vue # Vue component for screen saver functionality
│   │   │   └── Waite.vue # Vue component for wait/loader functionality
│   │   ├── mixins
│   │   │   └── app.js    # JavaScript mixins to be used in Vue components
│   │   ├── request.js    # JavaScript file for handling HTTP requests
│   │   ├── router.js     # JavaScript file for managing routes in the Vue.js application
│   │   └── store.js      # JavaScript file for managing the Vuex store (state management)
│   ├── static
│   │   ├── css
│   │   │   └── app.css   # Minified CSS stylesheet for the application
│   │   ├── favicon.ico
│   │   ├── images
│   │   │   └── Logo.png
│   │   ├── js
│   │   │   └── app.js etc    # Minified app.js and other files for running the Frontend application
│   │   └── template.txt
│   ├── storage
│   │   ├── auth.json         # JSON file for storing authentication data
│   │   ├── entities.json     # JSON file for storing entities, labels and states data to update frontend
│   │   ├── log.json          # JSON file for storing logs
│   │   └── secure.json       # JSON file for securely storing device id data
│   └── templates
│       └── pages
│           └── index.html    # HTML template for the main page
├── .gitignore
├── Readme.md                 # Readme file
└── repository.json           # JSON file for storing repository-related data
```