import { Stitch, RemoteMongoClient, UserPasswordAuthProviderClient, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';

export class AuthService {
	authEmail: string;
	authPassword: string;
	authenticated: boolean = false;
	client: string;

	login(authEmail?: string, authPassword?: string): Promise<any> {
		console.log(applicationID);
		let client = Stitch.initializeAppClient(applicationID);
		return client.auth.loginWithCredential(new UserPasswordCredential(authEmail, authPassword));
	}

	logout() {

	}
}
