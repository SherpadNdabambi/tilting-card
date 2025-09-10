document.addEventListener("DOMContentLoaded", onLoad);

/**
 * Adds click event to tab link elements.
 *
 * @param tabLink - The tab link element
 */
function addClickEvent(tabLink: Element) {
  tabLink.addEventListener("click", () =>
    selectTab(tabLink.getAttribute("data-tab"))
  );
}

/**
 *
 */
function onLoad() {
  const tabLinks: NodeListOf<Element> = document.querySelectorAll(".tab-link");
  tabLinks.forEach((tabLink) => {
    addClickEvent(tabLink);
  });
}

/**
 * Toggles displayed tab.
 *
 * @param tab - The tab to select
 */
function selectTab(tab: string) {
  const activeTab: HTMLPreElement = document.querySelector(
      ".code-snippet-window .active.code-snippet"
    ),
    activeTabLink: HTMLSpanElement = document.querySelector(".tab-link.active"),
    clickedTabLink: HTMLSpanElement = document.querySelector(
      `.tab-link[data-tab="${tab}"]`
    ),
    selectedTab: Element = document.getElementsByClassName(tab)[0];

  activeTab.classList.remove("active");
  activeTabLink.classList.remove("active");
  clickedTabLink.classList.add("active");
  selectedTab.classList.add("active");
}
