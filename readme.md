# Readme



## Idea

I wanted to display a live feed of my latest code changes in a website. I decided to create a standalone application that will make use of the publicly available [github API](https://api.github.com/) to achieve this.


## Using codeFeed

1. Clone codeFeed as a submodule into your repository.
2. Call `apiEndpoint()` from `main.js` in your code. 

You will get an array of links to the Github API endpoint for your repo(s) along with the latest commit messages for each of your public repos.


## Contributions

Contributions are welcome!

For the sake of maintaining ownership over the project, if a developer contributes code fixes or improvements, I gain copyright control over the contribution. The contributor will still remain the original attributor of the content provided.


## Qualifiers

Right now, codeFeed:
1. Only supports master branch commits
2. Only supports master branch in public repos
3. Does not support scheduling of the process. (Scheduling needs to be handled on the client side)
4. Has the origin time and username hard coded. These two need to be changed to suit the user.