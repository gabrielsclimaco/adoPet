FROM node

RUN mkdir app/
ADD package.json app/package.json
WORKDIR app/
RUN yarn
ADD . app/

EXPOSE 8081

CMD ["yarn", "run", "dev"]
