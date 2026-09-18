# Grade 2 Writing Queue

A writing-conference queue, desk board and countdown timer for a Grade 2 classroom.
Students put themselves in line to have their writing checked; the teacher works the
line from the sidebar while the class tracks its own writing stages on the desk grid.

## Put it online with GitHub Pages
1. Upload every file and the `icons` folder to a **public** repository (keep the folder structure).
2. Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.
3. After a minute or two, open `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Install it on a computer or smartboard
Open the address in **Edge** or **Chrome** and use the install icon in the address bar
(or Edge ⋯ → Apps → Install this site as an app; Chrome ⋮ → Cast, save and share → Install page as app).
It then opens in its own window with its own icon, like any other installed program.

Open the app once while online so it saves a copy for offline use. After that it runs
with no internet at all, and picks up any changes you publish the next time it opens online.

## Using it

**The welcome splash** — the app opens on a welcome screen for the class, with two buttons:

- **Play the Warm-Up Song** opens the handwriting warm-up video. Close it with the
  &times;, by clicking outside it, or with <kbd>Esc</kbd>.
- **Start Writing** goes to the class board. <kbd>Enter</kbd> does the same, and
  <kbd>Esc</kbd> works once the song is closed.

The splash appears every time the app is opened. Leaving it always stops the song.

**The first time you open it** the app is empty: no class, no writing project, no
students. Press **Set Up Class** to make your first one.

**Set Up Class** — enter the class name, the writing project, and the roster.
One student per line:

```
Sachiko, 203, girl
Jimmy, 203, boy
River, 301
```

Homeroom and `girl`/`boy` are optional. Gender only chooses the desk colour, so a line
without one just gets a neutral desk. Seats fill left to right in the order you type them.

Saving a roster **keeps the writing stages** of students who are still on it, so fixing a
typo or adding a late arrival mid-project doesn't wipe the class's work.

**More than one class** — **New Class** in that same box starts another one, and
**Delete Class** removes the one you are on (you always keep at least one). Switch between
them with the **Class** dropdown at the top of Teacher Controls. Each class keeps its own
roster, seating, writing stages and check line, and the app reopens on whichever one you
used last.

**Welcome Screen** — the button in the top right goes back to the opening screen, so the
warm-up song can be played again part way through a lesson.

**The check line**
- **Ready to Check** — tap it, then tap a desk to put that student in line.
- Tap a student in the sidebar to select them; the arrows move them up or down.
- **Return to Seat** sends them back without a check. **Back of Line** moves them to the end.
  **Done** checks them off and moves them up one writing stage.
- With nobody selected, those three buttons act on whoever is being checked now.

**Change Level** — tap it, then tap a desk to move that student to the next writing stage
(Pre-Writing → Sentences → Paragraphs → Publishing → Done), with a celebration at the top.

**Swap Seats** — tap it, then tap two desks to swap them. Tap the same desk twice to cancel.
A student in line keeps their place after moving.

**Reset All** — puts everyone back to Pre-Writing and clears the line, keeping the roster.

**Timer** — the handle under the clock slides open the controls. The gear sets the alarm
sound, volume, and whether the clock turns red near the end.

Reset All and saving a roster can both be undone from the bar that appears afterwards.

## Fitting the screen
The board never scrolls. However many students are in the class, the desks are resized to
fit the window, so everyone is visible at once at 100% zoom. A bigger window just means
bigger desks.

## Where the classes are saved
Every class you set up — rosters, seating, writing stages and check lines — is saved in the
browser's local storage on that computer. They survive closing the app and rebooting, but
they don't travel between computers, and clearing the browser's site data clears them too.

## Changing the warm-up song
Replace `media/warm-up-song.mp4`, keeping the same filename. Use **H.264 video with AAC
audio in an .mp4** — that is what every current browser can play. Then bump the `CACHE`
name in `sw.js` (for example `writing-queue-v2` to `-v3`) so installed boards fetch the
new one instead of the copy they already saved.

The song is cached for offline use like the rest of the app, but it is several megabytes,
so a board that never finished caching it will still open and run fine; it just shows a
"can't play the song" message with a download link until it is online again.

## Changing the icons
`icons/icon.svg` is the source art. Re-export it to the PNG sizes listed in
`manifest.webmanifest` if you want a different look.
