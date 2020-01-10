import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-framework';
import { AuthService } from 'resources';
import 'style.css';

export class App {
	authService: AuthService;
	authEmail: string;
	authPassword: string;
	router: Router;

	configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = "Aurelia MongoDB Stitch Authentication";
    config.map([
      {route: 'login', name: 'login', title: 'Login', nav: true, moduleId: PLATFORM.moduleName('login')},
			{route: ['', 'general'], name: 'general', title: 'General', nav: true, moduleId: PLATFORM.moduleName('general')},
    ]);
		this.router = router;
  }
}
