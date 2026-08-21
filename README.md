# theprompts

Personal prompts for Claude, Cursor, and other coding agents.

```
theprompts/
  README.md              ← you are here
  website/               ← public site (GitHub Pages)
    index.html           ← open this in a browser
    prompts.js           ← prompts that appear on the site
  private-prompts/       ← prompts that do NOT appear on the site
    template.md          ← copy this to add a private prompt
```

## Two kinds of prompts

| I want to… | Put it here |
|------------|-------------|
| Show it on the website | `website/prompts.js` |
| Keep it in git only (not on the website) | `private-prompts/your-name.md` |

If this GitHub repo is **public**, files in `private-prompts/` are still visible on GitHub.com. They are only hidden from the website. Use a private repo for secrets.

## Add a prompt to the website

1. Open `website/prompts.js`.
2. Copy the commented template at the bottom of the list.
3. Fill in `title` and `prompt`.
4. Save and refresh `website/index.html`.

## Add a prompt that stays off the website

1. Copy `private-prompts/template.md` to a new file, e.g. `private-prompts/code-review.md`.
2. Replace the placeholder text.
3. Commit.

## Preview locally

Open `website/index.html` in a browser.

## GitHub Pages

The site is the `website/` folder. A GitHub Action deploys it.

In the repo: **Settings → Pages → Source → GitHub Actions**.

After the next push to `main`, the site is at:

https://xajeel.github.io/theprompts/
