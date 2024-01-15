function deleteCookie(name: string) {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

export const Logout = () => {
	function handleLogout() {
		deleteCookie("token");
	}
	return <button onClick={handleLogout}>Logout</button>;
};
