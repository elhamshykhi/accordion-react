import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const data = [
  {
    id: 1,
    title: "title #1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a non cumque laborum dolor ratione explicabo architecto ipsum mollitia incidunt?",
  },
  {
    id: 2,
    title: "title #2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a non cumque laborum dolor ratione explicabo architecto ipsum mollitia incidunt?",
  },
  {
    id: 3,
    title: "title #3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a non cumque laborum dolor ratione explicabo architecto ipsum mollitia incidunt?",
  },
  {
    id: 4,
    title: "title #4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a non cumque laborum dolor ratione explicabo architecto ipsum mollitia incidunt?",
  },
];

function Accordion() {
  const [openId, setOpenId] = useState(false);

  const handleOpen = (id) => {
    setOpenId(id);
  };

  return (
    <div className="accordion-list">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          openId={openId}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ item, openId, handleOpen }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = item.id === openId;

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      {/* header */}
      <div
        className="accordion-item__header"
        // onClick={() => setIsOpen((prev) => !prev)}
        onClick={() => handleOpen(item.id)}
      >
        <span>{item.title}</span>
        <span>
          <ChevronDownIcon
            style={{
              width: "1.2rem",
              transition: "all 0.3s ease-in-out",
              rotate: isOpen ? "180deg" : "",
            }}
            className="accordion__chev"
          />
        </span>
      </div>
      {/* content */}
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}

export default Accordion;
