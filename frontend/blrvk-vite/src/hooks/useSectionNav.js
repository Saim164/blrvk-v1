import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSectionId } from "../lib/scroll";

export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  function goToSection(event, id) {
    event.preventDefault();

    if (location.pathname === "/") {
      scrollToSectionId(id);
    } else {
      navigate(`/#${id}`);
    }
  }

  function goHome(event) {
    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return { goToSection, goHome };
}
