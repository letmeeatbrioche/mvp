# 🐱 Kitty Committy 🐱

## 👀 Watch your cats practice for the big recital! 💃

## Introduction
This a project where I was tasked with creating a full-stack application over three non-full days.
So, I decided to make a minimul viable product for a pseudo-game in which you watch, hear, and interact with the cats on the screen.
This is also my first time making any kind of game, especially one with graphics, as a long-time goal for a passion project. 

## 🤔 What does the app do? 
This app is for people who either like cats, pixel art, pixel games, simple browser-based games, and/or cute aesthetics.
* Chill to some cute and happy, but calm music and watch a bunch of pixel cats doing their thing.
* Generate random names for the cats.
* Name the cats yourself with your names being saved and able to be generated at random.
* Click the cats and hear them make unique sounds like meows, trills, and purrs.

## 💾 Tech stack (you can include logos)
* Javascript
* MongoDB
* HTML5
* React.js
* Node.js
* Express.js

## 🏋️‍♀️ Technical Challenges and research that you anticipated
* Since I had never created a graphics-intensive application like this before or worked much with animating anything, I anticipated that I would have a lot to research and sure enough, getting started with the basics of what I wanted my app to do was very challenging and took a great chunk of my time working on this.
* Figuring out what to research and researching how I should go about implementing the main feature was also very challenging and time-consuming.

## 😱 Challenges that were unexpected
* Moving sprites across the screen with their respective walking animations. I was using purely Javascript and React to implement this app, and I didn't anticipate the movement from point A to point B to be as challenging as it was. It was challenging enough that I had to stop and pivot my app to do something else because I was spending so much time on it.
* I learned that it would probably have been more beneficial to research what I wanted to do with the tech stack I was planning to use. I think then I would have been pointed in the right direction faster from the very beginning.

## Video Demo / Screen shot walkthrough of the app
## [[[[[[INSERT DEMO HERE ]]]]]]
* The minimum viable product that I was able to complete was an app in which the user could watch individual cat sprites animate in a dancey sort of way.
* The user story from that became the user being the head of the Kitty Committy where the cats are practicing their choreographed dance routines before a recital.
* The user can then give the cats names through their own input or random ones.
* Interacting (clicking) on each cat will have it make a different sound.

## ⚙ How does the app work?
* The cats are loaded from a sprite sheet with looping animations.
* When a user double-clicks on a cat, they are able to submit a name for that cat. The name is then saved to the database via the back-end server.
* When a user clicks the "Generate Random Names" button, the server gets 5 random names from the database and those names are then assigned to a cat. If a user submits a name, it has a chance of showing up again and assigned to a random cat.

## 📚 What research was required?
* Assets to use
* How to use spritesheets in Javascript
* How to animate sprites from spritesheets
* How to add audio to a Javascript file, play, and loop it

# Workflow and Key lessons from your team - specifically those related to: Agile, CI/CD, testing, working with external stakeholders, ticketing, and user stories.
* Your git workflow, style guides, commit guides, etc
* What did you learn from the process
* What were key takeaways from stand ups, code reviews, etc
* Writing tests
* Link to your trello board, discuss completed tickets

## ➕ What additional features do you plan to add, how do you plan to implement those features?
* Random sprite movement across an area with walking animations
* Click interation to change the cats' animations
* Saving of users and their cats and cats' names
* User choice of cat(s) and how many
* User choice of room or room color - user can change room later
* Specific cat sounds based on the specific cat
* Cat sounds differ at random within the sounds specified by the particular cat, or based on the specific user interation
* Toggle background music
* Cats have different idle animations based on the specific cat
* Cats sleep with sleep animations randomly and wake up after some time & click to wake up cat function
