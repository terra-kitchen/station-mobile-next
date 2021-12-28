import React from "react"
import { Text } from "react-native"
import { useQuery } from "react-query"
import { Coins, LCDClient } from "@terra-money/terra.js"

const address = "terra1ac2u4fekndumvj0ycutlahcf32se88prljf0m3"

export const useInitialBankBalance = () => {
  const lcd = new LCDClient({
    chainID: "columbus-5",
    URL: "https://lcd.terra.dev",
  })

  return useQuery(["queryKey.bank.balance", address], async () => {
    if (!address) return new Coins()
    const [coins] = await lcd.bank.balance(address)
    return coins
  })
}

const TerraJS = () => {
  const { data: bankBalance } = useInitialBankBalance()

  return (
    bankBalance
      ?.toData()
      .map((coin) => <Text key={coin.denom}>{coin.amount.toString()}</Text>) ??
    null
  )
}

export default TerraJS
