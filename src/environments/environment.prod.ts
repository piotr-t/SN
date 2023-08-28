import {env} from './env';

interface env {
  production: boolean,
  mock?: boolean,
  development?: boolean,
  API_KEY?: string
}

export const environment: env = {
  production: true,
  API_KEY: env.API_KEY

};
