# CS465
SNHU CS465 - Full Stack Development I

Final Project: A MEAN-stack website for a fictional travel agency with a client-facing and admin site.

- Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

  This project uses an Express page with Handlebars for the client side of the application converted from a standard static multi-page HTML website. This conversion resulted in less code by replacing repeated HTML code with reusable insertable code, faster loading of elements, and easy interaction with the database and server side to send and recieve information. The site is separated into that front end, an API middleware section (to handle HTTP requests, translate information into readable formats by relevant parts of the application, and connect to databases), and the admin site, which is made using the Angular framework. While the Angular framework involves a lot of knowledge and extra setup, it makes running the admin site as an SPA very easy because of its reusable components and command-line interface that can generate parts and set up folders with a few words typed into the console.

- Why did the backend use a NoSQL MongoDB database?

  The MongoDB uses javascript commands that are very easy to integrate with the rest of the MEAN technology. It is a schema-less, fast and flexible database that can handle large amounts of data as such, and has excellent documentation and support because of its popularity.

- How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is a syntax for creating objects with simple keys and values that can easily be used and converted by javascript and other technologies. JSON data is used in this application for formatting data in the application for easy access and working with the MongoDB. A JSON file looks similar to, but is not a javascript file - it is simply a collection of keys and values sort like a more organized easy-to-use spreadsheet or CVS.

- Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

This was done in the beginning of the project when changing from HTML pages to the Express Handlebars (HBS) pages. Some repeated parts of the code were moved into another document, and then inserted with a handlebars tag into the page which greatly reduced the length of the code. The same thing was done with some of the Angular pages as more components were added. The main purpose of this is for organization and to reduce redundancy - this makes the application runtime and compilation faster, and is easier to edit for the programmer.

