module.exports = {
	"database":"coding_hour_counter",
	"username":"root",
	"password":"",
	"host":"127.0.0.1",
	"dialect":"mariadb",
	"port":3306,
	"socketPath":"/var/run/mysqld/mysqld.sock",
	"pool":{
		"max":5,
		"min":0,
		"acquire":30000,
		"idle":10000
	}
}
