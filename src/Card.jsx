export function Card({ name, title, description, image, light }) {
  return light ? (
    <div className="snap-center relative w-full flex-none  rounded-2xl shadow-xl bg-secondary mx-auto h-auto overflow-hidden ">
      <div className="p-8 absolute z-10">
        <p className="uppercase text-sm text-neutral-500">{name}</p>
        <p className="font-semibold text-2xl mt-4">{title}</p>
        <p className="mt-2 whitespace-pre-wrap">{description}</p>
      </div>

      <img className=" absolute bottom-0 z-0" src={image} alt="Apple" />
    </div>
  ) : (
    <div className="snap-center relative w-full flex-none  rounded-2xl shadow-xl bg-black mx-auto h-auto overflow-hidden ">
      <div className="p-8 absolute z-10">
        <p className="uppercase text-sm text-base-100">{name}</p>
        <p className="font-semibold text-2xl mt-4 text-secondary ">{title}</p>
        <p className="mt-2 text-secondary whitespace-pre-wrap ">
          {description}
        </p>
      </div>

      <img className=" absolute bottom-0 z-0" src={image} alt="Apple" />
    </div>
  );
}
