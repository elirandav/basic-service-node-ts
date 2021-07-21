import * as service from './modules/user/userService'

const myArgs = process.argv.slice(2);
console.log(myArgs);

(async () => {
	if(myArgs.includes('GET')) {
		console.info(await service.getUsers())
	}else {
		console.info('not supported')
	}
})();

