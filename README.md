# Cook it coding test
La version Francaise se trouve au bas.
***
This project contains the coding test for Cook it.\
The estimated completion time for this test is 2 hours.\
The technologies used for this test are Typescript, Apollo Server (GraphQL), Awilix (for DI), if you are unfamiliar with them we 
recommend you read up on them before starting this test.\

## Project structure
The project uses the Onion Architecture:
```text
src
├── app                     # Application Layer - Entry and exit points of the application
│   ├── operations          # Operations to modify data
│   ├── queries             # Queries for data
│   └── dependencies.ts     # dependencies created in this layer that will need to be injected
├── domain                  # Domain layer - defines the application 
│   ├── models              # Data Models
│   ├── errors              # Custom Errors
│   ├── operations          # Definitions for the operations
│   ├── queries             # Definitions for the queries
│   └── repositories        # Definitions for the repositories
├── infrastructure          # Infrastructure Layer - interface with the infrastructure of the application (as opposed to the logic)
│   ├── ioc                 # Inversion of control logic
│   ├── database            # Database infrastructure (no actual connector, we mock the database)
│   └── dependencies.ts     # Dependencies to be injected
└── interfaces              # Interface Layer - User interface
    └── graphql             # GraphQL interfaces
```

## Get Started
To get started you will need to install the project.
To do so make sure you have `Git`, `nodejs` (v12+) and `npm` installed on your machine.\
When they are all installed, clone this git repository and run the following command from inside the repository:

```shell script
npm install
npm run start:dev
```
After installing all the dependencies you should see the following message: 

>  🚀      GraphQL is now running on http://localhost:3000/graphql

You are now ready to start!

