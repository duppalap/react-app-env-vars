FROM node:lts-alpine

USER node
ARG MAX_OLD_SPACE_SIZE=8192
ENV NODE_OPTIONS=--max_old_space_size=$MAX_OLD_SPACE_SIZE

ARG version_info
ENV REACT_APP_VERSION_INFO=${version_info}

ARG NODE_ENV
ENV REACT_APP_ENV=${NODE_ENV}

## set the working directory of the container
WORKDIR /app

## COPY the package.json into the above defined working directory
COPY package.json ./
USER root
RUN npm install
## COPY the rest of the code into the working directory
COPY . .
RUN npm run build

EXPOSE 9000
# RUN apk add dumb-init
# CMD ["dumb-init", "node", "server.js"]
CMD ["node", "server.js"]

#CMD ["npm", "start"]
