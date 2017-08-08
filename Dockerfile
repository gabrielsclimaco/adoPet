from node

RUN mkdir -p server/
ADD package.json app/package.json
WORKDIR server/
RUN yarn
ADD . server/

EXPOSE 3000

CMD ["yarn", "run", "dev"]
