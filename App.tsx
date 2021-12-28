import "node-libs-react-native/globals"
import "react-native-get-random-values"

import React from "react"
import { RecoilRoot } from "recoil"
import { QueryClient, QueryClientProvider } from "react-query"

import TerraJS from "./labs/TerraJS"

const queryClient = new QueryClient()

export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <TerraJS />
      </QueryClientProvider>
    </RecoilRoot>
  )
}
