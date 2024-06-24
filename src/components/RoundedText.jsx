import { useEffect, useRef } from "react";

export default function RoundedText() {
  const textRef = useRef(null); // Create a ref to store the element

  useEffect(() => {
    const textElement = textRef.current; // Get the element from the ref

    if (textElement && textElement.textContent) {
      // Check if element and content exist
      textElement.innerHTML = textElement.textContent // Use textContent for initial content
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 10 + "deg"})">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <>
      <div className="rounded-txt">
        <p ref={textRef}>PURE AND HONEST • DAMN DELICIOUS •</p>
        <i className="ri-arrow-down-line"></i>
      </div>
    </>
  );
}
