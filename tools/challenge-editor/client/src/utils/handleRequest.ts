export const handleRequest = (makeRequest: () => Promise<Response>) => () => {
  makeRequest()
    .then(res => res.json() as Promise<{ stdout: string; stderr: string }>)
    .then(data => alert(JSON.stringify(data)))
    .catch(err => console.error(err));
};

export const API_LOCATION = process.env
  .REACT_APP_CHALLENGE_EDITOR_API_LOCATION as string;
