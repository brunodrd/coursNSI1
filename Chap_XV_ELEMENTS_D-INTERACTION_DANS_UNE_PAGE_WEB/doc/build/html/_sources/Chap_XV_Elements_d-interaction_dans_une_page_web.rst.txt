****************************************
Eléments d’interaction dans une page web
****************************************

Analyse d’une page web
======================

Les composants graphiques permettant l’interaction avec l’utilisateur
---------------------------------------------------------------------

Dans une page web, des **éléments** servent à **structurer** la page et à
fournir sa **sémantique**. Par ailleurs, il existe d’autres éléments qui
permettent à l’utilisateur d’interagir avec la page.

Exercice d’application
~~~~~~~~~~~~~~~~~~~~~~

Ouvrir le fichier ``index1.html`` (*dont une copie est fournie
ci-dessous*) avec un éditeur de code (``Visual Studio Code`` par
exemple) et avec un navigateur (``Chrome`` par exemple). Réaliser un
classement des éléments HTML situés dans le corps de la page en deux
groupes: ceux qui structurent et ceux qui permettent l’interaction avec
l’utilisateur.

.. code:: html

   <!DOCTYPE html>
   <html lang="fr">
   <head>
       <meta charset="UTF-8">
       <title>IHM sur le web en NSI</title>
       <style>
           span:hover {
               color: royalblue;
               font-size: 200%;
           }
       </style>
   </head>
   <body>
       <article>
           <h1>Identification</h1>

           <form action="">
               <label for="nom">Votre Nom</label> 
               <input type="text" name="nom" id="nom">
               <label for="prenom">Votre prénom</label>
               <input type="text" name="prenom" id="prenom">
               <label for="mdp">Mot de passe</label>
               <input type="password" name="mdp" id="mdp">
               <input type="submit" value="Valider">
           </form>
       <h1>Les ressources</h1>
       <p> 
       Le site incontournable pour l'étudiant ayant un parcours <span>Web</span> dans son cursus est le site 
       <strong>MDN  web docs</strong>. il s'agit d'une communauté ouverte de développeurs et rédacteurs 
       qui créent des ressources afin de rendre le <span>Web</span> meilleur. <br>
       <a href="https://developer.mozilla.org/fr/docs/Apprendre" target="_blank">Adresse du site</a>   
       </p>
       <p>Son dernier logo</p>
       <img src="../img/logo-MDN.png" alt="logo de la mdn">
       <h1>Les langages</h1>
       <p>Les trois langages à connaître sont:</p>
       <ol>
           <li>HTML</li>
           <li>CSS</li>
           <li>Javascript</li>
       </ol>
       <label for="langage">Sélectionner votre niveau dans ces trois langages</label>
       <select name="listlangages" id="langages">
           <option value="debutant">Débutant</option>
           <option value="inter">Intermédiaire</option>
           <option value="expert">Expert</option>
       </select>
       </article>
   </body>
   </html>

Quels événements sont associés aux composants graphiques?
---------------------------------------------------------

Découvrir les attributs d’événements
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ouvrir le fichier ``evenement.html`` dans le navigateur ``Chrome``.
Ouvrir également la console de *développement web* du navigateur avec la
**touche F12**. Adopter une disposition proche de celle-ci: 

|chrome|

1. Quel élément de la page permet d’interagir avec l’utilisateur ?
2. Lister tous les attributs de cet élément. Sont-ils tous liés à la description de la structure de la page?
3. Quel événement provoque un changement dans la page ?
4. Cet événement est lié à quel attribut?

Qu’appelle-t-on événement et comment est-il lié à une page web?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

On appelle **événement** une action de l’utilisateur ou d’un composant
du navigateur. Les événements associés à des balises HTML sont nombreux.
Voici quelques exemples:

+-----------------------------+-----------------------+---------------+
| Dénomination de l’événement | Description           | Domaine       |
| (event en anglais)          |                       | d’utilisation |
+=============================+=======================+===============+
| onclick                     | Clic du bouton gauche | Pointage      |
|                             |                       | souris        |
+-----------------------------+-----------------------+---------------+
| oninput                     | Modification de champ | Formulaire    |
|                             | d’un formulaire       |               |
+-----------------------------+-----------------------+---------------+
| onload                      | Chargement complet    | Traitement    |
|                             | d’une page            | des pages web |
+-----------------------------+-----------------------+---------------+

| Ils sont liés aux éléments d’une page web en tant qu’\ **attribut**.
  Les attributs d’événements portent un nom préfixé par ``on``. La
  syntaxe habituelle est:
| ``<element on....="action()"></element>``
| ``on....`` est l’événement et ``action()`` est une fonction qui traite
  l’événement (voir paragraphe suivant). 
  
.. note::
    On trouvera sur le site `W3Schools.com <https://www.w3schools.com/tags/ref_eventattributes.asp>`__ une liste exhaustive des attributs d’événements.

Exercice d’application
~~~~~~~~~~~~~~~~~~~~~~

