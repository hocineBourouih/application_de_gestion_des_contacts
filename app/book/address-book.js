"use strict";

let initAddressBook = {
    "f8684798-b81d-4dd9-b85d-593a371fac45": {
        "nom": "Marshall",
        "prenom": "Sonia",
        "pseudo": "Knox",
        "email": "maddoxosborn@turnling.com",
        "telephone": "06.69.90.36.86",
        "date": "1998-11-20"
    },
    "6455d666-85e3-4330-ab74-f8d561a349a4": {
        "nom": "Nguyen",
        "prenom": "Jan",
        "pseudo": "Hubbard",
        "email": "lenarivers@singavera.com",
        "telephone": "06.59.50.42.40",
        "date": "1981-05-31"
    },
    "b1120a0d-63c5-42c3-b3ee-805a9397cb40": {
        "nom": "Flores",
        "prenom": "Kari",
        "pseudo": "Bridgett",
        "email": "keithsnider@digiprint.com",
        "telephone": "06.67.35.85.62",
        "date": "1982-04-13"
    },
    "94227484-197c-47e8-8176-4758945963a1": {
        "nom": "Irwin",
        "prenom": "Gladys",
        "pseudo": "Addie",
        "email": "suzannenichols@thredz.com",
        "telephone": "06.45.14.63.39",
        "date": "2013-05-27"
    },
    "2f858375-9442-45a2-93bf-d0dc051755d0": {
        "nom": "Atkinson",
        "prenom": "Bean",
        "pseudo": "Dorthy",
        "email": "johannale@cipromox.com",
        "telephone": "06.92.17.61.42",
        "date": "1989-07-27"
    },
    "975f185f-1755-4ade-b1ed-154f3d7bd8b0": {
        "nom": "Wallace",
        "prenom": "Conley",
        "pseudo": "Beryl",
        "email": "averyfulton@cormoran.com",
        "telephone": "06.11.70.47.42",
        "date": "2007-12-28"
    },
    "e01ff64e-b0b6-4349-8f66-5f7033b9e8b7": {
        "nom": "Salas",
        "prenom": "Lorie",
        "pseudo": "Myers",
        "email": "searsmonroe@boilicon.com",
        "telephone": "06.31.53.46.15",
        "date": "1974-10-20"
    },
    "6393a9df-77f3-48a8-852f-5a226e1d6678": {
        "nom": "Ray",
        "prenom": "Sharpe",
        "pseudo": "Clemons",
        "email": "lestergilbert@kegular.com",
        "telephone": "06.57.91.54.29",
        "date": "1992-12-14"
    },
    "b8bfc2eb-ff57-495e-895d-7375e350bffb": {
        "nom": "Coleman",
        "prenom": "Charity",
        "pseudo": "Benita",
        "email": "santiagolindsey@comtrak.com",
        "telephone": "06.37.71.16.18",
        "date": "1982-10-30"
    },
    "81cfc652-f8ca-4d2c-9ffa-0534854e0802": {
        "nom": "Brady",
        "prenom": "Travis",
        "pseudo": "Brittany",
        "email": "patemartinez@polarax.com",
        "telephone": "06.40.83.80.32",
        "date": "2006-01-16"
    },
    "4fab6e38-ce94-4b9d-ae80-70071e72d03f": {
        "nom": "Dillard",
        "prenom": "Bobbi",
        "pseudo": "Tamra",
        "email": "marthatanner@edecine.com",
        "telephone": "06.37.83.13.74",
        "date": "2015-07-14"
    },
    "99177a6b-7ac2-4b90-b41b-17f78de40c99": {
        "nom": "Huber",
        "prenom": "Powell",
        "pseudo": "Eddie",
        "email": "sherigallagher@assurity.com",
        "telephone": "06.77.35.93.98",
        "date": "1989-08-21"
    },
    "83185e05-60a4-43a1-a6ed-84a92939b552": {
        "nom": "Burch",
        "prenom": "Josefa",
        "pseudo": "Luella",
        "email": "casebonner@biospan.com",
        "telephone": "06.67.94.76.79",
        "date": "1999-04-19"
    },
    "59f78183-8de5-458a-8155-689d731c1396": {
        "nom": "Dillon",
        "prenom": "Mason",
        "pseudo": "Stout",
        "email": "fitzpatrickphillips@plasto.com",
        "telephone": "06.28.85.61.65",
        "date": "2014-04-29"
    },
    "c7a63a01-a709-413c-956d-4746f090dc95": {
        "nom": "Stewart",
        "prenom": "Terrie",
        "pseudo": "Peggy",
        "email": "davidsonduncan@neurocell.com",
        "telephone": "06.49.65.27.75",
        "date": "2004-04-06"
    },
    "23175373-812c-4b68-81f7-f8fadfe8b72c": {
        "nom": "Byrd",
        "prenom": "Howe",
        "pseudo": "Salas",
        "email": "jenniferrollins@accuprint.com",
        "telephone": "06.47.10.47.43",
        "date": "1991-02-20"
    },
    "341fffed-7a31-4540-91ae-dcb063582745": {
        "nom": "Jennings",
        "prenom": "Raquel",
        "pseudo": "Holloway",
        "email": "barronriley@xumonk.com",
        "telephone": "06.82.76.56.44",
        "date": "1976-03-21"
    },
    "2dcf1269-3212-442b-8cbd-f851be9406cd": {
        "nom": "Reed",
        "prenom": "Collier",
        "pseudo": "Suarez",
        "email": "graygraham@entality.com",
        "telephone": "06.76.16.79.99",
        "date": "2009-11-11"
    },
    "2aecbdf3-5805-4084-abe9-2378c3b98fd8": {
        "nom": "Middleton",
        "prenom": "Emily",
        "pseudo": "Morgan",
        "email": "wellsforbes@injoy.com",
        "telephone": "06.66.53.71.33",
        "date": "1975-11-08"
    },
    "d2d150b7-b0f7-4ade-999c-77b26e847995": {
        "nom": "Tran",
        "prenom": "Heidi",
        "pseudo": "Essie",
        "email": "lynnlang@temorak.com",
        "telephone": "06.80.78.91.88",
        "date": "1974-04-06"
    }
};