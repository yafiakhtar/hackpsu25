import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DDDAFA] via-[#F2EAFD] to-[#F8E4FD]">
      <Header />
      <main className="pt-[160px] px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-6xl font-bold text-black mb-4">404</h1>
          <p className="text-xl text-[#4D4D4D] mb-8">Page not found</p>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-[189px] h-[50px] rounded-[30px] bg-[#5D5BEA] text-[#F9FAFB] text-[18px] font-normal shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:bg-[#4a49d1] transition-colors"
          >
            Go back home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
