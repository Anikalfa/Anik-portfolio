What this folder contains

- `domains_anikchowdhury.json` — the file to add to `is-a-dev/register/domains/anikchowdhury.json`.

How to finish (requires `gh` and you to run `gh auth login`):

1. Authenticate GitHub CLI:

```bash
gh auth login
```

2. Run the provided script to fork, branch, add the file, push and open a PR:

```powershell
.\make_pr.ps1
```

3. If reviewers request changes, update the file in the same branch and push again.
