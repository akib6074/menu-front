import http from "./Http-common";

const login = async (email: string, password: string) => {
  const res = await http.post("auth/login", { email, password });
  return res?.data;
};

const logout = () => {
  localStorage.clear();
};

const authService = {
  login,
  logout
};
export default authService;
