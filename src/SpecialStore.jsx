import { Card } from "./Card";

export function SpecialStore() {
  return (
    <>
      <div className="mt-8 flex h-[30rem] w-full snap-x snap-proximity space-x-8  overflow-auto px-8  md:h-[37rem]">
        <Card
          name="New colors"
          title="In with the new."
          description="Discover fresh new colors for your favorite accessories."
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-accessories-seasonal-202209?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661389755402"
          light
        />
        <Card
          name="GOVERNMENT"
          title="Special pricing is available for state, local, and federal agencies."
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202301_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1670437406596"
        />

        <Card
          name="CERTIFIED REFURBISHED"
          title="Shop refurbished Apple products backed by a one‑year warranty. "
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-refurb-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627318783000"
          light
        />

        <Card
          name="BUSINESS"
          title="From enterprise to small business, we’ll work with you. "
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-business-202209_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=1660927783146"
        />
      </div>
    </>
  );
}
