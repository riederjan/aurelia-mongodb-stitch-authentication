import { Stitch, RemoteMongoClient, UserPasswordAuthProviderClient, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';

export class AuthService {
	applicationID: string;
	authEmail: string;
	authPassword: string;
	authenticated: boolean = false;
	client: string;

	show(what) {
		if (what == "appid") {
			console.log("appid: " + this.applicationID);
		}
		else if (what == "email") {
			console.log("email: " + this.authEmail);
		}
		else if (what == "password") {
			console.log("password: " + this.authPassword);
		}
		else if (what == "authstate") {
			console.log("authstate: " + this.authenticated);
		}
	}

	login() {
		let client = Stitch.initializeAppClient(this.applicationID);
		client.auth
			.loginWithCredential(new UserPasswordCredential(this.authEmail, this.authPassword))
			.then(authedUser => {
				console.log("You logged in successfully!");
				this.authenticated = true;
			})
			.catch(error => {
				// Errorcode 46 on wrong input.
				if (error.errorCode == "46") {
					console.log("Invalid username or password.");
				}
				// Errorcode 5 on no input.
				else if (error.errorCode == "5") {
					console.log("Please enter valid informations.");
				}
			});
	}

	logout() {
		
	}

	updateAuthenticated() {
		let wasAuthenticated = this.authenticated;
	}
}