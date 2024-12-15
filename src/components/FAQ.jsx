import starIcon from "../assets/images/icon-star.svg";
import Accordion from "./Accordion";
import { useState } from "react";

const questions = [
  "What is Frontend Mentor, and how will it help me?",
  "Is Frontend Mentor free?",
  "Can I use Frontend Mentor projects in my portfolio?",
  "How can I get help if I'm stuck on a challenge?",
];
const answers = [
  "Frontend Mentor is a platform that offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
];

function FAQ() {
  const [expandAll, setExpandAll] = useState(false);
  return (
    <div className="grid min-h-dvh bg-light-pink bg-mobile bg-contain bg-fixed bg-no-repeat py-20 sm:bg-desktop sm:py-32">
      <div
        id="FAQ"
        className="mx-auto h-max w-[90%] max-w-[630px] rounded-lg bg-white p-6 sm:p-8"
      >
        <header className="items-center justify-between min-[500px]:flex">
          <div className="flex items-center gap-4">
            <img src={starIcon} alt="star icon" className="size-6 sm:size-10" />
            <h1 className="text-4xl font-bold text-dark-purple sm:text-6xl">
              FAQs
            </h1>
          </div>
          <div className="mt-2 flex items-center justify-center gap-4 text-sm font-semibold text-white min-[350px]:justify-end min-[350px]:text-base min-[500px]:mt-0 sm:text-lg">
            <button
              className="rounded-full bg-[#ad28eb] px-4 py-1 hover:brightness-90 active:brightness-110"
              type="button"
              onClick={() => setExpandAll(true)}
            >
              Expand All
            </button>
            <button
              className="rounded-full bg-[#ad28eb] px-4 py-1 hover:brightness-90 active:brightness-110"
              type="button"
              onClick={() => setExpandAll(false)}
            >
              Collapse All
            </button>
          </div>
        </header>

        <main>
          {questions.map((question, index) => (
            <Accordion
              key={index}
              id={index + 1}
              question={question}
              answer={answers[index]}
              expandAll={expandAll}
              setExpandAll={setExpandAll}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default FAQ;
