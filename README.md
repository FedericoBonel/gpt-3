# GPT-3
<sub>13 february 2022, by Federico Jorge Bonel Tozzi</sub>

_A basic responsive UI/UX static website created with React and Node_

![node+js](https://miro.medium.com/max/1040/1*q5Tn2FkQ6Q99DrMVxGeHpw.png)

The website design is thought out to be expanded in the future (with sections to get early access, contact, etc.) and have a persistancy layer for the articles.


## Features

- ✨ Functional, catchy, interactive and user friendly ✨
- 🌈 Gradients and animations 🌈 
- 🎆 Innovative and modern design 🎆
- 📱 Optimized with full responsiveness for every kind of device 📱

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech

To develop and deploy this website I used two main open source projects

- NodeJS: The develop, test, run, and deploy the website
- React: To make every component in the website modular and reusable

To actually deploy it I used a free hosting service called Netlify: netlify.com

## File Structure

The outer structure is the same that any other website bootstrapped by Node JS...

![Really?](https://c.tenor.com/kT9luj_7U94AAAAd/willy-wonka.gif)


I know I know, let me elaborate.
Inside the public folder we have the main index.html file.
Inside the src file we have three folders, one (components) with the most basic components (Articles, navbar, features, etc.), another one (containers) for the components of the website that are made up of other components (i.e the sections: Header, Blog, etc.) and the assets is for all the media that we use in the website.
The index.js inserts our App.js in the index.html, the App.js is the main react app, it's basically a box that contains all the html code to insert in the body of our website. This is made up of 9 react components. The css files at this level are bassically definitions of classes and variables that we use across every component. 
The index.js in components and containers folders exports all the react apps in each folder at once so that way we can simplify our imports in any other js file.

### License

Download and use it as you want! (Don't forget to use node and the node modules if you do so though)
