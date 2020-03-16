***********************
HTML5 & CSS3: les bases
***********************


Les langages du web
===================

 Côté client, c’est-à-dire côté utilisateur, les langages incontournables sont:
 
  * HTML pour la description du contenu d’une page;
  * CSS pour définir la mise en forme des pages;
  * Javascript (*qui ne sera pas abordé dans ce chapitre*) pour permettre l’interactivité avec l’utilisateur.

HTML
====

Premier exemple et définitions
------------------------------

Le langage **HTML** est un langage de *balisage* qui permet de décrire
la structure et le contenu d’un document. Un navigateur web donne un
rendu graphique au fichier textuel HTML. Voici un premier exemple de
code:

.. code:: html

      <!DOCTYPE html>
      <html lang="fr">
      <head>
            <meta charset="UTF-8">
            <title>Document</title>
      </head>
      <body>
            <h1>Structuration de document</h1>
            <p>Les <em>balises</em> html doivent rendre compte de la structure de la page.</p>
      </body>
      </html> 

et son rendu dans un navigateur:

.. figure:: ../../img/index.png
   :alt: index

| Un fichier HTML est structuré à partir de **balises** (*tag* en
  anglais). Ce sont des informations situées entre les caractères ``<``
  et ``>``. La première ligne n’est pas une balise HTML, en toute
  rigueur il s’agit d’une déclaration de type de document à destination
  du navigateur. Sauf exceptions, qui seront vues au fur et à mesure de
  la découverte du langage, **à une balise ouvrante <…> correspond une
  balise fermante </…>**. La premère exception rencontrée ici est la
  balise ``meta`` (qui est une balise *auto-fermante*).
| L’ensemble constitué des balises ouvrante et fermante et du contenu se
  trouvant entre ces balises, constitue un **élément** HTML. Chaque
  élément HTML peut avoir des **attributs**. Ce sont des valeurs
  supplémentaires qui permettent de configurer les éléments ou d’adapter
  leur comportement, avec une syntaxe du type ``attribut="valeur"``.
| **Exemple**

.. figure:: ../../img/element.png
   :alt: element

   element

Application directe
~~~~~~~~~~~~~~~~~~~

Donner les attributs et les valeurs associées, des éléments ``meta`` et
``html`` de l’exemple ci-dessus.

Structuration des documents
---------------------------

D’une manière générale, un fichier HTML aura un *squelette* sera très
proche de celui de l’exemple donné en introduction. On adaptera le
contenu de l’élément ``head``, notamment le texte de sa balise
``<title>``, ainsi que celui de l’élément ``body``.

Les titres
~~~~~~~~~~

Les titres peuvent être déclinés en six niveaux de 1 à 6 à l’aide des
balises ``<h1>`` à ``<h6>``:

.. code:: html

   <h1>Titre de niveau 1</h1>
   <h2>Titre de niveau 2</h2>
   ......
   <h6>Titre de niveau 6</h6>

| Le rendu est le suivant:
| |titre|

.. |titre| image:: ../../img/titre.png

Les textes
~~~~~~~~~~

Les textes peuvent être organisés en paragraphes avec la balise ``<p>``:

.. code:: html

   <p>HTML contient environ 140 balises qui fournissent au navigateur des indications sur 
   le sens d'un élément, son interprétation ou son affichage. Entre autres choses, les balises 
   permettent de fournir des méta-données pour le document HTML, de mettre en avant certaines 
   phrases, d'ajouter des fichiers multimédias ou de gérer des formulaires en ligne.
   </p>

On peut également présenter du texte sous forme de **listes** ordonnées:

.. code:: html

   Les parties essentielles d'un document HTML:
   <ol>
       <li>l'élément html;</li>
       <li>l'élément head;</li>
       <li>l'élément body.</li>
   </ol>

Le rendu est le suivant:

| Les parties essentielles d’un document HTML:
| 1. l’élément html;
| 2. l’élément head;
| 3. l’élément body.

La présentation peut se faire également sous forme de listes **non**
ordonnées:

.. code:: html

   Les parties essentielles d'un document HTML:
   <ul>
       <li>l'élément html;</li>
       <li>l'élément head;</li>
       <li>l'élément body.</li>
   </ul>

Le rendu est le suivant:

| Les parties essentielles d’un document HTML:

  * l’élément html;
  * l’élément head;
  * l’élément body.

Liens et ressources
~~~~~~~~~~~~~~~~~~~

Une des caractéristiques essentielles de HTML est de fournir des liens
*hypertextes*. Ces derniers sont insérés avec la balise ``<a>``
(*ancre*). Cette balise est utilisée avec l’attribut ``href`` qui
fournit l’adresse de la ressource.

.. code:: html

   <a href="https://www.w3schools.com/tags/tag_a.asp">Lien vers W3schools.com</a>

| Rendu:
| `Lien vers W3schools.com <https://www.w3schools.com/tags/tag_a.asp>`__

Parmi les ressources, on peut citer les images. On les insère dans un
document HTML avec une balise auto-fermante ``<img />`` à qui on doit
fournir deux attributs ``src="nom_fichier.jpg" alt="texte_alternatif"``.
Par exemple:

.. code:: html

   <img src="img/html5-logo.png" alt="logo" />

Rendu:

.. figure:: ../../img/html5-logo.png
   :alt: logo

   
Conseils: utilisation de balises sémantiques
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| HTML5 accentue encore plus l’objectif de bien structurer un document
  en y ajoutant de nouvelles balises (*par rapport à HTML4*). Parmi ces
  nouvelles balises, on peut citer, entre autres: ``header``, ``nav``,
  ``section``, ``article``, ``aside`` et ``footer``. Ces balises sont
  dites *sémantiques*, c’est-à-dire qui ont du sens, … par opposition à
  d’anciennes balises génériques comme ``div`` ou ``span``. Bien qu’il
  ne s’agisse pas d’une règle absolue, voici un exemple correct (au sens
  HTML5) de structure de document: |structure|
