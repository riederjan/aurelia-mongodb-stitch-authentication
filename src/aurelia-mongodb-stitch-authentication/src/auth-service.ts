import { Stitch, StitchAppClient, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';

interface AuthConfig {
	applicationId: string;
}

export class AuthService {
	authEmail: string;
	authPassword: string;
	public client : StitchAppClient;

	setAuthConfig(authConfig : AuthConfig){
		console.log(authConfig.applicationId);
		this.client = Stitch.initializeAppClient(authConfig.applicationId);
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
