var cssTab;
document.addEventListener("DOMContentLoaded", function () {
    onLoad();
    // Typescript will throw an error here because it doesn't know
    // about CodeMirror, but the browser will recognize it since it's
    // loaded in index.html
    // @ts-expect-error
    cssTab = CodeMirror(document.querySelector(".lang-css"), {
        lineNumbers: true,
        mode: "css",
        theme: "dracula",
        value: ".card {\n  background: rgb(44,62,80);\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  color: #fff;\n  padding: 20px;\n  width: 250px;\n}",
    });
    var codeSnippet = document.querySelector(".code-snippet"), htmlTab = document.querySelector(".lang-html");
    // @ts-expect-error
    CodeMirror(codeSnippet, {
        lineNumbers: true,
        mode: "htmlmixed",
        readOnly: true,
        theme: "dracula",
        value: "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/sherpadndabambi/tilting-card@v1.0.0/assets/css/tilting-card.css\"/>\n<script src=\"https://github.com/sherpadndabambi/tilting-card/releases/download/v1.0.0/tilting-card.js\"></script>",
    });
    // @ts-expect-error
    CodeMirror(htmlTab, {
        lineNumbers: true,
        mode: "htmlmixed",
        theme: "dracula",
        value: "<head>\n\n  <link rel=\"stylesheet\" href=\"./assets/css/styles.css\" />\n\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/sherpadndabambi/tilting-card@v1.0.0/assets/css/tilting-card.css\" />\n\n  <script src=\"https://github.com/sherpadndabambi/tilting-card/releases/download/v1.0.0/tilting-card.js\"></script>\n\n</head>\n\n<body>\n\n  <div class=\"card highlight-circle tilting-card\">\n\n    <h3>Tilting Card</h3>\n\n    <p>\n      JavaScript calculates the mouse position relative to the card's center and uses CSS transforms rotateX and rotateY to tilt the card.\n    </p>\n\n  </div>\n\n</body>",
    });
});
/**
 * Adds click event to tab link elements.
 *
 * @param tabLink - The tab link element
 */
function addClickEvent(tabLink) {
    tabLink.addEventListener("click", function () {
        return selectTab(tabLink.getAttribute("data-tab"));
    });
}
/**
 *
 */
function onLoad() {
    var tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(function (tabLink) {
        addClickEvent(tabLink);
    });
}
/**
 * Toggles displayed tab.
 *
 * @param tab - The tab to select
 */
function selectTab(tabName) {
    var activeTab = document.querySelector(".code-snippet-window .active.code-editor"), activeTabLink = document.querySelector(".tab-link.active"), clickedTabLink = document.querySelector(".tab-link[data-tab=\"".concat(tabName, "\"]")), selectedTab = document.getElementsByClassName(tabName)[0];
    activeTab.classList.remove("active");
    activeTabLink.classList.remove("active");
    clickedTabLink.classList.add("active");
    selectedTab.classList.add("active");
    if (selectedTab.classList.contains("lang-css")) {
        cssTab.refresh();
    }
}
