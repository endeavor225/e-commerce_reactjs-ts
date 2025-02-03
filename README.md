[![version npm](https://badge.fury.io/js/cra-template-typescript-redux.svg)](https://badge.fury.io/js/cra-template-typescript-redux)
[![Statut de l'action](https://github.com/alexandr-g/cra-template-typescript-redux/workflows/CI/badge.svg?branch=master)](https://github.com/alexandr-g/cra-template-typescript-redux/actions)
[![publication sémantique](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![téléchargements npm](https://img.shields.io/npm/dm/cra-template-typescript-redux)

# Un modèle d'application Create React App avec Redux + TypeScript

Un modèle d'application [Create React App](https://github.com/facebook/create-react-app) (CRA) avec une configuration prédéfinie incluant **Redux**, **TypeScript**, **React Router**, **React Testing Library** et une configuration personnalisée d'**ESLint**.

Le fichier README original de Create React App est disponible [ici](./README_CRA.md).

## Utilisation

```bash
npx create-react-app nom-de-votre-projet --template typescript-redux
```

Ou

```bash
yarn create react-app nom-de-votre-projet --template typescript-redux
```

La commande `npx` installe la version stable la plus récente de CRA depuis npm.

Le paramètre `--template` pointe vers ce modèle. Notez que le préfixe `cra-template-` est omis.

## Motivation

Vous connaissez la galère. Vous commencez un nouveau projet et devez tout reconfigurer encore et encore. Il faut ajouter le routage, puis Redux... et ça prend énormément de temps ! Et si vous aviez dès le départ tous les outils nécessaires ? L'objectif est de se concentrer sur la création d'applications impressionnantes, sans perdre des heures en configuration. C'est pourquoi j'ai créé ce modèle. Il est là pour vous aider.

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

- `yarn start` - lance l'application en mode développement. Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat dans le navigateur.
- `yarn test` - lance les tests en mode interactif.
- `yarn build` - compile l'application pour la production dans le dossier `build`.
- `yarn eject` - expose le contenu du package `react-script`.
- `yarn lint` - analyse les fichiers du projet selon les règles eslint.
- `yarn fix` - comme `yarn lint`, mais corrige automatiquement les erreurs si possible.

## Configuration de Redux

Le modèle fournit une configuration basique de Redux avec une structure de dossiers [basée sur les fonctionnalités](https://redux.js.org/style-guide/style-guide/#structure-files-as-feature-folders-or-ducks). Vous pouvez utiliser l'extension [Redux devtools](http://extension.remotedev.io/). Un exemple de fonctionnalité est inclus dans le dossier `src/features`.

## Tests

Les tests sont réalisés avec [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## [Prettier](https://prettier.io/)

J'ai ajouté `prettier` pour garantir un formatage cohérent. Si vous n'aimez pas les points-virgules en fin de ligne, modifiez les règles de `prettier` dans `.prettierrc` selon votre style de code.

## Styles/CSS

Pour le style de l'application d'exemple, j'ai utilisé [Materialize](https://materializecss.com/). Ce modèle n'impose aucun système de style, vous pouvez utiliser n'importe quelle librairie CSS ou CSS-in-JS de votre choix.

### Comment supprimer Materialize

Pour supprimer [MaterializeCSS](https://materializecss.com/), allez dans le dossier `public`, ouvrez `index.html` et supprimez la ligne suivante dans le `<head>` :

```html
<!--Import materialize.css-->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
/>
```

Ensuite, modifiez ou supprimez toutes les `classNames` associées à Materialize et utilisez votre propre système de style.

## Configuration ESLint

Le modèle étend les règles ESLint de CRA avec un ensemble personnalisé. Les règles ESLint sont commentées pour votre confort, n'hésitez pas à les modifier dans `.eslintrc`.

## Tester le modèle en local

Pour tester votre modèle en local, exécutez :

```bash
npx create-react-app my-app --template file:./cra-template-typescript-redux
```

## Comment créer un modèle Create React App personnalisé

J'ai rédigé un guide pas à pas sur la création de modèles CRA personnalisés.

[Lire sur Medium](https://medium.com/@alexgrischuk/how-to-create-custom-create-react-app-cra-templates-73a5196edeb)

[Lire sur mon blog personnel](https://grischuk.de/posts/how-to-create-custom-create-react-app-templates)

[Lire sur dev.to](https://dev.to/alexandrg/how-to-create-custom-create-react-app-cra-templates-3nca)

## Merci

J'espère que ce modèle vous sera utile et que vous prendrez plaisir à l'utiliser 🖤

