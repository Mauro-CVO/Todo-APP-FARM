from pydantic import BaseModel, Field
from datetime import date, datetime

now = datetime.now()

class Todo(BaseModel):
    title: str = Field(..., min_length=2, max_length= 14)
    description: str = Field(..., min_length=5, max_length=60)
    created_at: str = Field(now.strftime('(%d-%m-%Y)'))