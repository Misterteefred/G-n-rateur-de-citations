const tableauCitations = [["La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", "Albert Einstein"],
["C'est un petit pas pour un homme, mais un bond de géant pour l'humanité. Anglais : That's one small step for [a], man, one giant leap for mankind.", "Neil Armstrong"],
["Qui peut le moins peut le plus", "Aandoui Corentin"],
["Rien n'est impossible, seules les limites de nos esprits définissent certaines choses comme inconcevables.", "Marc Lévy"],	
["Le cœur a ses raisons que la raison ne connaît point", "Blaise Pascal"],
["La meilleure façon de prédire l’avenir est de le créer.", "Peter Drucker"],
["Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie.", "Confucius"],
["Vous voulez vous lever le matin en pensant que l'avenir sera formidable - et c'est en cela que réside le fait d'être une civilisation à la conquête de l'espace. Il s'agit de croire en l'avenir et de penser que celui-ci sera meilleur que le passé.", "Elon Musk"],
["Si vous ne pouvez expliquer un concept à un enfant de six ans, c'est que vous ne le comprenez pas complètement.", "Albert Einstein"],
["C'est normal de ne pas savoir. Ce n'est pas parce que tu ne sais pas comment faire que tu es un mauvais développeur.",	"Développeur Libre"],
["Si vous êtes en train de changer le monde, votre travail porte sur des choses importantes. Si bien que vous êtes excités dès que vous vous levez le matin.", "Larry Page"],
["Innover, c'est savoir abandonner des milliers de bonnes idées.", "Steve Jobs"],
["Les détails comptent, il vaut mieux attendre de les maîtriser.", "Steve Jobs"],
["Dans un monde qui évolue très vite, la seule stratégie qui est vouée à l'échec de façon garantie est de ne pas prendre de risques.", "Mark Zuckerberg"],
["Si vous vous décidez à n'entreprendre que des choses dont vous êtes sûr qu’elles vont réussir, vous allez manquer tout un tas d' opportunités.", "Jeff Bezos"],
["L'enseignement devrait être ainsi : celui qui le reçoit le recueille comme un don inestimable mais jamais comme une contrainte pénible.", "Albert Einstein"],	
["Vous devez être prêt à être mal compris si vous décidez d’innover.", "Jeff Bezos"],
["Vos clients les plus malheureux sont votre meilleure source d'apprentissage.", "Bill Gates"],
["Tout le monde a une idée. Mais il s’agit surtout de la mettre à exécution et d’attirer d’autres personnes pour vous aider à travailler et améliorer cette idée.","Jack Dorsey"],
["Ne fais jamais rien contre ta conscience, même si l'Etat te le demande.", "Albert Einstein"],
["Un problème sans solution est un problème mal posé.", "Albert Einstein"],
["J'espère que la routourne va tourner.", "Franck Ribery"],
["Personne n’est trop vieux pour se fixer un nouvel objectif ou réaliser de nouveaux rêves.", "Les Brown"],
["La seule façon de faire du bon travail est d’aimer ce que vous faites. Si vous n’avez pas encore trouvé, continuez à chercher.", "Steve Jobs"],
["Un pessimiste voit la difficulté dans chaque opportunité, un optimiste voit l’opportunité dans chaque difficulté.", "Winston Churchill"],
["Les gagnants trouvent des moyens, les perdants des excuses.", "F. D. Roosevelt"],
["La plus grande erreur que puisse faire un homme est d’avoir peur d’en faire une.",	"Elbert Hubbard"],
["J’ai décidé d’être heureux parce que c’est bon pour la santé.", "Voltaire"],
["Pour ce qui est de l’avenir, il ne s’agit pas de le prévoir, mais de le rendre possible.",	"Antoine de Saint-Exupéry"],
["Celui qui veut atteindre un objectif lointain doit faire de petits pas.", "Saul Bellow"],
["Il n’y a pas de réussites faciles ni d’échecs définitifs.", "Marcel Proust"],
["C’est beau ce stade Vélodrome qui est toujours plein à domicile comme à l’extérieur.", "Franck Ribery"],
["Hier n’existe plus , demain ne viendra peut-être jamais. Il n’y a que le miracle du moment présent, savoure-le. C’est un cadeau!", "Marie Stilkind"],
["Il faut viser la lune, parce qu’au moins, si vous échouez, vous finirez dans les étoiles.", "Oscar Wilde"],
["Celui qui veut réussir trouve un moyen. Celui qui veut rien faire trouve une excuse.", "Proverbe"],
["Vous ne trouverez jamais ce que vous ne cherchez pas.", "Confucius"],
["Si vous pouvez le rêver, vous pouvez le faire.", "Walt Disney"],
["La persévérance, c’est ce qui rend l’impossible possible, le possible probable et le probable réalisé.", "Léon Trotsky"],
["Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi.", "Georges Clémenceau"],
["La folie, c’est de refaire la même chose et d’en attendre un résultat différent.", "Albert Einstein"],
["L’échec n’est qu’une opportunité pour recommencer la même chose plus intelligemment.", "Henry Ford"],
["La différence entre la stupidité et le génie, c’est que le génie a ses limites.", "Neji Hyûga (Naruto)"],
["Rien n'est plus puissant qu'une idée dont l'heure est venue.", "Victor Hugo"],
["Le travail acharné bat le talent quand le talent ne travaille pas.", "Tim Notke"],
["Ne dis pas peu de choses en beaucoup de mots, mais dis beaucoup de choses en peu de mots.", "Pythagore"],
["Votez pour l'homme qui promet le moins, il sera le moins décevant.", "Bernard Baruch"],
["Notre plus grande gloire n'est point de tomber, mais de savoir nous relever chaque fois que nous tombons.", "Confucius"],
["N'essayez pas de devenir un homme qui a du succès. Essayez de devenir un homme qui a de la valeur.", "Albert Einstein"],
["Un sourire coûte moins cher que l'électricité, mais donne autant de lumière.", "Abbé Pierre"],
["Fais de ta vie un rêve, et d'un rêve, une réalité.", "Antoine de Saint-Exupéry"],
["Soyez le changement que vous souhaitez voir dans le monde.", "Mahatma Gandhi"],
["Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.", "Confucius"],
["Deux choses sont infinies: l'univers et la bêtise humaine; et je ne suis pas sûr de l'univers.", "Albert Einstein"]]


const elBoutonRefresh = document.querySelector('.button');
const elPhrase = document.querySelector('.phrase');
const elAuteur = document.querySelector('.auteur');

elBoutonRefresh.addEventListener("click", fonctionBouton);
document.addEventListener("DOMContentLoaded", nouvelleCitation);

function fonctionBouton(e){
    e.preventDefault()
    nouvelleCitation()
}

function nouvelleCitation(){
    const rand = ~~(Math.random()*tableauCitations.length);
    const citation = tableauCitations[rand][0]
    const auteur = tableauCitations[rand][1]   

    elPhrase.classList.add('fade-out');
    elAuteur.classList.add('fade-out');
    elPhrase.classList.remove('fade-in');
    elAuteur.classList.remove('fade-in');
    setTimeout(function(){
        elPhrase.textContent = ""
        elAuteur.textContent = "" 
        elPhrase.classList.add('hide');
        elAuteur.classList.add('hide');
        elPhrase.textContent = citation
        elAuteur.textContent = auteur 
    },1500) 
    setTimeout(function(){
        elPhrase.classList.remove('hide','fade-out');    
        elAuteur.classList.remove('hide','fade-out');    
        elPhrase.classList.add('fade-in')
        elAuteur.classList.add('fade-in')
    },1500)
}

