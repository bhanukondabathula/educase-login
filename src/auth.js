const STORAGE_KEY = "educase-user";

export function saveUser(user) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function getUser() {
  const user = localStorage.getItem(STORAGE_KEY);
  return user ? JSON.parse(user) : null;
}

export function isAuthenticated() {
  return !!getUser();
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}
