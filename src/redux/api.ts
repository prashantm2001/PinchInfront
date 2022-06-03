// export const base = "https://sih-backend-try.herokuapp.com"
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
export const base = "http://localhost:5000"

export const apiadd = `${base}`

export const baseQuery =(suffix : string) =>fetchBaseQuery({ baseUrl: base + suffix})