| Compléter le fichier ``exercice.html`` de manière à ce que:

* le lien soit actif (adresse du site: https://www.w3schools.com/)
* lors d’un clic sur le lien, cette action entraine l’ouverture d’un popup (*fenêtre surgissante*) qui indique ‘Très bon choix !’.

.. note::
    L’ouverture d’un popup se fait avec la méthode ``alert()`` à qui on passe le texte à afficher.

.. |chrome| image:: ../../img/image_chrome.png

Comment modifier le traitement des événements?
==============================================

Le langage utilisé
------------------

Le troisième langage incontournable du web est incontestablement
**Javascript** (*autre dénomination ECMAScript*). Il est utilisé pour
implémenter l’interactivité dans les pages web. Le programme de première
NSI ne prévoit pas une étude approfondie de ce langage, aussi les
curieux pourront visiter les excellentes adresses suivantes: 

* `Openclassrooms <https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript>`__ (*en français*); 
* `W3Schools <https://www.w3schools.com/js/default.asp>`__ (*en anglais*).

Présentation de quelques exemples
---------------------------------

Exemple 1
~~~~~~~~~

Dans ce premier exemple simple, on souhaite afficher la date et l’heure
si l’utilisateur clique sur le bouton.

.. code:: html

   <!DOCTYPE html>
   <html lang="fr">
   <head>
       <meta charset="UTF-8">
       <title>Exemple 1</title>
   </head>
   <body>
       <p>Pour afficher la date et l'heure, cliquer sur le bouton</p>
       <button onclick="alert('Nous sommes le : '+ Date())">Quelle heure est-il?</button>
   </body>
   </html>

| Ici l’événement traité est le clic (*du bouton gauche*) de la souris
  sur le bouton. Lorsque cet événement se produit, la fonction ``alert``
  qui permet d’afficher un message dans une fenêtre de type *popup*. Le
  message est concaténé ici avec l’objet ``Date`` de Javascript.
| Les fonctions de traitement d’événements peuvent être beaucoup plus
  longue que dans notre exemple, **on évitera de passer tout le code
  dans l’attribut de l’élément comme dans cet exemple et on privilégiera
  une des méthodes ci-après**. 
  
Exemple 2 
~~~~~~~~~

On reprend le même exemple mais en déportant le traitement de l’événement ``onclick`` dans une fonction définie dans un élément ``<script>``.

.. code:: html

   <!DOCTYPE html>
   <html lang="fr">
   <head>
       <meta charset="UTF-8">
       <title>Exemple 2</title>
   </head>
   <body>
       <p>Cliquer sur le bouton pour afficher la date et l'heure.</p>
       <button onclick="displayDate()">Quelle heure est-il?</button>

       <script>
           function displayDate() {
               alert('Nous sommes le: ' + Date());
           }
       </script>
   </body>
   </html>

--------------

**A retenir**

| En Javascript une façon de déclarer une fonction est d’utiliser le mot
  clé ``function`` suivi d’un nom et d’éventuels paramètres entre
  parenthèses.
| On place le script plutôt en fin de page laissant au navigateur le
  temps de charger tous les éléments de la page. Cette façon de procéder
  est acceptable.

--------------

Exercice d’application
^^^^^^^^^^^^^^^^^^^^^^

| Modifier l’élément ``p`` approprié de la page
  ``ex_app_exemple_2.html`` afin que le texte du paragraphe 1 passe en
  rouge lorsque l’utilisateur clique dessus.
| Un extrait de la documentation sur les attributs événementiels est
  donné ci-après:

+-------------+-------+-----------------------------------------------------+
| Attribute   |Value  | Description                                         |
+=============+=======+=====================================================+
| onclick     |script | Fires on a mouse click on the element               |
+-------------+-------+-----------------------------------------------------+
| ondblclick  |script | Fires on a mouse double-click on the element        |
+-------------+-------+-----------------------------------------------------+
| onmousedown |script | Fires when a mouse button is pressed down on an     |
+-------------+-------+-----------------------------------------------------+
| onmousemove |script | Fires when the mouse pointer is moving while it is  |
+-------------+-------+-----------------------------------------------------+
| onmouseout  |script | Fires when the mouse pointer moves out of an        |
+-------------+-------+-----------------------------------------------------+
| onmouseover |script | Fires when the mouse pointer moves over an element  |
+-------------+-------+-----------------------------------------------------+
| onmouseup   |script | Fires when a mouse button is released over an       |
|             |       | element                                             |
+-------------+-------+-----------------------------------------------------+
| onwheel     |script | Fires when the mouse wheel rolls up or down over an |
|             |       | element                                             |
+-------------+-------+-----------------------------------------------------+

Contenu du fichier ``ex_app_exemple_2.html``:

.. code:: html

   <!DOCTYPE html>
   <html lang="fr">
   <head>
       <meta charset="UTF-8">
       <title>Exercice d'application - exemple 2</title>
   </head>
   <body>
       <p id="para1">Double-cliquer sur ce paragraphe pour changer la couleur.</p>

       <p id="para2">
           L'exercice <br>
           La fonction 'dblClic()' doit être appelée lorsque l'utilisateur double clique sur le paragraphe identifié par "para1"
           Cette fonction modifie la couleur du texte de ce paragraphe.
       </p>

   <script>
   function dblClic() {
     document.getElementById("para1").style.color = "red";
   }
   </script>
   </body>
   </html>

Exemple 3
~~~~~~~~~

Une bonne pratique à adopter est de déporter le code javascript dans un
fichier externe. Analysons le code HTML puis Javascript de la page
``evenement.html`` rencontrée plus haut.

Le code HTML
^^^^^^^^^^^^

Une partie du code HTML de l’élément ``body`` a été reproduit
ci-dessous.

.. code:: html

   <body>
       <article>
           <section>
               .......
               <button id="boutonSolution" onclick="afficheMasque()">Afficher solution</button>
               <div id="solution1">
                   <ol>
                       <li>Ce code affiche l'image 'papi-rene.jpg'</li>
                       <li>L'image se trouve dans le sous-dossier 'images' situé dans le dossier courant.</li>
                       <li>Il y a un événement associé à un clic sur le lien (une redirection vers 'rene.html')</li>
                   </ol>
               </div>
           </section>
       </article>
       <script src="js/script.js"></script>
   </body>

Un bouton est présent. Il est identifié par ``id="boutonSolution"``.
L’attribut d’événement ``onclick`` est associé à l’exécution d’une
fonction ``afficheMasque()``. Cette fonction n’est pas définie dans le
corps du document HTML. Elle est présente dans le fichier ``script.js``
du dossier ``js``.

**Il est préférable de placer la définition des fonctions liées au
traitement des événements dans un fichier externe, d’extension ‘.js’. Ce
fichier sera référencé dans le document HTML par l’attribut src de la
balise** ``<script>``.

Le code Javascript
^^^^^^^^^^^^^^^^^^

.. code:: javascript

   const afficheMasque = function () {
       // On utilise la propriété CSS visibility pour rendre visible ou pour masquer un élément

       let sol = document.getElementById("solution1")//sélection du bloc html contenant la solution 
       const etatAffichage = getComputedStyle(sol, null)//détermination de sa propriété visible ou caché

       let btn = document.getElementById("boutonSolution")
       //sélection de l'élément bouton

       if (etatAffichage.visibility == "hidden") {
           /*
           Si le bloc solution est caché, un clic le rendra visible;
           On change aussi le texte du bouton.
           */
           sol.style.visibility = "visible";
           btn.innerHTML = "Cacher solution"
       } else {
           /*
           Si le bloc solution est visible, un clic le rendra caché;
           On change aussi le texte du bouton.
           */
           sol.style.visibility = "hidden"; 
           btn.innerHTML = "Afficher solution"
       }
   }

| En Javascript, les blocs d’instructions sont délimités par les
  accolades ``{`` et ``}``. L’indentation n’est significative comme en
  python, cependant elle améliore la lisibilité du code. Les
  commentaires sont signalés par ``//`` ou la paire ``/*``, ``*/`` selon
  qu’ils tiennent sur une ligne ou plusieurs lignes. Les mots clés
  ``const`` et ``let`` permettent de déclarer des variables. Une
  variable déclarée avec ``const`` ne pourra plus être modifiée par la
  suite.
| Javascript est utilisé ici pour modifier les propriétés CSS du bloc
  ``div`` contenant la solution: ``visibility = "visible"`` ou
  ``visibility = "hidden"``.

.. _exercice-dapplication-1:

Exercice d’application
^^^^^^^^^^^^^^^^^^^^^^

| On souhaiterait modifier légèrement le code ``script.js`` de manière à
  ce que même si l’utilisateur clique sur ‘Afficher solution’ celle-ci
  soit de nouveau cachée automatiquement au bout de 5 secondes.
| On utilisera la méthode javascript ``setTimeout`` à qui on passera
  deux arguments: la fonction qui *cachera* le code à nouveau et le
  temps (*en millisecondes*) au bout duquel cette fonction sera
  exécutée. Typiquement, cette fonction sera appelée avec la syntaxe
  suivante:

.. code:: javascript

   setTimeout(function (){
               .....................; 
               .....................;
               }, 5000)

On peut trouver des exemples sur `le site
MDN <https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout>`__

-------------
**En résumé**
-------------

Les principaux éléments d’interaction d’une page web sont: 

* les styles CSS;
* des éléments graphiques HTML comme des boutons, associés à des fonctions de traitements d’événements par le biais de leurs attributs.

Les fonctions de traitements des événements sont codées en javascript.
On déportera les codes javascript dans un fichier externe. Dans les cas
simples, il s’agira de: 

* sélectionner un élément HTMl avec une méthode appropriée;
* modifier une propriété CSS de cet élément.

B. DARID |logo|

.. |logo| image:: ../../img/licence.png


