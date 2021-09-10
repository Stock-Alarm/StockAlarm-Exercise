# Getting started

## Prerequisites

* Node.js

## Setup

1. Install Firebase CLI tool ([See guide here](https://firebase.google.com/docs/cli#install_the_firebase_cli))
2. `firebase login` -> login with the email address we've been using to have contact
3. `firebase projects:list` -> check if `exercise-<yourname>` is present. If not, contact us!
4. `firebase use exercise-<yourname>`

## Running

`npm start`

You can immediatly start working in the frontend & backend. Both service reload whenever you make an edit.

# Tasks

Please create a commit for every exercise.

When you open the app you'll see an unstyled page showing two companies whose stock prices change every 5 seconds. You can find the [database here](http://localhost:4000/database/exercise-foobar-default-rtdb/data) (once the emulator is running).

We want you to do three things:

1. Style the page
2. Create it so that you can navigate to a company's page
3. Allow user to set alarms
4. When alarms are triggered notify user through webapp

## Exercise 1 - Style the page

We want you to make the page look like this:

![Exercise 1 completed](exercise_1_completed.png)

## Exercise 2 - Navigate to a company's page

When a user clicks on of the companies they should be navigated to a page specifically for the company. It should look like this:

![Exercise 2 completed](exercise_2_completed.png)

## Exercise 3 - Allow users to set alarms

Allow users to set an alarm. It should look like this:

![Exercise 3 completed](exercise_3_completed.gif)

## Exercise 4 - Notify users in webapp when alarms are triggered

Give the user a [web notification](https://developer.mozilla.org/en-US/docs/Web/API/notification) when an alarm is triggered while the web app is open or if it has been triggered while the web app has been closed. It should look like this:

![Exercise 4 completed](exercise_4_completed.gif)

## Notes

* Don't worry about users and authenticating. Just assume there is, and will ever be, just 1 user, which is you.

# Submitting

Please create a **private** fork. Do **not** create a pull request to the original repository. Instead:

1. Invite your contact person to your private repository
2. Create a PR within your own repo. The base branch should be this repo. The new branch (name it whatever you like) should be your submitted code.
3. Add your contact person as a reviewer.