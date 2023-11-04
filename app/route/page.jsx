import BusRoutes from "./../components/BusRoutes";
export default function page() {
  return (
    <div className="w-full py-10 mb-48 ">
      <div className=" w-full text-center my-7 text-red-400 tracking-wide text-4xl">
        Route Details
      </div>
      <div className="w-3/4 mx-40 shadow-xl">
        <BusRoutes />
      </div>
    </div>
  );
}
