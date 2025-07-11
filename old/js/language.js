const langData = {
  "zh-Hant": {
    "nav-home": "首頁",
    "nav-about": "關於我們",
    "nav-members": "成員介紹",
    "nav-projects": "項目展示",
    "nav-join": "加入我們",
    "nav-contact": "聯絡方式",
    "welcome": "歡迎來到 Error404 Teams",
    "intro": "我們是一支由技術與創意驅動的開發團隊，專注於實現各種突破性的項目。",
    "founded": "成立時間：2025年07月11日 晚上10點20分",
    "members": "核心成員：JellyFish_2333 (@george06350)、efs (@lmr0811)"
  },
  "zh-Hans": {
    "nav-home": "首页",
    "nav-about": "关于我们",
    "nav-members": "成员介绍",
    "nav-projects": "项目展示",
    "nav-join": "加入我们",
    "nav-contact": "联系方式",
    "welcome": "欢迎来到 Error404 Teams",
    "intro": "我们是一支由技术与创意驱动的开发团队，专注于实现各种突破性的项目。",
    "founded": "成立时间：2025年07月11日 晚上10点20分",
    "members": "核心成员：JellyFish_2333 (@george06350)、efs (@lmr0811)"
  },
  "en": {
    "nav-home": "Home",
    "nav-about": "About Us",
    "nav-members": "Members",
    "nav-projects": "Projects",
    "nav-join": "Join Us",
    "nav-contact": "Contact",
    "welcome": "Welcome to Error404 Teams",
    "intro": "We are a development team driven by technology and creativity, dedicated to pioneering projects.",
    "founded": "Founded: July 11, 2025 at 10:20 PM",
    "members": "Core Members: JellyFish_2333 (@george06350), efs (@lmr0811)"
  }
};

const langSelector = document.getElementById("language-selector");
langSelector.addEventListener("change", () => {
  const selectedLang = langSelector.value;
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.innerText = langData[selectedLang][key];
  });
});
