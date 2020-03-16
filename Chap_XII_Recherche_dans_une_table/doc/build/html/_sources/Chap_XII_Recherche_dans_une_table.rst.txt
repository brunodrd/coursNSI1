
************************
Recherche dans une table
************************

.. code:: ipython3

    #Fichier de travail
    import csv
    
    FILE1 = './data/resultats_bac2.csv'
    
    f = open(FILE1, newline='', encoding='utf8')
    table = [dict(row) for row in csv.DictReader(f, delimiter=';')]

Cohérence d’une table
=====================

Les données sont-elles valides?
-------------------------------

Dans le cours précédent on a importé les données d’un fichier csv dans
un tableau. Cependant, rien ne garantit la validité des lignes. Par
exemple, on souhaiterait que les champs ``taux_..`` soient complets et que
leur valeur représente bien un nombre (avant sa conversion en ``int``
par la suite). Par ailleurs, le taux ne doit pas être supérieur à 100.
D’où un exemple de fonction de validation:

.. code:: ipython3

    def validation(ligne):
        """
        Retourne un booléen valant True uniquement si l'année et les taux sont des nombres (inférieurs 
        à 100 pour les taux);
        ligne: dictionnaire
        """
        an, tL, tES, tS = ligne['Année'], ligne['Taux_L'], ligne['Taux_ES'], ligne['Taux_S']
        #La méthode de chaine isdecimal() est particulièrement adaptée ici (voir aide)
        sont_des_nb = an.isdecimal() and tL.isdecimal() and tES.isdecimal() and tS.isdecimal()
        #Si les taux sont des nombres, on vérifie leur conformité.
        return sont_des_nb and int(tL) <= 100 and int(tES) <= 100 and int(tS) <= 100

.. code:: ipython3

    help(str.isdecimal)


.. parsed-literal::

    Help on method_descriptor:
    
    isdecimal(self, /)
        Return True if the string is a decimal string, False otherwise.
        
        A string is a decimal string if all characters in the string are decimal and
        there is at least one character in the string.
    
    

On peut alors construire une table ayant des lignes conformes aux
critères présentés ci-dessus et afficher les 5 premières lignes:

.. code:: ipython3

    table_conforme = [ligne for ligne in table if validation(ligne)]
    for i in range(5):
        print(table_conforme[i])


.. parsed-literal::

    {'Etablissement': 'LYCEE MONTMAJOUR', 'Année': '2012', 'Ville': 'ARLES', 'Taux_L': '95', 'Taux_ES': '79', 'Taux_S': '96', 'Académie': 'AIX-MARSEILLE'}
    {'Etablissement': 'LYCEE BRISTOL', 'Année': '2017', 'Ville': 'CANNES', 'Taux_L': '84', 'Taux_ES': '84', 'Taux_S': '75', 'Académie': 'NICE'}
    {'Etablissement': 'LYCEE MARGUERITE DE NAVARRE', 'Année': '2017', 'Ville': 'BOURGES', 'Taux_L': '89', 'Taux_ES': '94', 'Taux_S': '91', 'Académie': 'ORLEANS-TOURS'}
    {'Etablissement': 'LYCEE FULBERT', 'Année': '2017', 'Ville': 'CHARTRES', 'Taux_L': '88', 'Taux_ES': '88', 'Taux_S': '89', 'Académie': 'ORLEANS-TOURS'}
    {'Etablissement': 'LYCEE NOTRE DAME', 'Année': '2017', 'Ville': 'CHARTRES', 'Taux_L': '100', 'Taux_ES': '97', 'Taux_S': '96', 'Académie': 'ORLEANS-TOURS'}
    

Comment changer le type de certains attributs?
----------------------------------------------

En plus de la validation des données, on souhaiterait convertir certains
attributs (l’année et les taux) en ``int``. Une fonction de conversion a
déjà été vue dans la fiche d’exercices du cours précédent. En voici une
autre:

