import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

import Image from "next/image";
import { unstable_noStore as noStore } from "next/cache";

export default function Home() {
  noStore();
  return (
    <>
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
      />
      <Collections />
      <ProductList />
    </>
  );
}
