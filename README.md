# Hacker News App

This project is a custom implementation of the Hacker News at ycombinator [https://news.ycombinator.com/news](https://news.ycombinator.com/news).

## API

[https://hn.algolia.com/api](https://hn.algolia.com/api)

## Deployment on GitHub

- install gh-pages
  npm install gh-pages --save-dev

- add predeploy and deploy script to package.json
  "predeploy" : "npm run build",
  "deploy" : "gh-pages -d build",

- commit and push to github
  git add .
  git commit -m "setup gh-pages"
  git push
