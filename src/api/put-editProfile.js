async function putEditProfile(username, email, password) {
    const url = `${import.meta.env.VITE_API_URL}/users/${userId}/`;
    const token = window.localStorage.getItem("token");
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${window.localStorage.getItem("token")} `,
        },
        body: JSON.stringify({
            "username": username,
            "email": email,
            "password": password,
        }),
    });
    if (!response.ok) {
        const fallbackError = `Error trying to edit profile`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}
export default putEditProfile;