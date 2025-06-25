Functional Reqiurement:
needed to use a single table to serve blog post writes and reads. The blog poster neeeds the ability to write and read but the actual blog reader only needs the ability to read. The architecture of this app will have two "deployments", a blog reader and a blog poster which will share a database table in Dynamodb. Splitting up the architecture in this way provides more security for the blog posting app so that only the blog poster will be aware of that url. We can also control the security of the blog reader app so that it only has read permissions from the database.


https://docs.amplify.aws/react/build-a-backend/data/connect-to-existing-data-sources/connect-external-ddb-table/