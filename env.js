const env = {
	database: "coding_hour_counter",
	username: "root",
	password: "",
	host: "localhost",
	dialect: "mariadb",
	pool:{
		max: 5,
		min:0,
		acquire:30000,
		idle:10000
	}
}
module.exports = env;
