import { Stitch, RemoteMongoClient, UserPasswordAuthProviderClient, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';

export class AuthService {
	appid: string;
	email: string;
	password: string;

	show(what) {
		if (what == "appid") {
			console.log(this.appid);
		}
		else if (what == "email") {
			console.log(this.email);
		}
		else if (what == "password") {
			console.log(this.password);
		}
	}

	login() {
		// ...
	}
}