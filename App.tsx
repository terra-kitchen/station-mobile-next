import "node-libs-react-native/globals"
import "react-native-get-random-values"

import { QueryClient, QueryClientProvider } from "react-query"

import TerraJS from "./labs/TerraJS"

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TerraJS />
    </QueryClientProvider>
  )
}
