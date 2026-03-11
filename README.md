# market

Mini site statique pour présenter des recommandations de produits Amazon avec un dashboard admin.

## Pages

- `index.html` : vitrine publique avec cartes produits dynamiques et liens affiliés Amazon.
- `dashboard.html` : dashboard sécurisé (session locale) pour ajouter/supprimer des produits.
- `ajouter.html` : redirection informative vers le dashboard.

## Lancer en local

```bash
python3 -m http.server 8000
```

Puis ouvrir :

- `http://localhost:8000/`
- `http://localhost:8000/dashboard.html`

## Fonctionnement

- Les produits sont stockés dans `localStorage` (`steeven_products_v1`).
- Les nouveaux produits sont validés pour :
  - domaine Amazon (`amazon.*`),
  - présence d'un paramètre d'affiliation `tag=`.
- Le dashboard demande un mot de passe, hashé en SHA-256 côté client, puis ouvre une session `sessionStorage`.

## Notes sécurité

- Cette sécurité côté front protège surtout contre l'accès accidentel.
- Pour une vraie sécurité de production, utiliser une authentification backend (JWT/session serveur) et une base de données.
