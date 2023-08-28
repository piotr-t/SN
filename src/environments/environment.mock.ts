interface env {
  production: boolean,
  mock?: boolean,
  development?: boolean,
  API_KEY?: string
}


export const environment = {
  development: false,
  production: false,
  mock: true,
  API_KEY:""
};