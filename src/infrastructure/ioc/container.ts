import {
  createContainer,
  NameAndRegistrationPair,
  AwilixContainer
} from "awilix";
// dependencies
import INFRASTRUCTURE_DEPENDENCIES from "../../infrastructure/dependencies";
import APPLICATION_DEPENDENCIES from "../../app/dependencies";

const container = createContainer();

export default (): AwilixContainer => {
  registerToContainer(container, INFRASTRUCTURE_DEPENDENCIES);
  registerToContainer(container, APPLICATION_DEPENDENCIES);
  return container;
};

const registerToContainer = (
  container: AwilixContainer,
  registrationPair: NameAndRegistrationPair<any>
): void => {
  verifyRegistrationPair(container, registrationPair);
  container.register(registrationPair);
};

const verifyRegistrationPair = (
  container: AwilixContainer,
  registrationPair: NameAndRegistrationPair<any>
): void => {
  Object.keys(registrationPair).forEach(name => {
    if (container.has(name)) {
      throw new Error(`Container already has field: ${name}`);
    }
  });
};
