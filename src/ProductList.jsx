import { Card } from "./Card";

export function ProductList() {
  return (
    <>
      <div className="lg:scrollbar flex h-[30rem] w-full snap-x snap-proximity space-x-8 overflow-auto  px-8 md:h-[35rem] lg:pb-8">
        <Card
          name="Iphone 14 pro"
          title="Pro. Beyond."
          description={"From $999 or $41.62/mo.\nfor 24 mo*."}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-pro-202209_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1661181418349"
        />

        <Card
          name="iPhone 14"
          title="Big and Bigger"
          description={"From $799 or $33.29/mo.\nbefore trade‑in*"}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-202209_GEO_US_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=1661890726803"
          light="true"
        />

        <Card
          name="APPLE WATCH ULTRA"
          title="Adventure awaits. "
          description={"From $799 or $33.29/mo.\nfor 24 mo.*"}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-ultra-202209_FMT_WHH?wid=658&hei=900&fmt=p-jpg&qlt=95&.v=1660686053423"
          light="true"
        />

        <Card
          name="Ipad Pro"
          title="Supercharged by M2."
          description={"From $799 or $66.58/mo.\nfor 12 mo.*"}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-pro-202210_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1667423474151"
        />

        <Card
          name="APPLE WATCH SERIES 8"
          title="A healthy leap ahead. "
          description={"From $399 or $16.62/mo.\nfor 24 mo*."}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s8-202209_FMT_WHH?wid=658&hei=900&fmt=p-jpg&qlt=95&.v=1661792333321"
        />
        <Card
          name="ipad"
          title="Lovable. Drawable. Magical. "
          description={"From $449 or $37.29/mo.\nfor 24 mo*."}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-202210_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1664628458667"
          light="true"
        />
      </div>
    </>
  );
}
