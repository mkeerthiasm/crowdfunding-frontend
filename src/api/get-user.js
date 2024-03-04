async function getUser(userId) {
    const url = `${import.meta.env.VITE_API_URL}/users/${userId}`;
    const token = window.localStorage.getItem("token");
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${window.localStorage.getItem("token")}`,
        }
    });

    if (!response.ok) {
        const fallbackError = `Error fetching user with id ${userId}`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(fallbackError);

    }

    return await response.json();
}

export async function getUsernameById(userId) {
    try{
        const user = await getUser(userId);
        return user.username;
    }catch(error){
        console.error(error);
        return "Unknown";
    }
}
export default getUser;
