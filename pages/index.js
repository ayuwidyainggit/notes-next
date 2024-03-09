import { Inter } from "next/font/google";
import GettingStarted from "@/components/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div>
        <GettingStarted />
      </div>
    </main>
  );
}
