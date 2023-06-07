import Link from "next/link";
import { SiBurgerking } from "react-icons/si";

export default function Header() {
  return (
    <header>
      <div>
        <SiBurgerking />
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/burgers">Burgers</Link>
        <Link href="/about">About Us</Link>
        <Link href="/feedbacks">Feedback</Link>
      </nav>
    </header>
  );
}