Run your first test query by visiting [localhost:3000/graphql](http://localhost:3000/graphql) and running the following 
query
```graphql
query {
  getLunchBoxByOwner(firstName: "John", lastName: "Cena") {
    owner {
      firstName
      lastName
    },
    items
  }
}
```
 
Which should return

```json
{
  "data": {
    "getLunchBoxByOwner": [
      {
        "owner": {
          "firstName": "John",
          "lastName": "Cena"
        },
        "items": [
          "banana",
          "spaghetti"
        ]
      },
      {
        "owner": {
          "firstName": "John",
          "lastName": "Cena"
        },
        "items": [
          "steak",
          "linguini"
        ]
      }
    ]
  }
}
```

## Tasks
We have currently written a Lunch Box logging application. Using this application, we are able to:
- Find lunch boxes owned by a person
- Create a new lunch box for a person

You are tasked with improving this application:
1. When a lunch box is created, create a new person in the database if that person is not already present.
    ```gherkin
    Given No Person is present in the database
    When I create a new lunch box with owner firstName = "Son" and lastName = "Goku"
    Then the database has person <firstName> <lastName> in the database
    | firstName | lastName  |
    | Son       | Goku      |
    ```

2. We want to be able to query users based on their first name. The query parameter can also only be a section of their first
name (e.g. Searching for `arn` should match `Arnold`).
    ```gherkin
    Given the database contains Persons: <firstName> <lastName>
    | firstName | lastName   |
    | Arnold    | Terminator |
    | Noemie    | Lenoir     |
    | Jarno     | Trulli     |
    | Son       | Goku       |
    When I query for Persons with first name containing "no"
    Then the application returns Persons: <firstName> <lastName>
    | firstName | lastName   |
    | Arnold    | Terminator |
    | Noemie    | Lenoir     |
    | Jarno     | Trulli     |
    ```

3. We now want to track when the Lunch Box was made, when it was eaten as well as the ingredients that are in each item.
Build a UML data diagram for the best way to model this data.\
You can modify the current data structure.

 > insert your uml diagram(s) here

## Submission
To submit this test you must create a pull request with your code/answers by the deadline

# Test Technique Développeur Cook it
Ce projet contient le test technique pour Cook it.\
Le temps estimé pour compléter ce test est environ 2h.\
Les technologies utilisées sont Typescript, Apollo Server (GraphQL) et Awilix (pour l'injection de dépendances). Si vous
n'êtes pas familier avec ces technologies, nous vous conseillons de vous renseigner au préalable.

## Structure du projet
Le projet utilise l'architecture Onion:
```text
src
├── app                     # Application Layer - Point d'entrée et de sortie de l'application
│   ├── operations          # Opérations pour modifier les données
│   ├── queries             # Requêtes pour accéder aux données
│   └── dependencies.ts     # Dépendances qui ont été créées dans ce layer pour les injecter
├── domain                  # Domain layer - définit l'application
│   ├── models              # Modèle de données
│   ├── errors              # Custom Errors
│   ├── operations          # Définitions pour les opérations
│   ├── queries             # Définitions pour les queries
│   └── repositories        # Définitions pour les repositories
├── infrastructure          # Infrastructure Layer - l'infrastructure qu'utilise l'application 
│   ├── ioc                 # Logique d'inversion de contrôle
│   ├── database            # Base de données infrastructure (pas de vrai connecteur, nous simulons la base de données)
│   └── dependencies.ts     # Dépendances qui ont été créées dans ce layer pour les injecter
└── interfaces              # Interface Layer - Interfaces utilisateur
    └── graphql             # Interfaces GraphQL
```

## Démarrer
Pour commencer, vous allez devoir installer le projet.
Vérifiez que vous avez `git`, `nodejs` (v12+) et `npm` installés sur votre système.\
Quand ces logiciels sont installés, clonez ce repository et lancez les commandes suivantes a l'intérieur du repository:

```shell script
npm install
npm run start:dev
```
Vous devez maintenant voir le message suivant:

>  🚀      GraphQL is now running on http://localhost:3000/graphql

Vous êtes maintenant prêt à débuter!

Roulez votre première requête test en visitant [localhost:3000/graphql](http://localhost:3000/graphql) et en envoyant 
la query suivante:
```graphql
query {
  getLunchBoxByOwner(firstName: "John", lastName: "Cena") {
    owner {
      firstName
      lastName
    },
    items
  }
}
```
 
 Qui devrait retourner:

```json
{
  "data": {
    "getLunchBoxByOwner": [
      {
        "owner": {
          "firstName": "John",
          "lastName": "Cena"
        },
        "items": [
          "banana",
          "spaghetti"
        ]
      },
      {
        "owner": {
          "firstName": "John",
          "lastName": "Cena"
        },
        "items": [
          "steak",
          "linguini"
        ]
      }
    ]
  }
}
```

## Tâches
Nous avons écrit une application qui track des boites lunch. Avec celle-ci nous sommes capables de:
- Trouver les boites lunch qui appartiennent à une personne
- Créer une nouvelle boite lunch pour une personne

Vous avez comme tâches d'améliorer cette application: 
1. Quand une nouvelle boite lunch est créée, une personne devrait aussi être créée si celle-ci n'existe pas encore dans 
la base de données.
    ```gherkin
    Given No Person is present in the database
    When I create a new lunch box with owner firstName = "Son" and lastName = "Goku"
    Then the database has person <firstName> <lastName> in the database
    | firstName | lastName  |
    | Son       | Goku      |
    ```

2. Nous voulons être capable de chercher les utilisateurs présents dans le système à partir de leur prénom (`firstName`).
Nous allons chercher soit avec un prénom complet ou juste une partie du prénom (e.g. Si je cherche pour `arn` je devrais 
avoir les informations a propos de `Arnold`).
    ```gherkin
    Given the database contains Persons: <firstName> <lastName>
    | firstName | lastName   |
    | Arnold    | Terminator |
    | Noemie    | Lenoir     |
    | Jarno     | Trulli     |
    | Son       | Goku       |
    When I query for Persons with first name containing "no"
    Then the application returns Persons: <firstName> <lastName>
    | firstName | lastName   |
    | Arnold    | Terminator |
    | Noemie    | Lenoir     |
    | Jarno     | Trulli     |
    ```

3. Nous voulons maintenant garder une trace de quand la boite lunch à été créée, quand elle à été mangée ainsi que chaque
ingrédient qui se trouve dans chaque item de la boite lunch. Construisez un modèle de données UML pour stocker ces données
d'une manière optimale.\
Vous pouvez changer le modèle de données présentement utilisé dans le projet.

 > insérez vos diagramme(s) uml ici

## Soumission
Pour soumettre vos réponses à ce test, créez une Pull Request avant l'echéance.
