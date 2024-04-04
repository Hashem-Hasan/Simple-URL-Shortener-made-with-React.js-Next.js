import Image from "next/image";
import Navbar from "./Components/Navbar"
import Shortner from "./Components/Shortner"
import Footer from "./Components/Footer"
import Ad from "./Components/Ad"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="">
      
      <Shortner />
      <Ad />
      <Footer />
      </div>
    </main>
  );
}
