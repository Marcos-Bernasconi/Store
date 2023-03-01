export function CardSearch({ name, image, title, description }) {
  return (
    <>
      <div className="relative mx-auto h-auto w-11/12 flex-none snap-center  overflow-hidden rounded-2xl bg-secondary shadow-xl md:w-7/12 lg:ml-[20%]  lg:max-w-md">
        <div className="relative z-10 px-8 pt-6">
          <p className="min-h-[12px] text-xs uppercase text-neutral-500">
            {name}
          </p>
          <p className="mt-1 w-10/12 text-2xl font-semibold md:w-9/12 md:text-3xl">
            {title}
          </p>
        </div>

        <img
          className="absolute top-1/2 left-1/2 w-8/12 -translate-x-1/2 -translate-y-1/2  "
          src={image}
          alt="Apple"
        />
        <div className="absolute bottom-0 left-1/2 z-10 flex w-full -translate-x-1/2 items-center justify-start space-x-4 p-8  md:justify-around md:space-x-16">
          <p className="mt-2 text-base md:text-lg">{description}</p>
          <button className="inline-block  rounded-full bg-blue-600 py-2 px-6 text-base text-secondary md:text-lg">
            Buy
          </button>
        </div>
      </div>
    </>
  );
}
