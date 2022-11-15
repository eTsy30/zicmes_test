
export const reqest = async (url, value) => {
    const options = {
        headers: {
            Accept: "application/json"
        },
        method: "POST"
    }
    const urlPrepair = `${url}/${value}`
    const response = await fetch(urlPrepair, options);
    return response
}