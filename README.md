# docker-swarm-node

a simple scaling example for using swarm and scaling a simple applicartion 

```

docker swarm init (after building all images)

docker stack deploy -c docker-compose.yml swarmnodeapp

docker service scale swarmnodeapp_nodejs=10

docker service ls 

```


