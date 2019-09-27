import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a4058a37382c33ca0fa5bf174c4bebbf22e253a2e4f337390a3b2ce1b78ab0e4"
  }
});
