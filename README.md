# cs50_project
MYA Focus website 
# MYA Focus!

## Project main purpose:
*the purpose of this website is to make a timer with a relaxing background and music whether to be for studying, relaxing, meditation or even working.*

### Popup HTML file:
*this file consists of the main code of the website including buttons, scripts, timer javascript code.*

***First: Buttons***
*the buttons are to call the functions written in background.js:library(), woods(), beach(), piano(), meditation(), and cafe(), in order to change the background and the music. However, pay attention you can only change music by clicking pause audio and then click another button to change the music.*

***Second: Timer***
*the timer here is the main purpose of this website. You can select work time from 0 to 120 minutes and break time from 0 to 30 minutes, save it, start it! and that's it!. You can also use the stop button to stop the time completely, but if you want to resume just click start again. the start function starts the count down, the stop function stops the countdown and makes it go to 0, and the reset function resets the timer to start from the beginning.*

***Third: Review***
*the review part is about asking the user whether he/she liked the website or not. The code inplemented uses javascript to call the <p> by its id="feedback" and shows a text to the user depending on the selected button.*

***Forth: background.js***
*this file is called in the html file and the buttons calls by DOM onclick functions from it. All of the inplemented functions in this file change the default background to a different background depending on each function which has a specific src image and loop an audio. Also, in the end of each function there is a DOM document object which stops the current playing audio when pause audio button is clicked.*

***Fifth: style.css***
*In this file I inplemented everything related to the style in the body{} I put the default page of the background, the position, the text-align, and the font-size. In options{} I selected the text-align to center and the size. for the yes and no buttons in the last section in the HTML file I designed them with hover which gives an illusion shadow to the buttons when clicked, selected the colors, and the background color green or red when clicked. for the review sections entirely, I picked the sofia font-family inplemented from Google. I styled the buttons the same as the review section buttons as well. for the input bars workMinutes{} and breakMinutes{} I decided for the border-radius, background-color, border-color to be the same as the background color to not feel any weird differences.*

#### Resources
*Resources used to build this project: https://www.canva.com/
                                       https://www.w3schools.com/default.asp
                                       https://stackoverflow.com/*
