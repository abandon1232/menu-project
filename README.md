# menu-project

This is a project for the course **User Interface Programming**. The task is to design and implement a digital menu for a restaurant.

## Features

- **Responsive Design**: Works on both 13" tablets and mobile phones with different appropriate layouts.
- **Multi-Language Support**: Fully localized in English, Swedish, and Chinese, with dynamic UI translation and language persistence.
- **MVC Pattern**: The code is structured using Model, View, and Controller principles.
- **Drag and Drop**: You can drag dishes into the cart, or use the `+` button as an alternative.
- **Dietary Filters**: Dishes are tagged with dietary information (e.g., Vegetarian, Vegan, Halal, Alcoholic, etc.) and can be filtered.
- **Data Persistence**: Cart items and tip choices are saved using `localStorage`.

## Project Structure

- `js/model.js`: Handles menu data, cart logic, and local storage.
- `js/view.js`: Handles DOM manipulation and UI rendering.
- `js/controller.js`: Handles user events (clicks, drag and drop, filtering).
- `data/menu.json`: Contains all the menu items, their related data, and localized strings (English, Swedish, Chinese).
- `css/style.css`: Styles for both tablet and mobile layout designs.

## How to Run

1. Download or clone the repository to your computer.
2. Because the application loads data using the `fetch()` API, you need to run it through a local web server (e.g., VS Code Live Server, or `python -m http.server`).
3. Open `main.html` in your web browser.


