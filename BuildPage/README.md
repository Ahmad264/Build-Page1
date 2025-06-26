# BuildPage
Functionality Implemented:
1. Mini Projects
Route: GET /api/mini-projects

Purpose: Fetch and return all mini project data from the database.

Access: Public (no authentication or club check).

Response: JSON array of mini project objects.

Tested Using: Postman and curl

2. Major Projects
Routes:

GET /api/major-projects – View all major projects.

POST /api/major-projects – Add a new major project.

Access Logic:

First 3 projects are free for everyone.

Other projects are locked (i.e., isFree: false) and should only be accessed/booked by club members.

Database Fields: title, description, isFree (Boolean)

3. Booking Log System
Route: POST /api/booking

Purpose: Log booking attempts for major projects.

Fields: projectId, userEmail

Flow:

If the project is free, booking is successful.

If the project is locked, booking is logged with status "pending" (indicating membership is required).


Tech Stack Used
Backend: Node.js + Express.js

Database: MongoDB

ODM: Mongoose

Tools: CORS, Express JSON Parser



Directory Structure :
build_page/
├── app.js
├── config/
│   └── db.js
├── models/
│   ├── Mini.js
│   ├── Major.js
│   └── Booking.js
├── routes/
│   ├── mini.js
│   ├── major.js
│   └── Booking.js
├── controllers/
│   ├── miniController.js
│   ├── majorController.js
│   └── bookingController.js



