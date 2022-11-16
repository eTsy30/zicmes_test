const reqest = async (url, value, isLoading) => {
    const options = {
        headers: {
            Accept: 'application/json',
        },
        method: 'POST',
    };
    const urlPrepair = isLoading ? `${url}/${value}` : '';
    const response = await fetch(urlPrepair, options);
    return response;
};
export default reqest