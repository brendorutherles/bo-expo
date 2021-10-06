import {storeData} from "../services/storage"



interface Response {
  token: string;
  user: {
    username: string,
    password: string,
    lastName: string,
    firstName: string,
  };
}

export function signIn(body) {
  return fetch(
    "https://loginbo.herokuapp.com/users/authenticate",

    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:(body),
    }
  )
    .then(async (response) => {
      const isJson = response.headers
        .get("content-type")
        ?.includes("application/json");
      const data = isJson && (await response.json());

      if (response.ok) {

        storeData(data);
      
      
      } else{
        storeData(null)     
     }

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }
    })
    .catch((error) => {
      alert()
      console.error("There was an error!", error);
    });
}
