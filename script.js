document.documentElement.classList.add("js");

const byId = (id) => document.getElementById(id);

function leavePage() {
  document.title = "Google";
  document.body.setAttribute("aria-hidden", "true");
  window.location.replace("https://www.google.com/");
}

document.querySelectorAll("[data-quick-exit]").forEach((button) => {
  button.addEventListener("click", leavePage);
});

const assessment = byId("assessment-form");

function updateAssessmentPanel(name, outputId) {
  const inputs = [...assessment.querySelectorAll(`input[name="${name}[]"]`)];
  const selected = inputs.filter((input) => input.checked).length;
  const output = byId(outputId);
  let message;

  if (name === "pattern") {
    if (selected === 0) {
      message = "Start with any specific event you can date and source.";
    } else if (selected <= 3) {
      message = "Some listed behaviors align. Document the clearest event; this count is not a diagnosis.";
    } else {
      message = "Several listed behaviors align. Prioritize safety and a sourced chronology; the count does not identify a cause or actor.";
    }
  } else if (selected === 0) {
    message = "One preserved original is a valid place to begin.";
  } else if (selected <= 3) {
    message = "You have some source material. Preserve originals and note what records can still be requested.";
  } else {
    message = "You have multiple source types. Keep provenance, conflicts, and interpretations clearly separated.";
  }

  output.textContent = `${selected} of ${inputs.length} selected. ${message}`;
}

if (assessment) {
  assessment.addEventListener("change", (event) => {
    if (event.target.name === "pattern[]") {
      updateAssessmentPanel("pattern", "pattern-result");
    }
    if (event.target.name === "evidence[]") {
      updateAssessmentPanel("evidence", "evidence-result");
    }
  });
  byId("reset-assessment").addEventListener("click", () => {
    assessment.querySelectorAll('input[type="checkbox"]').forEach((input) => {
      input.checked = false;
    });
    updateAssessmentPanel("pattern", "pattern-result");
    updateAssessmentPanel("evidence", "evidence-result");
  });
}

const incidentForm = byId("incident-form");
const recordStatus = byId("record-status");

if (incidentForm) {
  const timezoneField = byId("incident-zone");
  try {
    timezoneField.value = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  } catch (_error) {
    timezoneField.value = "";
  }

  const recordFields = [
    ["Date and time", "incident-date"],
    ["Time zone", "incident-zone"],
    ["Place, device, account, or channel", "incident-channel"],
    ["Observed event", "incident-observed"],
    ["Original source and corroboration", "incident-sources"],
    ["Immediate impact", "incident-impact"],
    ["Interpretation or hypothesis", "incident-interpretation"],
    ["Conflicts, alternatives, or possible disproof", "incident-alternatives"],
    ["Next safe, lawful action", "incident-next"],
  ];

  incidentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const observed = byId("incident-observed").value.trim();
    if (!observed) {
      recordStatus.textContent = "Add an observed event before downloading the record.";
      byId("incident-observed").focus();
      return;
    }

    const created = new Date();
    const lines = [
      "MAXLIGHTING — INCIDENT RECORD",
      "Evidence before explanation",
      "",
      `Record created on device: ${created.toISOString()}`,
      "Classification reminder: keep documented facts, survivor allegations, research-supported patterns, hypotheses, and unknowns separate.",
      "",
    ];

    recordFields.forEach(([label, id]) => {
      const value = byId(id).value.trim() || "Not entered";
      lines.push(label.toUpperCase(), value, "");
    });

    lines.push(
      "SAFETY NOTE",
      "This file was generated locally in the browser. Store and share it according to your safety plan. Preserve original source material separately.",
      "",
      "MAXLIGHTING does not verify this record or provide emergency, legal, or medical services."
    );

    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    const datePart = (byId("incident-date").value || created.toISOString()).slice(0, 10);
    anchor.href = url;
    anchor.download = `maxlighting-incident-${datePart}.txt`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    recordStatus.textContent = "Record downloaded on this device. The form remains in this tab until you clear or leave it.";
  });

  byId("print-record").addEventListener("click", () => {
    recordStatus.textContent = "Opening the print dialog. Review the selected printer or PDF destination before saving.";
    window.print();
  });

  byId("clear-record").addEventListener("click", () => {
    const hasContent = recordFields.some(([, id]) => id !== "incident-zone" && byId(id).value.trim());
    if (hasContent && !window.confirm("Clear every field in this incident record?")) {
      return;
    }
    incidentForm.reset();
    try {
      timezoneField.value = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch (_error) {
      timezoneField.value = "";
    }
    recordStatus.textContent = "Incident fields cleared from this tab.";
  });
}

const sourceCards = [...document.querySelectorAll(".source-card")];
const researchSearch = byId("research-search");
const researchType = byId("research-type");
const researchRegion = byId("research-region");

function filterResearch() {
  const query = researchSearch.value.trim().toLocaleLowerCase();
  const type = researchType.value;
  const region = researchRegion.value;
  let shown = 0;

  sourceCards.forEach((card) => {
    const searchable = `${card.dataset.search || ""} ${card.textContent}`.toLocaleLowerCase();
    const matchesQuery = !query || searchable.includes(query);
    const matchesType = type === "all" || card.dataset.type === type;
    const matchesRegion = region === "all" || card.dataset.region === region;
    const visible = matchesQuery && matchesType && matchesRegion;
    card.hidden = !visible;
    if (visible) shown += 1;
  });

  byId("library-count").textContent = `${shown} ${shown === 1 ? "source" : "sources"} shown`;
  byId("research-empty").hidden = shown !== 0;
}

[researchSearch, researchType, researchRegion].forEach((control) => {
  if (control) control.addEventListener("input", filterResearch);
});

const helpRegion = byId("help-region");
const regionPanels = [...document.querySelectorAll("[data-region-panel]")];

function showRegion(region) {
  regionPanels.forEach((panel) => {
    const active = panel.dataset.regionPanel === region;
    panel.classList.toggle("is-active", active);
    panel.setAttribute("aria-hidden", active ? "false" : "true");
  });
}

if (helpRegion) {
  showRegion(helpRegion.value);
  helpRegion.addEventListener("change", () => showRegion(helpRegion.value));
}
