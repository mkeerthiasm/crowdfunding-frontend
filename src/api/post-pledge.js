async function postPledge(projectId, amount, anonymous,comment) {
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}/pledges/`;
    const token = window.localStorage.getItem("token");
    const response = await fetch(url, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            "amount": amount,
            "anonymous": anonymous,
            "comment": comment,
            "project": projectId,
        }),
    });
    if (!response.ok) {
        const fallbackError = `Error trying to pledge`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
        }
        return await response.json();
    }
    export default postPledge;       