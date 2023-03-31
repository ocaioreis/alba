import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const element = document.getElementById(pathname.slice(1));
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
