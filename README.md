# How to load environment variables runtime in React App

1. Install all the packages

```
npm ci
```

2. Run this command to build an optimized production version

```
npm run build
```

3. Run the following command to build a docker image with name "boost-webapp-img". The NODE_ENV argument will change based on the environment.

```
docker build --build-arg NODE_ENV=local -t boost-webapp-img .
docker image ls
```

4. Now using the above image create a docker container

```
docker run -d -p 9000:9000 --name boost-webapp duppalapati3/boost-webapp-img
docker ps -all
```

---

**NOTE**

If you want to check the contents of the running docker conatiner use the following command

```
docker exec -it duppalapati3/boost-webapp sh
```
