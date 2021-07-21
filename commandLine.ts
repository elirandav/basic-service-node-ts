import * as service from './modules/user/userService'

export async function runWithCLI(){
	const myArgs = process.argv.slice(2);
	console.log(myArgs);
	let output
	if(myArgs.includes('GET')) {
		output = await service.getUsers();
	}else {
		output = 'not supported'
	}

	console.log(output)
	return output
}


(async () => await runWithCLI())();

