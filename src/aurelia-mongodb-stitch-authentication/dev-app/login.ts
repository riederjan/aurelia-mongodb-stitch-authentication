import { autoinject } from 'aurelia-framework';
import { AuthService } from 'resources';
import 'style.css';
import { applicationID } from './appID.json';

@autoinject
export class Login {
	authService: AuthService;
	authEmail: string;
	authPassword: string;

	constructor(authService: AuthService){
		const authConfig = {
			applicationId: applicationID
		};
		this.authService = authService;
		this.authService.setAuthConfig(authConfig);
	}

	authenticate(){
		this.authService.login(this.authEmail, this.authPassword)
			.then(() => {
				console.log("Login successfully");
				location.reload();
			})
			.catch(error => {
				// Errorcode 46 on wrong input.
				if (error.errorCode == "46") {
					console.log("Invalid username or password.");
					console.log(error);
				}
				// Errorcode 5 on no input.
				else if (error.errorCode == "5") {
					console.log("Please enter valid informations.");
					console.log(error);
				}
			})
	}

	logout(){
		if (this.authService.isAuthenticated() == true){
			this.authService.logout()
				.then (() => {
					console.log("Logged Out");
					location.reload();
				})
		}
		else if (this.authService.isAuthenticated() == false) {
			console.log("You are not authenticated yet!");
		}
	}

	isAuthenticated(){
		console.log(this.authService.isAuthenticated());
	}
}
