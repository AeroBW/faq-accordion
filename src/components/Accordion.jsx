import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import { useState, useEffect } from "react";

function Accordion({ id, question, answer, expandAll, setExpandAll }) {
  const [expanded, setExpanded] = useState(false);
  function toggleExpanded() {
    setExpanded((prev) => !prev);
    setExpandAll(0);
  }

  useEffect(() => {
    if (expandAll === true) {
      setExpanded(true);
    } else if (expandAll === false) {
      setExpanded(false);
    }
  }, [expandAll]);

  return (
    <section>
      {id !== 1 && <hr className="mt-2 border-grayish-purple/20 sm:mt-4" />}
      <div className="mt-4 flex items-center justify-between gap-4 sm:mt-6">
        <p
          id={`question-${id}`}
          className="text-lg font-semibold text-dark-purple sm:text-xl"
        >
          {question}
        </p>
        <button
          type="button"
          className="flex-shrink-0 hover:brightness-75 active:brightness-110"
          onClick={toggleExpanded}
        >
          <img
            src={expanded ? minusIcon : plusIcon}
            alt={expanded ? "collapse icon" : "expand icon"}
          />
        </button>
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${expanded ? "max-h-[200px]" : "max-h-0"} mt-2 text-grayish-purple sm:text-lg`}
      >
        <p id={`answer-${id}`}>{answer}</p>
      </div>
    </section>
  );
}

export default Accordion;
