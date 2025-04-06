# REM Waste Project

This project is a redesign of the "skip selection" page for [WeWantWaste.co.uk](https://wewantwaste.co.uk/) as part of a front-end React coding challenge.

# Goal
The goal was to improve the user experience and visual design while maintaining all functionality and ensuring responsiveness across both desktop and mobile devices.

# Design and UI/UX Approach
My redesign focused on delivering a UI that is clean, easy to use, and responsive.  
To achieve that:
- I chose a light background color theme to enhance readability and integrate images more seamlessly into the design.
- In line with UI principles, I used a single accent color for interactive elements like buttons, guiding the user through the flow.
- I implemented responsive CSS techniques to adapt to various screen resolutions and tested the UI on several different devices.
- I prioritized organizing key information for each Skip, allowing users to quickly see what matters most while still being able to access additional details when needed.
- I worked with data from the API and mimicked waste-related data coming from the user in order to filter out only the usable Skips.

# Technical Implementation
Alongside React 19, I used Tailwind CSS, a framework I'm familiar with from past projects. I find it versatile and well-suited for creating responsive designs efficiently.

Skip card data was fetched using the `axios` library from the following API endpoint:  
`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`

All relevant attributes from each API item were used in the UI to display information about the respective Skip or to disable it when appropriate.

I extended the function that provides data for each Skip to merge the API data with additional information from the `data/skipExtraData.js` file. This included fields such as descriptions, image paths, and fallback prices (used when the price from the API was `null`). In the future, this extra data could come from a database or a different API, in which case the function would be refactored and moved out of the `App` component.

To support the "disabled Skip" functionality, I relied on data representing heavy waste categories selected by the user.  
This data is located in the `data/heavyWasteSelection.js` file.  
You can set that array to an empty list to see how the UI reacts accordingly.

# Running the Project Locally
1. Clone the repository  
2. Install dependencies with `npm install`  
3. Start the development server with `npm start`  
4. View the project at `localhost:3000`

# Demo
A live demo of the redesigned page is available at:
- [rwproject.netlify.app](https://rwproject.netlify.app/)
- [CodeSandbox](https://codesandbox.io/p/github/casbern/rem-waste-project/main?import=true)