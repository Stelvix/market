# market

Mini site statique pour présenter des recommandations de produits Amazon.

## Pages

- `index.html` : landing page publique (hero, produits, à propos, contact).
- `ajouter.html` : formulaire d'ajout produit vers un webhook externe.

## Lancer en local

```bash
python3 -m http.server 8000
```

Puis ouvrir :

- `http://localhost:8000/`
- `http://localhost:8000/ajouter.html`

## Notes sécurité

- Les secrets (token/API key) ne doivent **jamais** être écrits en dur dans le front.
- Pour protéger réellement la page d'ajout, implémentez une authentification côté serveur.
