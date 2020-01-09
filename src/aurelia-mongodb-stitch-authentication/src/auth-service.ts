import { Stitch, RemoteMongoClient, UserPasswordAuthProviderClient, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';
import { applicationID } from './appID.json';

export class AuthService {
	authEmail: string;
	authPassword: string;
	public client = Stitch.initializeAppClient(applicationID);

	constructor(){
		console.log("constructor from authService");
	}

	login(authEmail?: string, authPassword?: string): Promise<any> {
		console.log(applicationID);
		return this.client.auth.loginWithCredential(new UserPasswordCredential(authEmail, authPassword));
	}

	isAuthenticated(): boolean {
		return this.client.auth.isLoggedIn;
	}

	logout(): Promise<void> {
		return this.client.auth.logout();
	}
}
