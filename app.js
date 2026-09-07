const KLUCZ = "lista-zadan-v1";

const formularz = document.getElementById("formularz");
const pole = document.getElementById("pole-zadania");
const lista = document.getElementById("lista");
const pusty = document.getElementById("pusty");

function wczytaj() {
  try {
    return JSON.parse(localStorage.getItem(KLUCZ)) || [];
  } catch (blad) {
    return [];
  }
}

function zapisz(zadania) {
  localStorage.setItem(KLUCZ, JSON.stringify(zadania));
}

function renderuj() {
  const zadania = wczytaj();
  lista.innerHTML = "";
  pusty.classList.toggle("ukryty", zadania.length > 0);

  zadania.forEach((zadanie) => {
    const element = document.createElement("li");
    if (zadanie.zrobione) {
      element.classList.add("zrobione");
    }

    const poleWyboru = document.createElement("input");
    poleWyboru.type = "checkbox";
    poleWyboru.checked = zadanie.zrobione;
    poleWyboru.addEventListener("change", () => {
      przełącz(zadanie.id);
    });

    const tekst = document.createElement("span");
    tekst.textContent = zadanie.tresc;

    const usun = document.createElement("button");
    usun.type = "button";
    usun.className = "usuwanie";
    usun.textContent = "Usuń";
    usun.addEventListener("click", () => {
      usunZadanie(zadanie.id);
    });

    element.append(poleWyboru, tekst, usun);
    lista.append(element);
  });
}

function dodaj(tresc) {
  const zadania = wczytaj();
  zadania.unshift({
    id: Date.now(),
    tresc,
    zrobione: false,
  });
  zapisz(zadania);
  renderuj();
}

function przełącz(id) {
  const zadania = wczytaj().map((zadanie) => {
    if (zadanie.id === id) {
      return { ...zadanie, zrobione: !zadanie.zrobione };
    }
    return zadanie;
  });
  zapisz(zadania);
  renderuj();
}

function usunZadanie(id) {
  const zadania = wczytaj().filter((zadanie) => zadanie.id !== id);
  zapisz(zadania);
  renderuj();
}

formularz.addEventListener("submit", (zdarzenie) => {
  zdarzenie.preventDefault();
  const tresc = pole.value.trim();
  if (!tresc) {
    return;
  }
  dodaj(tresc);
  pole.value = "";
  pole.focus();
});

renderuj();
