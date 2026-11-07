# To-Do List App

A full-stack task manager with a React frontend, an Express API, and MongoDB storage.

## Requirements

- Node.js and npm
- MongoDB running locally or a MongoDB connection string

## Configuration

Create `backend/.env` if it does not exist, and set:

```env
MONGO_URI=mongodb://127.0.0.1:27017/todo-app
PORT=5000
```

`PORT` is optional; the backend defaults to port `5000`. Keep credentials out of source control.

## Install and run

Install dependencies once in each application directory:

```powershell
cd backend
npm install
```

In a second terminal:

```powershell
cd frontend
npm install
```

Start the backend from the `backend` directory:

```powershell
npm start
```

Start the frontend from the `frontend` directory:

```powershell
npm start
```

Open [http://localhost:3000](http://localhost:3000). The frontend sends API requests to `http://localhost:5000/api/tasks`.

## API

- `GET /api/tasks?search=query` - list tasks, optionally searching titles and descriptions
- `POST /api/tasks` - create a task with a title and optional description
- `PUT /api/tasks/:id` - update task details or status (`pending`, `in-progress`, or `completed`)
- `DELETE /api/tasks/:id` - delete a task
