# anytype-publish-server

## Local development environment

### 1. Mongo and Redis servers
First of all, you need to run mongo and redis servers:

```bash
cd docker
docker-compose up -d
cd ..
```

Docker will download and run two containers:
 - mongo-anytype-publish-server - available at localhost:27017
 - redis-anytype-publish-server - available at localhost:6379

Mongo connection URL: mongodb://anytype_publish_server:anytype_publish_server@localhost:27017/anytype_publish_server?authSource=anytype_publish_server

Redis Connection URL: redis://localhost:6379

### 2. AWS s3 public bucket

Prepare your own AWS s3 bucket, make it public and issue Access Key for your account.
Nice how-to: https://medium.com/@shamnad.p.s/how-to-create-an-s3-bucket-and-aws-access-key-id-and-secret-access-key-for-accessing-it-5653b6e54337

My security credentials: https://us-east-1.console.aws.amazon.com/iam/home?region=eu-central-1#/security_credentials

Access key wizard: https://us-east-1.console.aws.amazon.com/iam/home?region=eu-central-1#/security_credentials/access-key-wizard

How to make the S3 bucket public - ask Google/Gemini/ChatGPT/whatever...

### 3. Adjust service config

Edit [./etc/anytype-publish-server.yml](etc/anytype-publish-server.yml)` and adjust the following parameters to your
specific:
- s3Store
  - region (your AWS region, example: eu-central-1)
  - bucket (your bucket name, example: anytype-gobackend-test-123)
  - credentials
    - accessKey (your AWS account access key)
    - secretKey (your AWS account access key secret)
- gateway
  - publishFilesUrl (your bucket public URL, example: https://anytype-gobackend-test-123.s3.eu-central-1.amazonaws.com

### 3. Build and run the service

Next, build `anytype-publish-server` executable:
```bash
make build
./bin/anytype-publish-server
```