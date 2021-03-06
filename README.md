# hosted link

https://crud-app-zuri.herokuapp.com

# Routes

get '/' => redirects to '/users'

get '/users' => When there is no error, this route returns a json object with properties message and data. Message is the string "success" and data is an object containing all the users in the database. When there is an error it returns a json object with the property message. The message contains the error.

post '/user' => The body of this route should contain information about the user that you want to add. When there is no error, this route creates a new user and returns a json object with properties message and data. The message is the string "new user created successfully" and the data is an object containing all the information about the user that was just created. When there is an error it returns a json object with the property message. The message contains the error.

get '/user/:id' => When there is no error and the user exists, this route returns a json object with properties message and data. Message is the string "success" and data is an object containing all the information about the user that has the id in the url. If the user does not exist e.g is deleted, it returns a json object with the property message. Message is the string "user not found". When there is an error it returns a json object with the property message. The message contains the error.

put 'user/:id' => The body of this route should be the information you want to change. When there is no error and the user exists, this route returns a json object with the property message. Message is the string "user successfully updated". If the user does not exist e.g is deleted, it returns a json object with the property message. Message is the string "user not found". When there is an error it returns a json object with the property message. The message contains the error.

delete 'user/:id' => When there is no error and the user exists, the user gets deleted from the database and a json object is returned with the property message. Message is the string "user deleted successfully". If the user does not exist e.g has already been deleted, it returns a json object with the property message. Message is the string "user not found". When there is an error it returns a json object with the property message. The message contains the error.
