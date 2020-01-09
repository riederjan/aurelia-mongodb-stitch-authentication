import { Stitch, RemoteMongoClient, UserPasswordAuthProviderClient, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';
import { applicationID } from './appID.json';

let client = Stitch.initializeAppClient(applicationID);

export class AuthService {
	authEmail: string;
	authPassword: string;
	authenticated: boolean;

	login(authEmail?: string, authPassword?: string): Promise<any> {
		console.log(applicationID);
		return client.auth.loginWithCredential(new UserPasswordCredential(authEmail, authPassword));
	}

	isAuthenticated(): boolean {
		return this.client.auth.isLoggedIn;
	}

	logout(): Promise<void> {
		return this.client.auth.logout();
	}
}