.. code:: ipython3

    def conversion(enr):
        """
        Retourne un dictionnaire avec les champs 'Année' et 'Taux_..' convertis en 'int'.
        enr: un enregistrement, de type dictionnaire
        """
        
        assert isinstance(enr, dict), "La donnée convertie doit être un dictionnaire"
        return {'Etablissement':enr['Etablissement'],
               'Année':int(enr['Année']),
               'Ville':enr['Ville'],
               'Taux_L':int(enr['Taux_L']),
               'Taux_ES':int(enr['Taux_ES']),
               'Taux_S':int(enr['Taux_S']),
               'Académie':enr['Académie']}

.. code:: ipython3

    table_validee = [conversion(ligne) for ligne in table if validation(ligne)]

.. code:: ipython3

    for i in range(5):
        print(table_validee[i])


.. parsed-literal::

    {'Etablissement': 'LYCEE MONTMAJOUR', 'Année': 2012, 'Ville': 'ARLES', 'Taux_L': 95, 'Taux_ES': 79, 'Taux_S': 96, 'Académie': 'AIX-MARSEILLE'}
    {'Etablissement': 'LYCEE BRISTOL', 'Année': 2017, 'Ville': 'CANNES', 'Taux_L': 84, 'Taux_ES': 84, 'Taux_S': 75, 'Académie': 'NICE'}
    {'Etablissement': 'LYCEE MARGUERITE DE NAVARRE', 'Année': 2017, 'Ville': 'BOURGES', 'Taux_L': 89, 'Taux_ES': 94, 'Taux_S': 91, 'Académie': 'ORLEANS-TOURS'}
    {'Etablissement': 'LYCEE FULBERT', 'Année': 2017, 'Ville': 'CHARTRES', 'Taux_L': 88, 'Taux_ES': 88, 'Taux_S': 89, 'Académie': 'ORLEANS-TOURS'}
    {'Etablissement': 'LYCEE NOTRE DAME', 'Année': 2017, 'Ville': 'CHARTRES', 'Taux_L': 100, 'Taux_ES': 97, 'Taux_S': 96, 'Académie': 'ORLEANS-TOURS'}
    

La table comporte-t-elle des doublons?
--------------------------------------

Les tables de données ne doivent généralement pas comporter de doublons.
La fonction suivante vérifie la présence de doublons dans une table.

.. code:: ipython3

    def doublon(table):
        """
        Retourne un booléen correspond à la présence ou non de doublons dans la table.
        table: tableau de dictionnaires ou de tableaux
        """
        for i in range(len(table)):
            for j in range(i + 1, len(table)):
                if table[i] == table[j]:
                    return True
        return False

.. code:: ipython3

    doublon(table_validee)

.. note::
   Cette fonction n’est pas très efficace, notamment sur des tables 
   volumineuses.

Sélection de lignes ou de colonnes
==================================

Comment sélectionner des lignes d’une table?
--------------------------------------------

| Les opérations faites sur les tables sont en nombre très limité. Parmi
  celles-ci, on trouve la **sélection** de lignes qui répondent à
  certain(s) critère(s). Ces critères sont exprimés avec des booléens.
| Afin de faciliter l’écriture et l’évaluation des critères, on
  utilisera la fonction ``eval`` de python, dont l’aide est fournie
  ci-dessous.

.. code:: ipython3

    help(eval)


.. parsed-literal::

    Help on built-in function eval in module builtins:
    
    eval(source, globals=None, locals=None, /)
        Evaluate the given source in the context of globals and locals.
        
        The source may be a string representing a Python expression
        or a code object as returned by compile().
        The globals must be a dictionary and locals can be any mapping,
        defaulting to the current globals and locals.
        If only globals is given, locals defaults to it.
    
    

.. code:: ipython3

    def select(table, critere):
        """
        Retourne une table dont les lignes vérifient le critere passé en paramètre.
        table: tableau de dictionnaires
        critere: chaine exprimant la condition 
        """
        return [ligne for ligne in table if eval(critere)]

.. code:: ipython3

    select(table_validee, "'OLIVE' in ligne['Etablissement'] and ligne['Année'] >= 2017")




