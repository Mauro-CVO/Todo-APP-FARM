Configurations for backend container
sudo docker run -p 8000:8000 -e ROOT_URL=http://localhost -e MONGO_URL=mongodb://localhost:27017 --network="host" --rm backend:0.2
