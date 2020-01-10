import { RouterConfiguration, Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-framework';
import { AuthService } from 'resources';
import 'style.css';

@autoinject
export class App {
	authService: AuthService;
	authEmail: string;
	authPassword: string;

	router: Router;

	configureRouter(config: RouterConfiguration, router: Router): void {
		this.router = router;
    config.title = "Aurelia MongoDB Stitch Authentication";
    config.map([
      {route: 'login', name: 'login', title: 'Login', nav: true, moduleId: PLATFORM.moduleName('login')},
			{route: ['', 'general'], name: 'general', title: 'General', nav: true, moduleId: PLATFORM.moduleName('general')}
    ]);

    this.router = router;
  }
}