.. parsed-literal::

    [{'Académie': 'LA REUNION',
      'Année': 2017,
      'Etablissement': "LYCEE DE BOIS D'OLIVE (GENERAL ET TECHNO.)",
      'Taux_ES': 79,
      'Taux_L': 96,
      'Taux_S': 94,
      'Ville': 'ST PIERRE'},
     {'Académie': 'LA REUNION',
      'Année': 2018,
      'Etablissement': "LYCEE DE BOIS D'OLIVE (GENERAL ET TECHNO.)",
      'Taux_ES': 91,
      'Taux_L': 83,
      'Taux_S': 97,
      'Ville': 'ST PIERRE'}]



Comment sélectionner des colonnes d’une table?
----------------------------------------------

La sélection de colonnes, appelé couramment **projection** peut être
réalisée avec le code de la cellule suivante. Supposons que l’on veuille
garder uniquement les colonnes ‘Ville’ et ‘Académie’ de notre table.
Cette opération peut être facilement réalisée avec un tableau construit
en compréhension.

.. code:: ipython3

    t = [{'Ville':ligne['Ville'], 'Académie':ligne['Académie']} for ligne in table_validee]
    #Affichage des 5 premières lignes
    for i in range(5):
        print(t[i])


.. parsed-literal::

    {'Ville': 'ARLES', 'Académie': 'AIX-MARSEILLE'}
    {'Ville': 'CANNES', 'Académie': 'NICE'}
    {'Ville': 'BOURGES', 'Académie': 'ORLEANS-TOURS'}
    {'Ville': 'CHARTRES', 'Académie': 'ORLEANS-TOURS'}
    {'Ville': 'CHARTRES', 'Académie': 'ORLEANS-TOURS'}
    

Bonus: une fonction projection
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: ipython3

    def projection(table, tableau_colonnes):
        """
        Retourne une table ne contenant uniquement que les colonnes présentes dans tableau_colonnes.
        table: tableau de dictionnaires
        tableau_colonnes: tableau de chaine de caractères correspondant aux noms des colonnes sélectionnées.
        """
        return [{nom_col:ligne[nom_col] for nom_col in tableau_colonnes} for ligne in table]

Explication
^^^^^^^^^^^

La fonction ``projection`` retourne un tableau de dictionnaires
construit en **compréhension**. Décomposons cette construction.

Entre les crochets ``[...]``, on distingue bien trois parties
essentielles:
``{nom_col:ligne[nom_col] for nom_col in tableau_colonnes}``, ``for`` et
``ligne in table``. Ce bloc d’instructions est du type
``expression(ligne) for ligne in table``. Il est responsable de la
formation des différentes lignes ``{...}, {...}, ..., {...}``.

La suite d’instructions
``{nom_col:ligne[nom_col] for nom_col in tableau_colonnes}`` est
responsable de la construction du **contenu** de chaque ligne (*il
s’agit de la construction d’un dictionnaire par compréhension*). Les
clés de chaque dictionnaire formé sont situées dans le tableau passé en
argument et les valeurs sont les champs associés, de la ligne de la
table de données.

Exemples d’utilisation
^^^^^^^^^^^^^^^^^^^^^^

.. code:: ipython3

    #Affichage des 5 premiers éléments d'une table contenant ville et académie
    
    t = projection(table_validee, ['Ville', 'Académie', 'Etablissement'])
    for i in range(5):
        print(t[i])


.. parsed-literal::

    {'Ville': 'ARLES', 'Académie': 'AIX-MARSEILLE', 'Etablissement': 'LYCEE MONTMAJOUR'}
    {'Ville': 'CANNES', 'Académie': 'NICE', 'Etablissement': 'LYCEE BRISTOL'}
    {'Ville': 'BOURGES', 'Académie': 'ORLEANS-TOURS', 'Etablissement': 'LYCEE MARGUERITE DE NAVARRE'}
    {'Ville': 'CHARTRES', 'Académie': 'ORLEANS-TOURS', 'Etablissement': 'LYCEE FULBERT'}
    {'Ville': 'CHARTRES', 'Académie': 'ORLEANS-TOURS', 'Etablissement': 'LYCEE NOTRE DAME'}
    

.. code:: ipython3

    #Recherche de doublons
    doublon(projection(table_validee, ['Ville', 'Académie', 'Etablissement']))




.. parsed-literal::

    True



**Attention: une projection peut entrainer la présence de doublons**

--------------

B. DARID |licence|

.. |licence| image:: ../../img/licence.png
