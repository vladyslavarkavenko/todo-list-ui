import api from "./index";

export const login = ({email, password}) => {
    return api.post("/auth/login", {email, password});
}
export const signup = ({name, email, password}) => {
    return api.post("/auth/signup", {name, email, password});
}