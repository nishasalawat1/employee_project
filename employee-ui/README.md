# Employee project

A simple integration between a Django API and a React App as a result of a demo employee management project.

This project consists of two internal projects:

- *employee_project*: the Django project containing the REST API along with all the backend code;
- *employee-ui*: the React project with all the Node dependencies, settings and things related to the frontend.

## Run it locally

In order to run the projects locally you need to have Node, npm and `python3` installed on your machine.

### Running the Django project

First, create a Python virtual environment to isolate the projects:

```bash
python3 -m venv employee_env
```

Then, activate it:

```bash
source employee_env/bin/activate
```

`Then` clone the project from GitHub:

```bash
git clone https://github.com/nishasalawat1/employee_project
```

Add the Django dependencies:

```bash
pip install django djangorestframework django-cors-headers
```

Finally, `cd` into the _employee_project_ folder and run the project:

```bash
python manage.py runserver
```

That's it!

Access the address http://localhost:8000/api/employee/ and check if the API is up.

### Running the React project

First, `cd` the _employee-ui_ directory and run:

```bash
npm install
npm start
```
(Make sure your django server should be running in another terminal)

Access the UI at http://localhost:3000/ 
