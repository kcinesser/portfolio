import React, { useState, useRef, useMemo, Fragment } from "react";
import { useScrollPosition } from "../../utils/scroll";
import ScrollIndicator from "../../utils/ScrollIndicator";

export default () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const rendersCount = useRef(0);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > -1;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );

  return useMemo(() => (
    <Fragment>
      <ScrollIndicator show={hideOnScroll} />
    </Fragment>
  ));
};
