
# Menstrual-Cycle-Tracking-App-Backend-api 

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

**CycleWise** est une API backend robuste et sécurisée, développée avec Node.js et TypeScript, conçue pour alimenter les applications de suivi du cycle menstruel.  Elle offre aux développeurs un ensemble d'outils puissant et flexible pour gérer les données sensibles des utilisatrices, leur permettant de créer des applications qui aident les femmes à mieux comprendre et à prendre en charge leur santé menstruelle.

## Fonctionnalités clés

* **Authentification sécurisée des utilisateurs:**  JWT pour une protection renforcée des données.
* **Suivi complet du cycle menstruel:** Enregistrez les dates de début et de fin des cycles, la durée et les informations sur le flux.
* **Journal détaillé des symptômes:**  Suivez les symptômes, l'humeur, la température basale, les rapports sexuels et la prise de contraception.
* **Base pour les notifications personnalisées:**  Programmez des rappels de règles, d'ovulation et d'autres événements importants du cycle.
* **Potentiel pour des conseils personnalisés:**  Intégrez des algorithmes pour fournir des recommandations basées sur les données des utilisatrices.
* **Architecture évolutive et maintenable:**   Développé avec Node.js, TypeScript et Sequelize (ORM pour PostgreSQL) pour une meilleure organisation du code et une gestion simplifiée de la base de données.

## Démarrage rapide

1. **Clonez le repository:**

   ```bash
   git clone https://github.com/willsonantoine/Menstrual-Cycle-Tracking-App-Backend-api.git
   cd Menstrual-Cycle-Tracking-App-Backend-api
   ```
2. **Installez les dépendances :**
   ```
   npm install
   
   ```
2. **Configurez les variables d'environnement :**
   Créez un fichier .env à la racine du projet et renseignez les informations suivantes :
   ```
   DB_USERNAME=votre_utilisateur_db
   DB_PASSWORD=votre_mot_de_passe_db
   DB_NAME=nom_de_la_base_de_donnees
   DB_HOST=localhost
   DB_PORT=5432
   JWT_SECRET=votre_secret_jwt
   
   ```
3. **Lancez l'application :**
   ```
   npm run dev
   ```

**Contribution**
Les contributions sont les bienvenues! N'hésitez pas à ouvrir des issues pour signaler des bugs ou proposer de nouvelles fonctionnalités.

**Licence**
Ce projet est sous licence ISC. Consultez le fichier LICENSE pour plus d'informations.
