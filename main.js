'use strict'

const fs = require('fs');

class stopwatch{

	constructor(){

		this.path = "data.json";

		this.lastsaved();
		this.sti;
		this.keyboard();
		this.last_sec = ((!!this.last_sec) ? this.last_sec : 0);
		this.autosave();
		
	}

	run(callback){
		let i = ((this.last_sec === 0) ? this.last_sec : this.last_sec+1);
		this.sti = setInterval(function(){
			this.last_sec = i;
			callback(this.convertMS(i * 1000));
			i++;
		}.bind(this), 1000);
		return callback();
	}

	pause(){
		clearInterval(this.sti);
		this.save(this.data, this.path);
		process.stdout.write("pause\n");
	}

	keyboard(){
		var stdin = process.stdin;
		stdin.setRawMode( true );
		stdin.resume();
		stdin.setEncoding( 'utf8' );
		stdin.on('data', function(key){

			if( key === '\u0003'){
				this.save(this.data, this.path);
				process.exit();
			}

			if( key === 'p' ){
				this.pause();
			}

			if( key === 'r'){
				process.stdout.write("resume\n");
				this.run(function(time){
					if(!!time){
						process.stdout.write(time.d + ":" + time.h + ":" + time.m + ':' + time.s + "\n");
					}
				});
			}

		}.bind(this))
	}

	convertMS(ms){
		var d, h, m, s;
		s = Math.floor(ms/1000);
		m = Math.floor(s/60);
		s = (s % 60) + 1;
		h = Math.floor(m/60);
		d = Math.floor(h/24);
		h = h%24;
		return {
			d:d,
			h:h,
			m:m,
			s:s
		};
	}

	autosave(){

		let interval = setInterval(function(){
			this.save(this.data, this.path);
		}.bind(this), 1000 * 6);

	}

	get data(){
		return JSON.stringify({
			last_sec: this.last_sec
		});
	}

	save(data, path){
		try{
			fs.writeFileSync(path, data);
		}catch(err){
			console.log(err);
			return false;
		}
	}
	
	lastsaved(){
		try{
			let dat = fs.readFileSync(this.path, 'utf8');
			let dats = JSON.parse(dat);
			this.last_sec = dats.last_sec;
		}catch(err){
			console.log(err);
			return false
		}
	}

}

let sw = new stopwatch();
sw.run(function(time){
	if(!!time){
		process.stdout.write(time.d + ":" + time.h + ":" + time.m + ':' + time.s + "\n");
	}
});
