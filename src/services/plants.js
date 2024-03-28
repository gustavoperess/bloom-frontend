const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const fetchPlantsByName = async (token, name) => {
    try {
      const payload = { name };
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      };
      const response = await fetch(`${BACKEND_URL}/api/plants/name`, requestOptions);
      const data = await response.json();
      if (!response.ok) {
        console.error("API error response", data);
        throw new Error(data.error || "Error fetching plant data");
      }
      return data;
    } catch (error) {
      console.error("API error", error);
      throw error; 
    }
  };


export const createNewPlant = async (plant, waterQuantity, token) => {
  try {
      const payload = {
        plant: plant,
        waterQuantity:waterQuantity
      }

      const requestOptions = {
          method: "POST",
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
      }
      const response =  await fetch(`${BACKEND_URL}/plants/create`, requestOptions)
  
      if (response.status !== 200) {
          throw new Error("Unable to make POST request for create request");
      }

      const data = await response.json();
      return data;

  } catch(error) {
      console.error("API error", error)
  }
}


