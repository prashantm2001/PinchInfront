// export const base = "https://sih-backend-try.herokuapp.com"
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// export const base = "http://localhost:5000"
export const base = "http://back.eba-gmpkm8tq.ap-south-1.elasticbeanstalk.com/"

export const apiadd = `${base}`

export const baseQuery =(suffix : string) =>fetchBaseQuery({ baseUrl: base + suffix})