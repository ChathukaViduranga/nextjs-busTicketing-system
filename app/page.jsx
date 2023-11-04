import News from "./components/News";
export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl text-red-600 text-center my-10">
        News and Notices
      </h1>
      <News />
    </main>
  );
}
