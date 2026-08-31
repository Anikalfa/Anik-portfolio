# Usage: run after `gh auth login`
# This script forks the is-a-dev/register repo, creates a branch, adds the JSON file, commits, pushes and opens a PR.

set -e

$forked = gh repo fork is-a-dev/register --clone --remote=true --yes
Set-Location register

$branch = "add-anikchowdhury"
git checkout -b $branch

# Copy prepared file into repo
Copy-Item -Path "..\domains_anikchowdhury.json" -Destination "domains\anikchowdhury.json" -Force

git add domains/anikchowdhury.json
if (-not (git diff --cached --quiet)) {
    git commit -m "Register anikchowdhury.is-a.dev"
    git push --set-upstream origin $branch
    gh pr create --title "Register anikchowdhury.is-a.dev" --body "Registering anikchowdhury.is-a.dev for Anikalfa (email: anikchowdhury262000@gmail.com). Includes TXT verification and CNAME to anikalfa.github.io." --base main
} else {
    Write-Host "No changes to commit"
}
