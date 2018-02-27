const DEFAULT_SCROLL_PARENT = 'BODY';

function isScrollParent(element) {
  try {
    const { overflow, overflowY, overflowX } = window.getComputedStyle(element);
    return (/(auto|scroll)/).test(overflow + overflowX + overflowY);
  } catch (e) {
    return false;
  }
}

export default function getScrollParent(element) {
  if (!element || element.tagName === DEFAULT_SCROLL_PARENT) {
    return window;
  } else if (isScrollParent(element)) {
    return element;
  } else {
    return getScrollParent(element.parentNode);
  }
}
