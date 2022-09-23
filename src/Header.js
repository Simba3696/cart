import logo from "./logo.svg";

export default function Header() {
  return (
    <div className="bg-black border-white text-lg text-white">
      <img className="h-20 w-20 inline-block" src={logo} alt="logo" />
      <h1 className="font-xl font-bold inline-block">Shopperoo</h1>
    </div>
  );
}
