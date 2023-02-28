export function Card({ name, title, description, image, light }) {
  return light ? (
    <div className="relative mx-auto h-auto w-11/12 flex-none snap-center  overflow-hidden rounded-2xl bg-secondary shadow-xl md:w-7/12 lg:ml-[20%]  lg:max-w-md">
      <div className="absolute z-10 p-8">
        <p className="text-sm uppercase text-neutral-500">{name}</p>
        <p className="mt-4 text-2xl font-semibold md:text-3xl">{title}</p>
        <p className="mt-2 whitespace-pre-wrap md:w-80">{description}</p>
      </div>

      <img
        className="absolute bottom-0 z-0 md:left-1/2 md:w-5/6 md:-translate-x-1/2"
        src={image}
        alt="Apple"
      />
    </div>
  ) : (
    <div className="relative mx-auto h-auto w-11/12 flex-none snap-center overflow-hidden rounded-2xl bg-black shadow-xl md:w-7/12 lg:ml-[20%] lg:max-w-md   ">
      <div className="absolute z-10 p-8">
        <p className="text-sm uppercase text-base-100 ">{name}</p>
        <p className="mt-4 text-2xl font-semibold text-secondary md:text-3xl">
          {title}
        </p>
        <p className="mt-2 whitespace-pre-wrap text-secondary ">
          {description}
        </p>
      </div>

      <img
        className=" absolute bottom-0 z-0 md:left-1/2 md:w-5/6 md:-translate-x-1/2"
        src={image}
        alt="Apple"
      />
    </div>
  );
}
