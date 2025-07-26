import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="py-5 flex  items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href={"/"}>
          <h1 className="font-semibold text-3xl">
            Blog<span className="text-blue-500">Rabar</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6 ">
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors "
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors "
            href={"/dashboard"}
          >
            Dashboard
          </Link>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <Button>Log in</Button>
        <Button variant={"secondary"}>Sign up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
