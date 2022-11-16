from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from routes import transactions as transactions_API
from routes import categories as categories_API

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(transactions_API.router)
app.include_router(categories_API.router)


@app.get('/sanity')
def root():
    return {"message":"Server is up and running"}


if __name__ == "__main__":
    uvicorn.run("server:app", host="localhost", port=8000, reload=True)