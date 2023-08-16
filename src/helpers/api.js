const apiCall = async (query) => {
    const res = await fetch('http://localhost:8888/avocati/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `${query}`,
        }),
    })
        .then((res) => res.json())
        .catch(console.error);

    return res;
};

export default apiCall;
