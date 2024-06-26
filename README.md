# CS465 & CS470
SNHU CS465 - Full Stack Development I
SNHU CS470 - Full Stack Development II

## Final Projects:
 1. A MEAN-stack website for a fictional travel agency using an client-facing Express Handlebars site, REST API, and Angular admin site with a software design document.
 2. A video explaining cloud hosting with AWS and a website successfully using the services to host a full-stack web application adapted for its tools.

## Reflection Journal

- Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

  This project uses an Express page with Handlebars for the client side of the application converted from a standard static multi-page HTML website. This conversion resulted in less code by replacing repeated HTML code with reusable insertable code, faster loading of elements, and easy interaction with the database and server side to send and recieve information. The site is separated into that front end, an API middleware section (to handle HTTP requests, translate information into readable formats by relevant parts of the application, and connect to databases), and the admin site, which is made using the Angular framework. While the Angular framework involves a lot of knowledge and extra setup, it makes running the admin site as an SPA very easy because of its reusable components and command-line interface that can generate parts and set up folders with a few words typed into the console.

- Why did the backend use a NoSQL MongoDB database?

  The MongoDB uses javascript commands that are very easy to integrate with the rest of the MEAN technology. It is a schema-less, fast and flexible database that can handle large amounts of data as such, and has excellent documentation and support because of its popularity.

- How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is a syntax for creating objects with simple keys and values that can easily be used and converted by javascript and other technologies. JSON data is used in this application for formatting data in the application for easy access and working with the MongoDB. A JSON file looks similar to, but is not a javascript file - it is simply a collection of keys and values sort like a more organized easy-to-use spreadsheet or CVS.

- Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

This was done in the beginning of the project when changing from HTML pages to the Express Handlebars (HBS) pages. Some repeated parts of the code were moved into another document, and then inserted with a handlebars tag into the page which greatly reduced the length of the code. The same thing was done with some of the Angular pages as more components were added. The main purpose of this is for organization and to reduce redundancy - this makes the application runtime and compilation faster, and is easier to edit for the programmer.

- Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

The methods used in a RESTful API are the HTTP GET (retrieve data), PUT (update data), DELETE (remove data), and POST (add data) requests. These are separated for added security, and the application can be set to allow these requests only from specific users or servers. Security in API's is extremely important: even if sensitive data is not being stored in the database, it could be tampered with or accidentally altered so that the application does not function as it is needed to. Encryption alone is not safe enough, because an attacker or accident could still delete, alter or retrieve data that is needed for the application to function. The first line of defense is to ensure only authorized and confirmed requests are made to interact with an application's data using these tested endpoints.

- How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This particularly challenging course has increased my confidence in overcoming obstacles and helped me further develop organized plans for solving problems when the development process does not go as expected. MEAN has been challenging for me in the past, and in this class I worked with a lot of outdated material or guides that were missing steps so that a large portion of the work was debugging logic or syntax errors that were difficult to spot and not easily caught by the IDE alone. This meant I had to search for solutions on my own and research different versions of the technologies used to figure out how to work with them, and continuously communicate with my professor, announcements and other students as if it were a real development team and become more comfortable with searching documentation and navigating forums for relevant information. I learned and reviewed how to set up the MEAN technologies, why and when to use them, make use of the command line inteface for more efficient development and version control, and to more fully understand a RESTful API structure. It also helped to practice my skills in software/system design, clean and documented programming, debugging, the planning process for development, and quickly understanding new languages, libraries and technologies to work together with them in one application.

