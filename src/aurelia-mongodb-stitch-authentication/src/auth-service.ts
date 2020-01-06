import { Stitch, RemoteMongoClient, UserPasswordAuthProviderClient, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';

export class AuthService {
	applicationID: string;
	authEmail: string;
	authPassword: string;
	authenticated: boolean = false;
	client: string;

	login(authEmail?: string, authPassword?: string, applicationID?: string): Promise<any> {
		let client = Stitch.initializeAppClient(applicationID);
		let format;
		if (typeof authEmail === 'object') {

		}
		else if (typeof authEmail === 'string') {
			format.authEmail = {
				'email': authEmail,
				'password': authPassword
			};
		}
		return client.auth.loginWithCredential(new UserPasswordCredential(authEmail, authPassword));
	}

	logout() {

	}
}
