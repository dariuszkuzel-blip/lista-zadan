# Lista zadań

Prosta aplikacja w przeglądarce: dodawanie, oznaczanie i usuwanie zadań.
Zadania zapisują się w pamięci przeglądarki (`localStorage`), bez serwera i bez konta.

To repo służy do nauki **Git**, **GitHub** i pracy z Grokiem.

## Jak uruchomić

1. Pobierz projekt na komputer:

```bash
git clone https://github.com/dariuszkuzel-blip/lista-zadan.git
cd lista-zadan
```

2. Otwórz plik `index.html` w przeglądarce (dwuklik albo przeciągnięcie na okno Chrome / Firefox / Edge).

Nie potrzebujesz instalować Node.js ani żadnego serwera.

## Pliki

| Plik | Rola |
|---|---|
| `index.html` | Struktura strony |
| `styles.css` | Wygląd |
| `app.js` | Logika: dodawanie, usuwanie, zapis |
| `.gitignore` | Pliki, których Git ma nie śledzić |

## Co ćwiczyć dalej

- zmień kolor przycisku w `styles.css`
- zmień tekst nagłówka w `index.html`
- zrób commit i push

```bash
git add .
git commit -m "Zmiana wyglądu listy zadań"
git push
```
