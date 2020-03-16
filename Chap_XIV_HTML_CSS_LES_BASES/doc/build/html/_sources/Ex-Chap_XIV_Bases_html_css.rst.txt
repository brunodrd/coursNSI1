************************
HTML5 & CSS3 - Exercices
************************

Connaitre le cours
==================

On considère le code suivant:

.. code:: html

      <!DOCTYPE html>
      <html lang="fr">
      <head>
            <meta charset="UTF-8">
            <title>Les documents HTML</title>
      </head>
      <body>
            <h1>Structuration de document</h1>
            <p>Les <em>balises</em> HTML doivent rendre compte de la structure de la page.</p>
            <h1>Syntaxe des balises HTML</h1>
            <p>
                Les balises HTML respectent une syntaxe simple et stricte :
            </p>
                <ul>
                    <li>Un chevron ouvrant (&lt;)</li>
                    <li>Le nom de la balise</li>
                    <li>Des attributs (optionnels). Un espace, suivi du nom de l'attribut, 
                        d'un signe égal (=) et d'une valeur entre doubles quotes ("").</li>
                    <li>Un chevron fermant (&gt;)</li>
                </ul>
             
      </body>
      </html> 

1. Quel est le langage qui permet de présenter le contenu et la
   structure d’un document?
2. Quel est le rôle des éléments présents entre ``<head>`` et
   ``</head>`` ?
3. Donner la signification des balises ``<h1>``, ``<p>``, ``<ul>`` et
   ``<li>``.
4. On souhaiterait ajouter un lien vers le site MDN web docs (référence
   sur HTML)
   ``https://developer.mozilla.org/fr/docs/Apprendre/HTML/Balises_HTML``.
   Que faut-il ajouter au code précédent ?
5. Quel langage permet de mettre en forme cette page?
6. Peut-on inclure les instructions de ce langage dans le document HTML?
   Sinon, quelle est la bonne pratique?
7. Les instructions de la question précédente sont les suivantes:

.. code:: cpp

   h1 {
       color: gray;
   }

   p {
       text-align: center;
       border: 1px solid;
   }

-  Quelle(s) seront les conséquences sur le document?

-  La mise en forme va concerner tous les éléments ``p``. Que faut-il
   faire et dans quel fichier intervenir, si on veut cibler un élément
   en particulier?

Exercice: composer des balises
==============================

Dans le texte ci-dessous : 

* Informatique est un titre de niveau 1 
* Définition et Histoire sont des titres de niveau 2 
* Chacune des sept autres portions de texte est un paragraphe 
* Chaque titre et les paragraphes le suivant constitue une section 
* L’ensemble du document constitue un article

Réaliser un fichier HTML permettant de répondre à une telle structure.
Rajouter pied de page contenant un lien vers
``https://fr.wikipedia.org/wiki/Informatique``.

.. code:: html

   Informatique

   L'informatique est un domaine d'activité scientifique, technique et industriel concernant le traitement automatique de l'information par l'exécution de programmes informatiques par des machines : des systèmes embarqués, des ordinateurs, des robots, des automates, etc.

   Ces champs d'application peuvent être séparés en deux branches, l'une, de nature théorique, qui concerne la définition de concepts et modèles, et l'autre, de nature pratique, qui s'intéresse aux techniques concrètes de mise en oeuvre. Certains domaines de l'informatique peuvent être très abstraits, comme la complexité algorithmique, et d'autres peuvent être plus proches d'un public profane. Ainsi, la théorie des langages demeure un domaine davantage accessible aux professionnels formés (description des ordinateurs et méthodes de programmation), tandis que les métiers liés aux interfaces homme-machine sont accessibles à un plus large public.

   Définition

   La science informatique n'est pas plus la science des ordinateurs que l'astronomie n'est celle des télescopes.

   Le terme "informatique" résulte de l'association du terme "information" au suffixe "-ique" signifiant "qui est propre à". Comme adjectif, il s'applique à l'ensemble des traitements liés à l'emploi des ordinateurs et systèmes numériques. Comme substantif, il désigne les activités liées à la conception et à la mise en œuvre de ces machines. Des questions de télécommunications comme le traitement du signal ou la théorie de l'information, aussi bien que des problèmes mathématiques comme la calculabilité s'y rattachent. Dans le vocabulaire universitaire américain, l'informatique ("computer science") désigne surtout l'informatique théorique : un ensemble de sciences formelles qui ont pour objet d'étude la notion d'information et des procédés de traitement automatique de celle-ci, l'algorithmique.

   Les applications de l'informatique depuis les années 1950 forment la base du secteur d'activité des technologies de l'information et de la communication. Ce secteur industriel et commercial est lié à la fois aux procédés (logiciel, architectures de systèmes) et au matériel (électronique, télécommunication). Le secteur fournit également de nombreux services liés à l'utilisation de ses produits : développement, maintenance, enseignement, assistance, surveillance et entretien.

   Histoire

   Depuis des millénaires, l'Homme a créé et utilisé des outils l'aidant à calculer (abaque, boulier, etc.), exigeant, comme les opérations manuelles, des algorithmes de calcul, dont des tables datant de l'époque d'Hammourabi (environ -1750) figurent parmi les exemples les plus anciens.

   Si les machines à calculer évoluent constamment depuis l'Antiquité, elles n'exécutent pas elles-mêmes l'algorithme : c'est l'homme qui doit apprendre et exécuter la suite des opérations, comme pour réaliser les différentes étapes d'une division euclidienne). En 1642, Blaise Pascal imagine une machine à calculer, la Pascaline, qui fut commercialisée. Sept exemplaires subsistent dans des musées comme celui des arts et métiers et dont deux, qui sont dans des collections privées (IBM en possède une). Joseph Marie Jacquard avec ses métiers à tisser à cartes perforées illustre en premier le concept de programmation, comme enchaînement automatique d'opérations élémentaires. George Boole et Ada Lovelace esquissent une théorie de la programmation des opérations mathématiques.

Exercice: un peu de mise en forme
=================================

L’élément ``body`` d’un document HTML contient le code suivant:

.. code:: html

   <article>
       <h1>Mon article</h1>
       <section>
           <h2>Première section</h2>
           <p>Premier paragraphe</p>
       </section>
       <section>
           <h2>Deuxième section</h2>
           <p>Deuxième paragraphe</p>
           <p>Troisième paragraphe</p>
       </section>
   </article>

Créer une feuille de style de manière à: \* changer la couleur par
défaut du texte de tous les paragraphes; \* changer la couleur de fond
du premier titre de niveau 2.

