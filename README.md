# React-MERN

# Create React apps with no build configuration.

Creating an App – How to create a new app.
Create React App works on macOS, Windows, and Linux.
If something doesn’t work, please file an issue.

# Quick Overview
npx create-react-app my-app
cd my-app
npm start
(npx comes with npm 5.2+ and higher, see instructions for older npm versions)

Then open http://localhost:3000/ to see your app.
When you’re ready to deploy to production, create a minified bundle with npm run build.

# npm start

Get Started Immediately
You don’t need to install or configure tools like Webpack or Babel.
They are preconfigured and hidden so that you can focus on the code.

# Just create a project, and you’re good to go.

Creating an App
You’ll need to have Node 8.10.0 or later on your local development machine (but it’s not required on the server). You can use nvm (macOS/Linux) or nvm-windows to easily switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

npx
npx create-react-app my-app
(npx comes with npm 5.2+ and higher, see instructions for older npm versions)

It will create a directory called my-app inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

react
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── Cardlist.js
    ├── Searchbox.js
    ├── Card.js
    ├── index.css
    ├── index.js
    └── serviceWorker.js
No configuration or complicated folder structures, just the files you need to build your app.
Once the installation is done, you can open your project folder:

cd react
Inside the newly created project, you can run some built-in commands:

npm start 
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

Build errors

Your app is ready to be deployed.

Philosophy
One Dependency: There is just one build dependency. It uses Webpack, Babel, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.

No Configuration Required: You don't need to configure anything. A reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.

No Lock-In: You can “eject” to a custom setup at any time. Run a single command, and all the configuration and build dependencies will be moved directly into your project, so you can pick up right where you left off.

What’s Included?
Your environment will have everything you need to build a modern single-page React app:

React, JSX, ES6, TypeScript and Flow syntax support.
Language extras beyond ES6 like the object spread operator.
Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
A fast interactive unit test runner with built-in support for coverage reporting.
A live development server that warns about common mistakes.
A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria. (Note: Using the service worker is opt-in as of react-scripts@2.0.0 and higher)
Hassle-free updates for the above tools with a single dependency.
Check out this guide for an overview of how these tools fit together.

The tradeoff is that these tools are preconfigured to work in a specific way. If your project needs more customization, you can "eject" and customize it, but then you will need to maintain this configuration.

Popular Alternatives
Create React App is a great fit for:

Learning React in a comfortable and feature-rich development environment.
Starting new single-page React applications.
Creating examples with React for your libraries and components.
Here are a few common cases where you might want to try something else:

If you want to try React without hundreds of transitive build tool dependencies, consider using a single HTML file or an online sandbox instead.

If you need to integrate React code with a server-side template framework like Rails, Django or Symfony, or if you’re not building a single-page app, consider using nwb, or Neutrino which are more flexible. For Rails specifically, you can use Rails Webpacker. For Symfony, try Symfony's Webpack Encore.

If you need to publish a React component, nwb can also do this, as well as Neutrino's react-components preset.

If you want to do server rendering with React and Node.js, check out Next.js or Razzle. Create React App is agnostic of the backend, and just produces static HTML/JS/CSS bundles.

If your website is mostly static (for example, a portfolio or a blog), consider using Gatsby instead. Unlike Create React App, it pre-renders the website into HTML at the build time.

Finally, if you need more customization, check out Neutrino and its React preset.

All of the above tools can work with little to no configuration.

If you prefer configuring the build yourself, follow this guide.

