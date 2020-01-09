import { FrameworkConfiguration } from 'aurelia-framework';
import { Container } from "aurelia-dependency-injection";
import { AuthService } from "./auth-service";

export function configure(config: FrameworkConfiguration) {
    config.globalResources([

]);
  let container: Container = config.container;
  let instance = new AuthService();

  container.registerInstance(AuthService, instance);

}

export { AuthService } from './auth-service'
