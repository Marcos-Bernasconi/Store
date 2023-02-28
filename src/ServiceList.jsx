import { Card } from "./Card";

export function ServiceList() {
  return (
    <>
      <div className="scrollbar mt-8 flex h-[30rem] w-full snap-x snap-proximity space-x-8 overflow-auto  px-8 md:h-[35rem]  lg:pb-8">
        <Card
          name="Special offers"
          title="Six Apple services. One easy subscription. "
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1626375544000"
          light
        />

        <Card
          title="We've got you covered. "
          description="AppleCare+ now comes with unlimited repairs for accidental damage protection."
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-applecare-202301_FMT_WHH?wid=556&hei=810&fmt=p-jpg&qlt=95&.v=1672770914382"
          light
        />

        <Card
          name="Simple payments"
          title="Discover all the ways to use Apple Pay. "
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202209_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95&.v=1661873185378"
          light
        />

        <Card
          name="Home"
          title="See how one app can control your entire home."
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-homekit-202301_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=1670880984687"
          light
        />
      </div>
    </>
  );
}
