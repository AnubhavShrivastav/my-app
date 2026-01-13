import { useState } from "react";

type CaptionProps = {
  text: string;
  limit?: number;
};

export function Caption({ text, limit = 80 }: CaptionProps) {
  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > limit;
  const displayText = expanded ? text : text.slice(0, limit);

  return (
    <div className="text-white text-sm leading-snug">
      <span>
        {displayText}
        {!expanded && isLong && "..."}
      </span>

      {isLong && (
        <button
          onClick={() => setExpanded((p) => !p)}
          className="ml-1 font-semibold"
        >
          {expanded ? "less" : "more"}
        </button>
      )}
    </div>
  );
}
