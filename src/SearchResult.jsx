import { motion, AnimatePresence } from "framer-motion";
import { CardSearch, MotionCardSearch } from "./CardSearch";
import { useRef } from "react";

export function SearchResult({ data, firstSearch }) {
  const ref = useRef(null);
  if (firstSearch == false) {
    return (
      <>
        <div className="scrollbar mt-8 flex h-[30rem] w-full snap-x snap-proximity space-x-8 overflow-auto  px-8 md:h-[35rem]  lg:pb-8">
          <CardSearch
            description="From $999 or $83.12/mo."
            title="MacBook Air with M1 chip"
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110_FMT_WHH?wid=506&hei=472&fmt=p-jpg&qlt=95&.v=1673315548047"
          />

          <CardSearch
            description="From $799 or $66.27/mo."
            title="iPad Pro"
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202210?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1664578794100"
          />

          <CardSearch
            description="From $999 or $41.62/mo."
            title="iPhone 14 Pro"
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1663611329492"
          />

          <CardSearch
            name="READY FOR ADVENTURE"
            description="From $799 or $33.86/mo."
            title="Apple Watch Ultra”"
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra-202209?wid=340&hei=264&fmt=png-alpha&.v=1674585946449"
          />

          <CardSearch
            description="From $1199 or $139.81/mo."
            title="MacBook Air with M2 chip"
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202206_FMT_WHH?wid=506&hei=472&fmt=p-jpg&qlt=95&.v=1673315548178"
          />

          <CardSearch
            description="From $5999 or $516.27/mo."
            title="Mac Pro"
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-mac-pro-202108_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1625866834000"
          />
          <CardSearch
            description="From $1299 or $108.27/mo."
            title="MacBook Pro 13”"
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202206_FMT_WHH?wid=506&hei=472&fmt=p-jpg&qlt=95&.v=1673315548178"
          />

          <CardSearch
            name="CAPABLE AND AFFORDABLE"
            description="From $249 or $10.58/mo."
            title="Apple Watch SE"
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202209_GEO_US_FMT_WHH?wid=508&hei=472&fmt=png-alpha&.v=1674585946405"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="scrollbar mt-8 flex h-[30rem] w-full snap-x snap-proximity space-x-8 overflow-auto  px-8 md:h-[35rem]  lg:pb-8">
        <AnimatePresence mode="wait">
          {" "}
          {data.hits.map((product) => {
            console.log(product.id + ": id");
            return (
              <MotionCardSearch
                ref={ref}
                layout={"position"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                key={product.id}
                name={product.document.name}
                description={product.document.description}
                title={product.document.title}
                image={product.document.image}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
}
