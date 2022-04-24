export const getToken = () => {
    return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        .then((response) => response.json())

}

export async function sendRequest(getData) {
    return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: "POST",
            body: getData,
            headers: {
                "Token": (await getToken()).token,
            }
        }
    ).then(async (response) => {
        if (response.ok) {
            return response.json();
        } else {
            return new Promise(async (resolve, reject) => {
                reject(await response.json());
            })
        }
    })
}

export async function getUser(userID) {
    return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users/' + userID)
        .then((response) => response.json());
}