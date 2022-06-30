const BASELOGINURL = 'https://reqres.in'
const BASEPOSTSURL = 'https://jsonplaceholder.typicode.com'

export const login = (credentials) => {

    const url = BASELOGINURL + "/api/login";

    const request = {
        method: 'POST',
        email: credentials.user,
        password: credentials.password
    };

    return fetch(url, request)
        .then(response => response.json());

};