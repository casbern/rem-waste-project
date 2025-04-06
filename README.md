# REM Waste Project
This project is a redesign of the "skip selection" page for [WeWantWaste.co.uk](https://wewantwaste.co.uk/) as part of a front-end React coding challange.

## Goal
The goal was to improve the user experience and visual design while maintaining all functionality, ensuring responsiveness across desktop and mobile devices.

## Approach
The orginal page featured a dark-themed design with a meanless card container imagery to ilustrate the sizes of the skips.
My redesign took a cleaner, more user-friendly approach with:

* A lighter color scheme for better readability
* Simple, intuitive images to represent skip sizes
* Clear visual hierarchy of information
* Improved spacing and layout
* Better feature descriptions for each skip option

### Responsive Design Approach
The redesign was built with a mobile-first approach:

* Flexbox layout that adjusts based on screen size
* Appropriate spacing that scales with viewport width
* Touch-friendly select buttons
* Consistent visual elements across device sizes
* Maintained progress indicator at the top context

### UI/UX Improvements
#### Visual Clarity

* Added better illustrations of skip sizes 
* Used checkmarks for feature lists to improve scanability
* Consistent color coding for buttons and interactive elements
* Improved typography with better constrast ratios

#### Information Architecture

* Added descriptive text about each skip size's ideal use case
* Maintained clear pricing information
* Organized features in a bulleted list for easy comparison

## Technical Implementation
### Data Integration
Data to populate the skip cards was fetched using axios from the provided API endpoint:

```https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft```

The response data was used to dynamically generate the skip options, including:

* Skip sizes 
* Pricing information
* Hire period details

## 
