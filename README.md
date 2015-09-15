# nodejs_redis
Simple linking docker containers using docker link functionality; nodejs container is linked to redis container. In real production enviroment, we should go with better service discovery rather docker linking. 
Here are the steps. 
1) Run the redis : docker run -d -p 6379:6379 --name redis-server  redis
2) Links the redis container with nodejs container :: docker run -d -p 80:8080 --link redis-server:rds --name ead ead
3) Fire the request to save name and value pair : curl localhost:?param_name=param1&param_value=value1
