export function Card({ name, description, image }) {
  return (
    <>
      <div className="relative w-full flex-none  rounded-2xl shadow-xl bg-secondary mx-auto h-auto overflow-hidden ">
        <div className="p-8 absolute z-10">
          <p className="uppercase text-sm">{name}</p>
          <p className="font-semibold text-2xl mt-4">Big and Bigger</p>
          <p className="mt-2">{description}</p>
        </div>

        <img className=" absolute bottom-0 z-0" src={image} alt="Apple" />
      </div>
    </>
  );
}
