FROM alpine AS common
# Insert here instructions to build your container, both for dev and production

# Example - install a web server
RUN apk add nginx

FROM common as dev
# Insert here all the dev only tools you need such as debuggers
RUN apk add git

FROM common as prod
# Insert here production only things such as keys or production settings
