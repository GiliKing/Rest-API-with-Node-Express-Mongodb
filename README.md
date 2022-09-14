# GOALS LISTING API

<p>This is a backend only application and return goals listings created by authenticated users</p>

## ENDPOINTS

# Public Endpoints
<ol>
    <li>
        Register : /api/users
        method: POST
    </li>

    <li>
        Login : /api/users/login
        method: POST
    </li>
</ol>


# Protected Endpoints
<ol>
    <li>
        getUserData : /api/users/me
        method: POST
    </li>

    <li>
        getAllGoals : /api/users/goals
        method: GET
    </li>

    <li>
        Create A Goal : /api/users/goals
        method: POST
    </li>

    <li>
        getSingleGoals : /api/users/goals/:id
        method: GET
    </li>

    <li>
        UpdateSingleGoals : /api/users/goals/:id
        method: POST
    </li>

    <li>
        deleteSingleGoals : /api/users/goals/:id
        method: POST
    </li>
</ol>

# Usage

## Databae Setup

<p>
Mongodb was specifically use but ou can setup you databse eg MYSQL Or Sqlit by working on the environment file
</p>

## Running

<p>
run the application with <i>npm run server</i>
</p>