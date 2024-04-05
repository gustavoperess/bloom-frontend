<h1 align="center">
  BLOOM
</h1>

Check the deployed version: 
  [BLOOM](https://bloom-frontend-vryp.onrender.com/).

## Features

- **Main page**: View requests for assistance and make monetary offers to help . 
- **Browse**: Explore users' profiles, review their requests for help, and see the plants they own. 
- **Make a help request**: Need someone to care for your plants? No problem! Create a help request with a start and end date, along with the amount you're willing to pay.
- **Live message chat**: Engage with other users in real-time through a live message chat powered by Socket.IO.
- **Add Plants**: Enrich your collection by adding a plant from an external API featuring over 3,000 plant varieties.
- **Manage your requests**: Track your requests, review offers received and made, and manage them by accepting, rejecting, or deleting existing requests.
- **User information**: Update your personal information and enhance your profile with a photo.


Check the deployed version: 
  [BLOOM](https://bloom-frontend-vryp.onrender.com/).

# Bloom Frontend

## Structure

This repo contains two applications:

- A frontend React App.
- A backend in flask.
- A postgress database configured on the backend.


# Bloom Frontend setup

1. Clone this repository. 

```bash
    git clone https://github.com/gustavoperess/bloom-backend
```

2. Create a .env file under the main project directory to connect with your backend:

```bash
    echo "VITE_BACKEND_URL='http://localhost:5001'" > .env
```

3. Install the assocated packages and run the web app.

```bash
    cd bloom-frontend
    npm install
    npm run dev
```

# Bloom backend setup

1. Clone the below repository. 

```bash
    git clone https://github.com/gustavoperess/bloom-backend
```

2. Follow the below instructions:

```bash
    # Navigate to your repository
    cd bloom-backend
    # Install dependencies and set up the virtual environment
    pipenv install
    # Activate the virtual environment
    pipenv shell
```

3. Create a test and development database (This assumes you have postgres) . 

```bash
   createdb BLOOM
   createdb BLOOM_test
   In the BLOOM_test database, run the following SQL query: "CREATE USER postgres WITH SUPERUSER PASSWORD 'postgres';"
```

4. Seed the development database (ensure you have run `pipenv shell` first) . 

```bash
   python seed_dev_database.py
```

5. create .env file in main directory. 

```bash
   echo "JWT_SECRET_KEY='super-secret-key'" > .env
```

6. Run the tests (with extra logging). 

```bash
   pytest -sv
```

7. Run the server. 

```bash
   python app.py
```