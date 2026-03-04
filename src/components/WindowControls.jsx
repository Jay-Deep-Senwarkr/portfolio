import useWindowStore from "#store/window";
import { gsap } from "gsap";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  const handleMinimize = () => {
    const el = document.getElementById(target);
    if (!el) return;

    gsap.to(el, {
      scaleY: 0,
      scaleX: 0.8,
      opacity: 0,
      y: 40,
      duration: 0.3,
      ease: "power2.in",
      transformOrigin: "bottom center",
      onComplete: () => {
        el.style.display = "none";
      },
    });
  };

  const handleMaximize = () => {
    const el = document.getElementById(target);
    if (!el) return;

    const isMaximized = el.dataset.maximized === "true";

    if (!isMaximized) {
      el.dataset.prevWidth = el.style.width || "";
      el.dataset.prevHeight = el.style.height || "";
      el.dataset.prevTop = el.style.top || "";
      el.dataset.prevLeft = el.style.left || "";
      el.dataset.maximized = "true";

      gsap.to(el, {
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      el.dataset.maximized = "false";

      gsap.to(el, {
        width: el.dataset.prevWidth || "",
        height: el.dataset.prevHeight || "",
        top: el.dataset.prevTop || "",
        left: el.dataset.prevLeft || "",
        duration: 0.4,
        ease: "power3.out",
      });
    }
  };

  return (
    <div id="window-controls">
      <div
        className="close group relative flex items-center justify-center"
        onClick={() => closeWindow(target)}>
        <span className="hidden group-hover:block text-[8px] font-bold text-white leading-none">
          ✕
        </span>
      </div>
      <div
        className="minimize group relative flex items-center justify-center cursor-pointer"
        onClick={handleMinimize}>
        <span className="hidden group-hover:block text-[10px] font-bold text-yellow-800 leading-none">
          –
        </span>
      </div>
      <div
        className="maximize group relative flex items-center justify-center cursor-pointer"
        onClick={handleMaximize}>
        <span className="hidden group-hover:block text-[8px] font-bold text-green-800 leading-none">
          ⤢
        </span>
      </div>
    </div>
  );
};

export default WindowControls;
