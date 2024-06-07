import { getCryptos } from "./services/CryptoService";
import { devtools } from "zustand/middleware";
import { CryptoCurrency } from "./types";
import { create } from "zustand";

type CryptoStore = {
  cryptocurrencies: CryptoCurrency[];
  fetchCryptos: () => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },
  }))
);
