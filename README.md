Instructions:
cd into the my-app folder
run npm start
open http://localhost:3000/ in a browser

note: this app is best viewed on a laptop, full screen


Design Principles:
I used a grid, as discussed in the Layout lecture, to improve readability. I also included lots of whitespace, used a clear font, and kept contrast high between the text and background. I placed the most important information (the title and filter/sorting functionality) at the top of the page. I considered Gestalt Principles; the toggles are similar, so they will be perceived as a group. Likewise, the ponies are similar (all in white boxes with name, photo, etc). I picked a color scheme featuring two colors (yellow and pink) to allude to the fantasy of the show. The neutral accents (dark gray) keep the user from feeling bombarded with color.

Data Transfer:
The App passes the list of ponies to the FilteredList component. The FilteredList passes the ponies to the List component. The List component creates an HTML list with the ponies.

User Interaction:
The FilteredList component responds to the user’s interaction with the dropdown menus. When a menu item is selected, the state of the appropriate attribute (kindChoice, groupChoice, sortChoice) is set. The filtering and sorting methods check the state of the attributes.

Goal:
This application enables the user to explore the characters of My Little Pony: Friendship is Magic by kind, group, and year released.