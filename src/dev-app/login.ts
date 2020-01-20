import { autoinject } from 'aurelia-framework';
import { AuthService } from 'resources';
import 'style.css';
import { applicationID } from './appID.json';

@autoinject
export class Login {
	authService: AuthService;
	authEmail: string;
	authPassword: string;
	consoleOutput0 : any;
	consoleError: any;
	btnLoginLogoutString: string;
	authenticationFunction: string;


	constructor(authService: AuthService){
		const authConfig = {
			applicationId: applicationID
		};
		this.authService = authService;
		this.authService.setAuthConfig(authConfig);

		if (this.authService.isAuthenticated() == false) {
			this.btnLoginLogoutString = "Login";
			this.authenticationFunction = "login";
		}
		else {
			this.btnLoginLogoutString = "Logout";
			this.authenticationFunction = "logout";
		}
	}

	authenticate(){
		if (this.authenticationFunction == "login") {
			this.authService.login(this.authEmail, this.authPassword)
				.then(() => {
					location.reload();
					this.consoleOutput0 = "Successfully logged in";
				})
				.catch(error => {
					this.consoleOutput0 = "Login failed with error:";
					this.consoleError = error + ": ErrorCode: " + error.errorCode;
				})
		}
		else if (this.authenticationFunction == "logout") {
			if (this.authService.isAuthenticated() == true){
				this.authService.logout()
					.then (() => {
						location.reload();
					})
			}
			else if (this.authService.isAuthenticated() == false) {
				this.consoleOutput0 = "You are not authenticated yet!";
				this.consoleError = null;
			}
		}

	}

	isAuthenticated(){
		this.consoleOutput0 = "Authentication State: " + this.authService.isAuthenticated();
		this.consoleError = null;
	}
}
