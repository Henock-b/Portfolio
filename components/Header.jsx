import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./ui/Nav"
import MobileNav from "./ui/MobileNav";

const Header = () => {
    return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
        <div className="container mx-auto">
        {/*logo*/}
        <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Henock <span className="text-accent">.</span>
                </h1>
            </Link>

            {/* desktop nav & hire me button */}
            <div className="hidden xl:flex items-center gap-8">
           <Nav />
            <Link href="/contact">
            <Button>Hire me</Button>
            </Link>
            </div>
       

        {/* mobile nav */}
        <div className="xl:hidden" >mobile nav
            <MobileNav/>  
        </div>
        </div>
        </header>
    );
};


export default Header;