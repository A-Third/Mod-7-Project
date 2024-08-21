
# Triple A

Created by America Xicotencatl, and Andii Zhu.

## 🚀 Mission statement

Our application, Triple A is for Art users. It allows users to find a painting based on a genre.

## API & React Router

This application will use the [name of API] API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: (https://api.artic.edu/api/v1/artworks)

- https://api.artic.edu/api/v1/artworks
    - This will fetch an array of artwork objects
      - Id
      - Title
      - Image_id


- https://api.artic.edu/api/v1/artworks/{id}
    - This will fetch a single artwork object
    - Id
    - Title
    - Short_description
    - Medium_display
    - Place_of_origin
    - image_id


- https://api.artic.edu/api/v1/artworks/search?q={query}
  - This will fetch a list of artworks that relate to the search query
    - Title


## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

- Users will be able to see all artwork
- Users will be able to click on a piece of art in the grid, taking them to the details page for that piece of art.
- Users will be able to view additional details for a single piece of art
- Users will be able to search for artwork titles related to a search term.


## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

- Users will be able to search based on
    - id
    - image_id
- Users will be able to scroll through the paintings horizontally 
- Users will be able to favorite their paintings. 
- Users will be able to change the color scheme of the website from light mode to dark mode
- Users will be able to update the background of their paintings. 


## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1** Wednesday
- [ ] Create file made by Vite - React for this project 
- [ ] Able to generate a page of artwork
  - [ ] Create a component folder
  - [ ] Create ArtWork page
  - [ ] Made a fetch to get multiple resources
  - [ ] Used the `useState` hook 
  - [ ] Used the `useEffect` hook 

- [ ] Artworks can be seen on page
  - [ ] Passed the artWork Page to be seen in App.jsx


**Day 2** Thursday
- [ ] Create a button to give details about a specific painting in another page; 
- [ ] Made a fetch to get a single specific resource
  - [ ] Id
  - [ ] Title
  - [ ] Short_description
  - [ ] Medium_display
  - [ ] Place_of_origin
  - [ ] image_id
- [ ] Used the 'useState' hook
- [ ] Used the `useEffect` hook

**Day 3** (MVP due by the end of the day) Friday
- [ ] Create a form 
- [ ] Used the 'useState' hook
- [ ] Used the `useEffect` hook
- [ ] Form takes you to a new generate page of artworks based on the search request: (currently just title)


**Day 4** Monday
- [ ] Begin creating any features possible
  - [ ] search based on
    - id
    - image_id

- [ ] Style the page
  - [ ] Navigation bar fits cleanly on mobile and desktop
  - [ ] Navigation visually indicates what page you are on
  - [ ] Scroll through the paintings horizontally 
  - [ ] Site has a primary color
  - [ ] Site has a secondary color
  - [ ] Site has an accent color
    - This is for things like buttons, links, etc.
  - [ ] Buttons have altered visual states for hover, active, and focus
  - [ ] Links have altered visual states for hover, active, and focus

**Day 5** Friday
- [ ] Create presentation and demo video


## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

Wifeframe link : https://www.figma.com/design/TsFij5mRdot1W7x4924RbP/Untitled?node-id=1-4&t=in8AdVfrAkrOMp5y-0


[Wireframe for page 1]

[Wireframe for page 2]
