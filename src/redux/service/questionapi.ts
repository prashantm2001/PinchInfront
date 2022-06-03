import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../api";

export interface questioninter {
     question: string;
     optionsA: string;
     optionsB: string;
     optionsC: string;
     optionsD: string;
     answer: string;
     explaination: string;
}

export const questionapi = createApi({
     reducerPath: "question",
     baseQuery: baseQuery("/"),
     endpoints(builder) {
          return {
               fetch: builder.query<questioninter[],void>({
                    query() {
                         return '/'
                    }
               }),
          }
     }
})

export const { useFetchQuery } = questionapi;