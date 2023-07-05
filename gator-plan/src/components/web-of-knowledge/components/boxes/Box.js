import * as styles from "./Box.module.css";
import ModalContext from "../../modal/modalContext";
import React, { useContext, useEffect, useRef, useState } from "react";
const colorPicker = {
  white: "#FFFFFF",
  blue0: "#E7F5FF",
  blue3: "#74C0FC",
  blue5: "#339AF0",
  violet0: "#F3F0FF",
  violet3: "#B197FC",
  violet4: "#9775FA",
  violet5: "#845EF7",
  cyan0: "#E3FAFC",
  cyan3: "#66D9E8",
  cyan4: "#3BC9DB",
  cyan5: "#22B8CF",
  lime0: "#F4FCE3",
  lime3: "#C0EB75",
  lime4: "#A9E34B",
  lime5: "#94D82D",
  orange0: "#FFF4E6",
  orange3: "#FFC078",
  orange4: "#FFA94D",
  orange5: "#FF922B",
  gray3: "#DEE2E6",
};

const hoverColors = {
  blue0: styles.blue0,
  blue1: styles.blue1,
  violet0: styles.violet0,
  violet1: styles.violet1,
  cyan0: styles.cyan0,
  cyan1: styles.cyan1,
  lime0: styles.lime0,
  lime1: styles.lime1,
  orange0: styles.orange0,
  orange1: styles.orange1,
};

const Box = (props) => {
  const {
    x,
    y,
    width,
    height,
    cornerRadius,
    fillColor,
    strokeColor,
    text,
    fillOpacity,
    isClickable,
    fontSize,
    fontWeight,
    letterSpacing,
    hoverColor,
    clipPathId,
  } = props;

  const [textY, setTextY] = useState(y);
  const textEl = useRef();

  useEffect(() => {
    const textHeight = textEl.current.getBBox().height;
    setTextY(y + height / 2 + textHeight / 4);
  }, []);

  const { showModal } = useContext(ModalContext);

  const textX = x + width / 2;

  const onClickHandler = () => {
    showModal(text);
  };

  const boxFillColor = colorPicker[fillColor];
  const boxStrokeColor = colorPicker[strokeColor];

  const hoverColorClass = hoverColor ? hoverColors[hoverColor] : null;

  return (
    <g
      className={isClickable ? `${styles.clickable} ${hoverColorClass}` : ""}
      fill={boxFillColor}
      onClick={isClickable ? onClickHandler : null}
    >
      <rect
        width={width}
        height={height}
        rx={cornerRadius}
        fillOpacity={fillOpacity ? fillOpacity : "1"}
        strokeWidth="2"
        stroke={boxStrokeColor}
        x={x}
        y={y}
        clipPath={isClickable ? "" : `url(#clipPath-${clipPathId})`}
      ></rect>
      <text ref={textEl} x={textX} y={textY} textAnchor="middle">
        <tspan
          fill="rgba(52, 58, 64, 1)"
          fontSize={fontSize}
          fontWeight={fontWeight}
          letterSpacing={letterSpacing}
        >
          {text}
        </tspan>
      </text>
    </g>
  );
};

export default Box;
