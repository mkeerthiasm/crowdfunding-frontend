async function postNewProject(NewProject){
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    const token = window.localStorage.getItem("token");
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${window.localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(NewProject),
    });
    if (!response.ok) {
        const fallbackError = `Error trying to create a new project`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}
export default postNewProject;