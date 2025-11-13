
# Hospital Management System

The HMS-System (Healthcare Management System) is a full-stack web application that helps manage hospital operations digitally. It connects admins, doctors, and patients in one platform for efficient healthcare management. The system allows patient registration, doctor management, appointment booking, and secure authentication, using React for the frontend, Node.js and Express for the backend, and MongoDB for data storage.


## Installation
  
Clone the Repository [HMS-Project Repository]



```bash
  cd frontend
  npm install 
  
```
```bash
  cd backend
  npm install 
```
    
## Set up environment variables
Create a .env file inside /backend:

PORT=8080

DB_URL=your_database//your_localhost/your_db_name

SECRET_KEY=your_secret_key

USER_NAME=admin

PASSWORD=your_password

EMAIL=your_email@example.com


## Start the Server
First run Backend using 
```bash
    npm start
```
After run Frontend 
```bash
    npm start
```
## Actions 
Home page

![Home Page](https://github.com/user-attachments/assets/9f4ee5be-e77f-4e40-8e14-3031eba53aef)

Login page 

 ![Image](https://github.com/user-attachments/assets/5d6be284-1eb2-4d43-bb03-e610875f3844)

Sign up page

 ![Image](https://github.com/user-attachments/assets/9c190a26-55bc-4144-9599-14310bc0bea0)

Doctors page

 ![Image](https://github.com/user-attachments/assets/e3b73840-4114-448f-9948-790889722950)

Ambulance page

 ![Image](https://github.com/user-attachments/assets/3119a67d-9a49-426e-b720-57d8ffd6b0d8)




## API Overview

Example endpoints:

  POST /login — Authenticate user

  GET /doctor/list — Get all doctors

  POST /patient/register — Register new patient

  GET /appointments — View appointments
## Notes

Make sure MongoDB is running locally before starting the backend.

Update .env values as per your environment.

Use npm install in both frontend and backend folders before running.
## Authors

- [@octokatherine](https://github.com/vijay03102001)


## License

This project is open source under the MIT License.
