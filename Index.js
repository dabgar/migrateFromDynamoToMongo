const MigrationJob = require('dynamodb-mongodb-migrate');
 
let sourceConnectionOptions = {
    region: '#######',
    accessKeyId: '#########',
    secretAccessKey: '########'
};
let targetConnectionOptions = {
    host: '######',
    user: '######',
    password: '####'
};
 
const migrationJob = new MigrationJob('DYNAMODB_TABLE_NAME', 'MONGODB_COLLECTION_NAME', 'MONGODB_DATABASE_NAME', sourceConnectionOptions, targetConnectionOptions, 50, 50);
 
migrationJob.run()