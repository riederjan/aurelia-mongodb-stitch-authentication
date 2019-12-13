import { Stitch, RemoteMongoClient, UserPasswordAuthProviderClient, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';

export class AuthService {
	applicationID: string;
	authEmail: string;
	authPassword: string;

	show(what) {
		if (what == "appid") {
			console.log(this.applicationID);
		}
		else if (what == "email") {
			console.log(this.authEmail);
		}
		else if (what == "password") {
			console.log(this.authPassword);
		}
	}

	login() {
		// ...
	}
}