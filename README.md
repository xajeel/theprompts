# My Prompts

Public coding-agent prompts on a static site, plus private Markdown prompts in the same GitHub repo.

| Location | Shows on website? | In GitHub repo? |
|----------|-------------------|-----------------|
| `docs/prompts-data.js` | Yes | Yes |
| `unpublished/*.md` | No | Yes |

## Add a public prompt (on the website)

Edit `docs/prompts-data.js`, save, open `docs/index.html`. Optionally run `node generate-md.js` to refresh `prompts.md`.

## Add a private prompt (Markdown only)

Create a file in `unpublished/`, for example `unpublished/my-prompt.md`. Copy `_template.md` in that folder. These files are in git, but GitHub Pages does **not** publish them as long as Pages is set to the `docs/` folder.

**Important:** if the GitHub repo is **public**, anyone can still open those Markdown files on GitHub.com. Unpublished only means “not on the website.” For secrets, use a **private** repo.

## GitHub Pages

1. Push this folder to GitHub (`main` branch).
2. Repo **Settings → Pages**.
3. Source: **Deploy from a branch**
4. Branch: **main**, folder: **`/docs`** (not root)
5. Site URL: `https://YOUR_USER.github.io/YOUR_REPO/`

The repo must be public unless you have GitHub Pro (Pages on private repos is a paid feature).
