export function Card() {
  return (
    <>
      <div className="relative w-11/12 rounded-2xl shadow-xl bg-secondary mx-auto h-auto overflow-hidden">
        <div className="p-8 absolute">
          <p className="uppercase text-sm">iPhone 14</p>
          <p className="font-semibold text-2xl mt-4">Big and Bigger</p>
          <p className="mt-2">
            From $799 or $33.29/mo.per month for 24 mo.months before
            trade‑inFootnote*
          </p>
        </div>

        <img
          className=" z-0"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-202209_GEO_US_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=1661890726803"
          alt=""
        />
      </div>
    </>
  );
}