| `... et le plan de ce cours en
  HTML5 <https://brdarid.nohost.me/nextcloud/index.php/s/STrADeaoFcPK9MN>`__

Dans la mesure du possible, on réservera la balise générique ``div``
pour des regroupements d’éléments nécessitant un traitement CSS (voir
ci-dessous) spécifique. 

CSS
===

Qu’est-ce que le CSS et comment le mettre en application?
---------------------------------------------------------

| Le langage CSS (*Cascading Style Sheet*) est un langage permettant de
  définir la mise en forme des éléments HTML constituant une page web.
  Il est important de retenir: **HTML est gère le ‘fond’, CSS gère la
  ‘forme’**. Il existe trois emplacements pour placer les **règles de
  style** CSS associées à un document. 

Règles de style en ligne: **A EVITER ABSOLUMENT**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Il s’agit de définir une règle de style directement via l’attribut ``style``\ d’un élément. Sa syntaxe est la suivante:

| ``<tag style="definition_des_styles">....</tag>`` où
  ``definition_des_styles`` est de la forme ``propriete: valeur;``.
  
| **Exemple**

.. code:: html

   <p style="text-align: right; border: 2px solid gray;">Lorem ipsum dolor sit amet consectetur. <br>
       adipisicing elit deleniti magni sequi ducimus ad similique quo beatae dolor tempora et cum. <br>
       corporis enim earum eligendi unde itaque dicta, blanditiis aut consequuntur?
   </p>

**Cette méthode est à déconseiller franchement car elle rend le code
HTML peu lisible**.

Rendu:

.. |structure| image:: ../../img/html5semantique.png

.. raw:: html

    <p style="text-align: right; border: 2px solid gray;">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
                Deleniti magni sequi ducimus ad similique quo beatae dolor tempora et cum. <br>
                corporis enim earum eligendi unde itaque 
                dicta, blanditiis aut consequuntur?
    </p>


Règles de style interne: **ACCEPTABLE**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| Il s’agit de déclarer les règles de style à l’intérieur d’une balise
  ``<style>`` de l’élément ``head`` du document HTML. Les règles étant
  écrites les unes en dessous des autres (*la syntaxe détaillée sera vue
  dans le prochain paragraphe*).
| **Exemple**

.. code:: html

      <!DOCTYPE html>
      <html lang="fr">
      <head>
            <meta charset="UTF-8">
            <title>Document</title>
            <style>
                  p { 
                    text-align: right; 
                    border: 2px solid gray;
                    }
                  .remarque {color: red;}
            </style>
      </head>
      <body>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
            Deleniti magni sequi ducimus <span class="remarque"> similique dolor tempora</span> et cum. <br>
            corporis enim earum eligendi unde itaque 
            dicta, blanditiis aut consequuntur?
         </p>
      </body>
      </html>

Le rendu est identique:

.. raw:: html

    <p style="text-align: right; border: 2px solid gray;">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
                Deleniti magni sequi ducimus <span style="color: red;"> similique dolor tempora</span> et cum. <br>
             corporis enim earum eligendi unde itaque 
             dicta, blanditiis aut consequuntur?
    </p>


Cette méthode est acceptable mais elle présente l’inconvénient de
*mélanger* le fond et la forme et surtout de **ne pas permettre la
réutilisation** des règles de style dans d’autres pages (*à moins de
faire du copier-coller*).

Règles de style dans un fichier externe: **A PRIVILEGIER**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Les règles de style sont définies dans un fichier *texte* externe,
d’extension ``.css``. La présence de ce fichier doit être signalé au
navigateur dans l’élément ``head``\ avec une balise ``<link>``:

.. code:: html

   <head>
       ......
       <link rel="stylesheet" href="style/fichier.css" />
   </head>

| si on suppose que le fichier s’appelle ``fichier.css`` et qu’il se
  trouve dans le dossier ``style``. On remarque au passage que la
  **balise link est auto-fermante**.
| La syntaxe d’une règle de style CSS est la suivante:

.. code:: html

   selecteur {
       propriete1: valeur1;
       propriete2: valeur2;
       ...
   }

| Le **selecteur** peut être un tag HTML, l’identifiant d’un élément
  précédé du caractère ``#`` (sans espace) ou le nom d’une classe
  précédé du caractère ``.``.
| **Exemple de** ``fichier.css``

.. code:: javascript

   p {
       text-align: right;
       border: 2px solid gray;
   }

   .remarque {
       color: red;
   }

On voit ici tout l’intérêt à ajuster les attributs ``class`` et ``id``
des éléments HTML lors de la construction de la page (voir documentation
sur W3Schools.com pour
`class <https://www.w3schools.com/tags/att_global_class.asp>`__ et
`id <https://www.w3schools.com/tags/att_global_id.asp>`__).

Quelques propriétés CSS
-----------------------

Il n’est pas question questions de citer toutes les propriétés CSS
(qu’on peut trouver sur
`W3Schools.com <https://www.w3schools.com/cssref/css3_pr_all.asp>`__),
mais quelques unes fréquemment utilisées.

-  ``font-size``: fixe la taille de la police;
-  ``color``: fixe la couleur du texte;
-  ``text-align``: définit l’alignement horizontal du texte;
-  ``background-color``: couleur d’arrière plan;

--------------

B. DARID

|licence|

.. |licence| image:: ../../img/licence.png
