# Workshop - My Spotify Tracker

## Documentation:

1. Spotify API Documentation: [link](https://developer.spotify.com/documentation/web-api/reference/#reference-index)
2. Material UI: [link](https://material-ui.com/)
3. React: [link](https://fr.reactjs.org/)

## 1. Lancement du projet

```shell
$> npm install && npm start
```

Votre application React est maintenant disponible à cette adresse : http://localhost:3000.

> 💡: Une fois l'application lancée, elle est automatiquement mise à jour à chaque modification du code.

## 2. Enregistrement de l'application

La première étape est de vous rendre sur le [dashboard developper](https://developer.spotify.com/dashboard/) de spotify. Pour créer votre projet, il vous suffit de renseigner un nom, une description et d'accepter les CGU.

Une fois le projet créé, accédez au paramètre de votre application (bouton `EDIT SETTINGS`), et dans la section `Redirect URIs`, ajoutez l'url de votre app: http://localhost:3000 dans notre cas.

Enfin récupérez le `CLIENT_ID` et insérez-le dans le fichier `.env`.

## 3. Récuperation du token

Pour récupérer le token, nous allons devoir rediriger l'utilisateur vers le portail de connexion de spotify.
Vous pouvez vous aider de [material-ui](https://mui.com/components/buttons/#contained-buttons) pour créer le bouton.

Nous allons utiliser l'implicit grant flow afin de récupérer le token. Pour comprendre comment construire le lien de redirection cliquez [ici](https://developer.spotify.com/documentation/general/guides/authorization/implicit-grant/).

Écrivez votre code dans le fichier `src/Pages/HomePage/HomePage.js`.

> Pour obtenir plus d'informations sur les différentes méthodes d'authentification de Spotify: [spotify authorization guide](https://developer.spotify.com/documentation/general/guides/authorization-guide/), [code example](https://github.com/spotify/web-api-auth-examples)

## 4. Écriture des requêtes

Maintenant que nous avons récupéré le token nous allons pouvoir récupérer les données de l'utilisateur sur spotify.

Dans le fichier `src/Api/request.js`, complétez les fonctions `getUserTopTracks`, `getUserTopArtists`, et `getUserRecentlyPlayed` afin qu'elles retournent le résultat de la requête à l'API.

La liste des endpoints de l'API spotify: [API Spotify](https://developer.spotify.com/documentation/web-api/reference/#/).  
Les endpoints qui nous intéressent se trouvent dans les catégories `Users` et `Player`.

Pour comprendre comment les paramètres interagissent avec la requête, vous pouvez utiliser la version [console](https://developer.spotify.com/console/) de la documentation. 
Les requêtes qui nous intéressent se trouvent dans les sections `Personalization` et `Player`.

Pour récuperer le token:

```js
localStorage.getItem("accessToken")
```

> 💡: Documentation pour effectuer une requête en javascript: [axios](https://axios-http.com/docs/example).

## 5. Mise en forme des données

Pour récupérer les données, vous allez devoir appeler vos fonctions get à l'intérieur d'un useEffect afin que celle-ci soit appelée une seule fois lors du chargement du composant.

```Jsx
  function displayData() {
    const [apiResult, setApiResult] = useState([]);

    useEffect(() => {
      callToApi(params1, params2)
        .then(response => {
          setApiResult(response);
        })
        .catch(error => {
          console.log(error);
        })
    }, [])
  }
```

> 💡 Pour plus d'information sur les hooks d'effet en React:  https://fr.reactjs.org/docs/hooks-effect.html

En React on utilise useState pour déclarer des variables : 

```Jsx
  const [maVariable, setMaVariable] = useState("toto");

  //maVariable est égale à toto
  setMaVariable("tata")
  //maVariable est maintenant égale à tata
```

Pour mettre en forme vos données vous pouvez utiliser [les tableaux html](https://developer.mozilla.org/fr/docs/Web/HTML/Element/table).


> 💡: Pour itérer sur un tableau en React la fonction map est très utile : plus d'info [ici](https://fr.reactjs.org/docs/lists-and-keys.html).


## 6. Changer l'échelle de temps des données.

Nous allons maintenant laisser la possibilité à l'utilisateur de changer l'échelle de temps du classement (sur 4 semaines, 6 mois ou depuis le début).

Pour cela nous allons créer le groupe de bouton dans le fichier `src/Components/TimeRange/TimeRange.js`.

Vous pouvez utiliser les "button groups" de material ui (plus d'info [ici](https://mui.com/components/button-group/)).

> 💡: Comment gérer les évènements en React: [doc](https://fr.reactjs.org/docs/handling-events.html).

## Pour aller plus loin:

- Écrivez une nouvelle requête pour créer une playlist et y ajouter des titres.  
  Ajoutez ensuite un bouton pour créer cette playlist à partir de vos top titres.
