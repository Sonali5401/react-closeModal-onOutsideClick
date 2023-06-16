import { useRef, useEffect } from "react";
const CheckOutsideClick = (props) => {
  const { onOutsideClick, children } = props;
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    //Checking if our document having ref does not match event.target
    if (ref.current && !ref.current.contains(event.target)) {
      onOutsideClick && onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  if (!children) {
    return null;
  }
  return <div ref={ref}>{children}</div>;
};

export default CheckOutsideClick;
