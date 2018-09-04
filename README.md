# Tech Stack
- Python 3+
    > We can add in pipenv or virtualenv once we start hitting pain points or the time is right.
- Django
- React (with bootstrapping using [CRA](https://github.com/facebook/create-react-app))
    > We can customize frontend build configuration anytime later. I just want to get started and CRA is perfect for that. The focus is prototyping. We can also introduce typescript when the time seems right for learning and productivity.
- [Ant Design](https://ant.design/)
    > I am trying this out to have a set of components for rapid prototyping. If it isn't achieving the goal of rapid prototyping, we can rediscuss.

# Running Locally
To run locally, you will need to run the backend and frontend separately. The front end is proxied to the backend in. Once the servers are running, you can launch the frontend to start `open http://localhost:3000`.
## Running Backend Server
`python manage.py runserver`
## Running Frontend Server
1. `cd frontend`
2. `npm install`
    > You only need to run this the very first time and every time there are npm package updates or additions.
3. `npm start`
