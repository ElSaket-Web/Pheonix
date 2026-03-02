const modeSwitch = document.getElementById("modeSwitch");
const manualControls = document.getElementById("manualControls");
const overrideBadge = document.getElementById("overrideBadge");

if (modeSwitch && manualControls && overrideBadge) {
  modeSwitch.addEventListener("change", (event) => {
    const isManual = event.target.checked;
    manualControls.hidden = !isManual;
    overrideBadge.textContent = isManual ? "MANUAL OVERRIDE ON" : "MANUAL OVERRIDE OFF";
    overrideBadge.classList.toggle("active", isManual);
    overrideBadge.classList.toggle("muted", !isManual);
  });
}

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".mobile-panel");

for (const tab of tabs) {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.tab;

    tabs.forEach((item) => item.classList.toggle("active", item === tab));
    panels.forEach((panel) => panel.classList.toggle("active", panel.id === targetId));
  });
}
