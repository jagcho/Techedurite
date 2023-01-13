# Techedurite Assignment requirement { line 1 - line 40 }

Setup Node project and fresh mysql database

Create two registration page, customer registration and admin registration with following fields

First Name

Last Name

Email

Password

If user is registered with customer registration page, he will be assigned customer role

If user is registered with admin registration page, he will be assigned admin role

Default auth feature of email verification should be there for both registration page

Create another page for admin login with following fields

Email

Password

This page will allow admin to login

If users registered with customer registration page tries to login, app should show an error message "You are not allowed to login from here"


Instructions:

There is no time limit to finish the practical. 

You need to submit practical on the same day till 12:00 AM

It’s not mandatory to finish the whole practical, your practical will be reviewed based on how much you have completed and time you have taken to finish it. 

For any concerns during your practical you can call us. 


# Implemented By Jagadish M { Detailed Description shared below}

tech stack Used and idea explanation.

1. Nodejs
2. DBMS (Mongodb) i.e Nosql 
3. Postman for Frontend 
4. ExpressJs for Routing (Http methods) and  used middleware for repetation of code for commonvalidation of user input.
5. dependencies are present in package.json file 
6. Login page implementation is done simple as requirement ,but can use jwt  for Authentication of user.
7. email  validation done by regex and unique email is checked by db query before creation of user in database.
8. I have attached postman Collection to mail . so Debugger can import to postman and debug the code.






