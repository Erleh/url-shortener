## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Links

- Solution URL: [https://github.com/Erleh/url-shortener]
- Live Site URL: []

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I used this project to practice connecting to 3rd party APIs. Coincidentally, while working on this project, the API I had initially used was no longer hosted, as a result, I had to use a different API requiring an API key. 

As to not expose the key, I created my own simple backend API as a proxy to connect to the new Rebrandly API used for shortening links in this project. 

As a result I learned more about CORS which had been giving me an issue connecting and requesting data from front to back-end sources.

As my component count grew with the size of my project, I became more familiar with states and places when not to use them, when they had given me issues in reloading components unintentionally.

And some final recap, I familiarized myself more with React Hooks, namely the useeffect hook to make use of side effects outside of reacts main loop. I made use of this when setting up local storage.

### Extra Notes
My free access only allows me to have 25 link requests a month!

Also, the host of my backend api is also free, which may cause increased loading time for your first requested link, it takes some time for my server to be woken up from its deep rest.