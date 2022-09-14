# GOALS LISTING API

<p>This is a backend only application and return goals listings created by authenticated users</p>

## ENDPOINTS

# Public Endpoints
<ul>
    <li>
        Register : /api/users
        <p>method: POST</p>
    </li>

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

    <li>
        getAllGoals : /api/users/goals
        method: GET
    </li>

    <li>
        Create A Goal : /api/users/goals
        <p>method: POST</p>
    </li>

    <li>
        getSingleGoals : /api/users/goals/:id
        method: GET
    </li>

    <li>
        UpdateSingleGoals : /api/users/goals/:id
        <p>method: POST</p>
    </li>

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
</p>