# GOOD SLEEP

 A unique app that brings the best of Wysa, CBT, qualified psychologists and soothing sleep stories!
🌙 20+ sleep stories
⭐️ A healthy night time routine
⚡️ Toolkit to help feeling refreshed in the morning and to go back to sleep in night
👩‍💼 Qualified sleep coaches with personalized sleep programs

## Initialization

bash
npm init


## Dependencies

```python
  "dependencies": {
    "bcrypt": "^5.0.1",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.5.2",
    "nodemon": "^2.0.19"
  }
  ```

## Server 
```python
port=3000
app.listen(3000,_=> console.log(`server running on port ${port}`))
```
## Test 
```python
npx nodemon src/index.js
```
## REST APIs 
The REST API to the example app is described below.

### Onboarding Phase
#### Request
```python
post "/userData"
"https://localhost:3000/userData"
```
#### Response
```python
Status: 201 Created 
Content-Type: application/json; charset=utf-8
Content-Length: 228

 {  "message": "You seem to have sleep efficiency of 100%  Thats great 😎......A higher sleep efficiency score means a more refreshing and energizing sleep,which can help you move into your day with a sense of lightness and ease"
}
```

### login
#### Request
```python
post "/login"
"https://localhost:3000/login"
```
#### Response
```python
Status: 201 Created 
Content-Type: application/json; charset=utf-8
Content-Length: 236

{
    "status": true,
    "message": "welcome to good Sleep",
    "token": Token
}

jwt token 
```


## Created By
Sunandini soni
