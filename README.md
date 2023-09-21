# GOALS LISTING API

<p>This is a backend only application and return goals listings created by authenticated users</p>

## ENDPOINTS

# Public Endpoints
<ul>
    <li>
        Register : /api/users
        <p>method: POST</p>
    </li>
</ul>
<ul>
<li>
    Login : /api/users/login
    <p>method: POST</p>
</li>
</ul>


# Protected Endpoints
<ul>
    <li>
        getUserData : /api/users/me
        <p>method: POST</p>
    </li>
</ul>

<ul>
    <li>
        getAllGoals : /api/users/goals
        <p>method: GET</p>
    </li>
</ul>

<ul>

    <li>
        Create A Goal : /api/users/goals
        <p>method: POST</p>
    </li>
</ul>

<ul>
    <li>
        getSingleGoals : /api/users/goals/:id
        <p>method: GET</p>
    </li>
</ul>

<ul>
    <li>
        UpdateSingleGoals : /api/users/goals/:id
        <p>method: POST</p>
    </li>
</ul>

<ul>
    <li>
        deleteSingleGoals : /api/users/goals/:id
        <p>method: POST</p>
    </li>
</ul>

# Usage

## Databae Setup

<p>
Mongodb was specifically use but ou can setup you databse eg MYSQL Or Sqlit by working on the environment file
</p>

## Running

<p>
run the application with <i>npm run server</i>

or you can test it live with postman using the uri below

https://goals-listings.herokuapp.com/api/users

https://goals-listings.herokuapp.com/api/goals
</p>"# react-counter-app" 
