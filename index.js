repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v2.5.0
    hooks:
      - id: check-merge-conflict
      - id: check-toml
      - id: check-yaml
        args: [--unsafe] # Required due to custom constructors (e.g. !ENV)
      - id: end-of-file-fixer
      - id: trailing-whitespace
        args: [--markdown-linebreak-ext=md]
  - repo: https://github.com/pre-commit/pygrep-hooks
    rev: v1.5.1
