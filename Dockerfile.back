FROM python:3.8

COPY ./app /app
COPY ./requirements.txt /app

RUN python3 -m pip install --upgrade pip
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

WORKDIR /app

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host=0.0.0.0", "--reload"]