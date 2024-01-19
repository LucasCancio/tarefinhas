import { LogoIcon } from "./LogoIcon";

export const Header = () => {
  return (
    <header className="bg-gray-700 flex justify-center items-center h-48">
      <div className="flex gap-2 items-center">
        <LogoIcon />
        <h1 className="font-bold text-4xl">
          <span className="text-blue">ta</span>
          <span className="text-purple-dark">re</span>
          <span className="text-blue text-xs">finhas</span>
        </h1>
      </div>
    </header>
  );
};
