import {Inter} from "next/font/google";
import {Lusitana} from "next/font/google";
import {Noto_Sans_KR} from "next/font/google";

export const inter = Inter({subsets: ["latin"]});
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});
