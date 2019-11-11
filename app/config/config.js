module.exports = {
	"database": "coding_hour_counter",
	"username": "root",
	"password": "",
	"host": "127.0.0.1",
        "port": 3306,
	"protocol": "tcp",
	"pool":{
		"max": 5,
		"min": 0,
		"acquire": 30000,
		"idle": 10000
	},
	"dialect": "mariadb",
	"dialectOptions":{
		"socketPath": "/var/run/mysqld/mysqld.sock",
		"supportBigNumbers": true,
		"bigNumberStrings": true
	},
	"define": {
		"underscored": false,
		"freezeTableName": false,
		"syncOnAssociation": true,
		"charset": 'utf8',
		"collate": 'utf8_general_ci',
		"classMethods": {method1: function() {}},
		"instanceMethods": {method2: function() {}},
		"timestamps": true
	}
}
