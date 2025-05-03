from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import json
import os

app = FastAPI()

# Root route
@app.get("/")
def read_root():
    return {"message": "Welcome to my mini bread API"}

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load bread data from JSON
@app.get("/api/bread")
def get_bread():
    with open("data.json", "r") as f:
        bread_data = json.load(f)
    return bread_data

# Serve images from static folder
@app.get("/images/{filename}")
def get_image(filename: str):
    file_path = os.path.join("static-webp", filename)
    if os.path.exists(file_path):
        return FileResponse(file_path)
    return {"error": "File not found"}
