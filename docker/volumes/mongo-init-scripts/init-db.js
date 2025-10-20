db = db.getSiblingDB('anytype_publish_server');
db.createUser({
    user: 'anytype_publish_server',
    pwd: 'anytype_publish_server',
    roles: [
        { role: 'readWrite', db: 'anytype_publish_server' }
    ]
});

print('Created DB "anytype_publish_server" and user "anytype_publish_server" with "readWrite" role in "anytype_publish_server" database');
