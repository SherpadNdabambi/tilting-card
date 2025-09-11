let cssTab;
document.addEventListener("DOMContentLoaded", () => {
  onLoad();

  // Typescript will throw an error here because it doesn't know
  // about CodeMirror, but the browser will recognize it since it's
  // loaded in index.html
  // @ts-expect-error
  cssTab = CodeMirror(document.querySelector(".lang-css"), {
    lineNumbers: true,
    mode: "css",
    theme: "dracula",
    value: `.card {
  background: rgb(44,62,80);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 20px;
  width: 250px;
}`,
  });

  const codeSnippet: HTMLDivElement = document.querySelector(".code-snippet"),
    htmlTab: HTMLDivElement = document.querySelector(".lang-html");
  // @ts-expect-error
  CodeMirror(codeSnippet, {
    lineNumbers: true,
    mode: "htmlmixed",
    readOnly: true,
    theme: "dracula",
    value: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sherpadndabambi/tilting-card@v1.0.0/assets/css/tilting-card.css"/>
<script src="https://github.com/sherpadndabambi/tilting-card/releases/download/v1.0.0/tilting-card.js"></script>`,
  });
  // @ts-expect-error
  CodeMirror(htmlTab, {
    lineNumbers: true,
    mode: "htmlmixed",
    theme: "dracula",
    value: `<head>

  <link rel="stylesheet" href="./assets/css/styles.css" />

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sherpadndabambi/tilting-card@v1.0.0/assets/css/tilting-card.css" />

  <script src="https://github.com/sherpadndabambi/tilting-card/releases/download/v1.0.0/tilting-card.js"></script>

</head>

<body>

  <div class="card highlight-circle tilting-card">

    <h3>Tilting Card</h3>

    <p>
      JavaScript calculates the mouse position relative to the card's center and uses CSS transforms rotateX and rotateY to tilt the card.
    </p>

  </div>

</body>`,
  });
});

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
function selectTab(tabName: string) {
  const activeTab: HTMLDivElement = document.querySelector(
      ".code-snippet-window .active.code-editor"
    ),
    activeTabLink: HTMLSpanElement = document.querySelector(".tab-link.active"),
    clickedTabLink: HTMLSpanElement = document.querySelector(
      `.tab-link[data-tab="${tabName}"]`
    ),
    selectedTab: HTMLDivElement = document.getElementsByClassName(
      tabName
    )[0] as HTMLDivElement;

  activeTab.classList.remove("active");
  activeTabLink.classList.remove("active");
  clickedTabLink.classList.add("active");
  selectedTab.classList.add("active");

  if (selectedTab.classList.contains("lang-css")) {
    cssTab.refresh();
  }
}
