FROM node:18-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update
RUN apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install
RUN npm run build
#RUN npm install && npm run build

# build necessary, even if no static files are needed,
# since it builds the server as well


# expose 5000 on container
EXPOSE 3000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=3000

# start the app
CMD [ "npm", "start" ]