if(localStorage.idioma == null){
	localStorage.setItem('idioma', 'brasil');
}
idioma = localStorage.idioma;


if(idioma == 'arabe'){
	$('#tudo').addClass('arabe');
}else{
	$('#tudo').removeClass('arabe');
}

var banco = new Array();
banco['brasil'] = new Array();
banco['franca'] = new Array();
banco['espanha'] = new Array();
banco['eua'] = new Array();
banco['arabe'] = new Array();

//brasil
banco['brasil']['m1'] = "Home";
banco['brasil']['m2'] = "Mapa";
banco['brasil']['m3'] = "Entidades";
banco['brasil']['m4'] = "Reportagens";
banco['brasil']['m5'] = "Sobre nós";
banco['brasil']['m6'] = "Registre";
banco['brasil']['m7'] = "Doe";
banco['brasil']['m8'] = "Fale conosco";
banco['brasil']['home'] = "O Helping Hand tem como objetivo fornecer acesso a informações necessárias de lugares que poderão ajudar você, imigrante ou refugiado. Dentro das informações disponibilizadas, você poderá encontrar: agências internacionais, assistência jurídica, centros de apoio, comunidades e sociedades, templos religiosos, órgãos governamentais, consulados e embaixadas, instituições de ensino, aulas de português, oportunidades de emprego e hospitais próximos a região onde você mora.";
banco['brasil']['mapa'] = "MAPA";
banco['brasil']['e'] = "ENTIDADES";
banco['brasil']['e1'] = "Encontre entidades através do lugar e/ou categoria escolhidos.";
banco['brasil']['e2'] = "<select name=\"categoria\" id=\"categoria\"><option></option><option value=\"Agências internacionais\">Agências internacionais</option><option value=\"Assistência jurídica\">Assistência jurídica</option><option value=\"Aulas de Português\">Aulas de Português</option><option value=\"Centros de Apoio, Entidades e Instituições Beneficentes\">Centros de Apoio, Entidades e Instituições Beneficentes</option><option value=\"Comunidades/Sociedades\">Comunidades/Sociedades</option><option value=\"Consulados/Embaixadas\">Consulados/Embaixadas</option><option value=\"Instituições de Ensino\">Instituições de Ensino</option><option value=\"Oportunidade de emprego\">Oportunidade de emprego</option><option value=\"Órgãos governamentais\">Órgãos governamentais</option><option value=\"Templos Religiosos\">Templos Religiosos</option><option value=\"Utilidade Pública\">Utilidade Pública</option></select>";
banco['brasil']['e3'] = "Buscar";
banco['brasil']['e4'] = "Nenhuma instituição nessa categoria ou estado.";
banco['brasil']['e5'] = "VER NO MAPA";
banco['brasil']['e6'] = "VER TODOS";
banco['brasil']['reportagem'] = "<h1>SOBRE OS REFUGIADOS, APÁTRIDAS E IMIGRANTES </h1><p><b>Refugiado: </b> De acordo com a Convenção de 1951 relativa ao Estatuto dos Refugiados, é considerado refugiado todo aquele que se encontram fora do seu país por causa de fundado temor de perseguição por motivos de raça, religião, nacionalidade, opinião política ou participação em grupos sociais, e que não possa (ou não queira) voltar para casa. Atualmente outras definições são adotadas, incorporando também a esse grupo  pessoas obrigadas a deixar seu país devido a conflitos armados, violência generalizada e violação massiva dos direitos humanos. </p><p><b>Apátrida: </b>São pessoas que nascem sem nacionalidade ou têm sua nacionalidade retirada pelo Estado, ficando, portanto, sem proteção de um Estado nacional.</p><p><b>Imigrante: </b>É considerado imigrante todo aquele que imigra ou se estabelece em região ou país diferente do seu, mas não o faz necessariamente por temores ou perseguições políticas, religiosas, etc.</p><h1> FENÔMENO MIGRATÓRIO </h1><p> Segundo o último censo realizado em 2010, o Brasil tinha uma população total de 190.732.694  habitantes, desses, acredita-se que em torno de 7.289 refugiados vivem em nosso país e estima-se que o Brasil também abriga em torno de 268.201 imigrantes espalhados por todo território nacional.  </p>";

banco['brasil']['sobre'] = "<h1> SOBRE O HELPING HAND </h1>	<p> &nbsp; &nbsp;  O aplicativo Helping Hand tem enfoque voltado a refugiados e imigrantes residentes no Brasil. Propomos através deste, o mapeamento de diversas instituições, espalhadas em todo território nacional, mas com maior ênfase no Rio Grande do Sul, que fornecem apoio a esses estrangeiros, como instituições de ensino, entidades beneficentes, órgãos governamentais, entre outros. Desenvolvemos este sistema em cinco idiomas: português, inglês, espanhol, francês e árabe. Tal recurso se faz necessário visto que o idioma é uma barreira para a maioria do nosso público alvo e o grande objetivo da equipe é reintegrá-los à comunidade, propondo acesso à informação de maneira facilitada. <br/>&nbsp; &nbsp; Nossa equipe é formada por cinco estudantes do ensino médio técnico: Aline Weber, Ingrid Smalti Baggio, Laís Belisnki Roman, Luana Lazzarotto Bianchi e Monique Machado Invernizzi. </p><p><b> &nbsp;&nbsp; Parceiros que ajudaram no desenvolvimento deste projeto:</b>Filippo Petrolli, Marcelo Haydu, Marcio Bigolin, Nina Kerouanton, Rangel Rottoli e Tiago Martins da Silva Goulart.</p>";
banco['brasil']['aline'] = "18 anos, estudante no IFRS - Campus Bento Gonçalves no seu último ano. Atualmente faz estágio na EMBRAPA na área de desenvolvimento de software e futuramente pretende seguir na área, cursando ciência da computação ou engenharia de software.";
banco['brasil']['lais'] = "Possui 17 anos, estuda no IFRS - Campus Bento Gonçalves e tem participado de projetos de pesquisa na área dos Direitos Humanos na mesma instituição há quatro anos. Também participa de projetos sociais atuantes em prol da formação de cidadãos desde crianças através da música e da cultura.";
banco['brasil']['luana'] = "Possui 17 anos, estuda no IFRS - Campus Bento Gonçalves e faz estágio na Embrapa Uva e Vinho na área de desenvolvimento de softwar. Futuramente pretende fazer Ciências da Computação ou Engenharia de Software, e após manter uma empresa de desenvolvimento de software.";
banco['brasil']['ingrid'] = "Estudante do IFRS - Campus Bento Gonçalves, frequentando o 4º ano do Ensino Médio integrado ao Curso Técnico, e é bolsista na mesma Instituição. Tem 17 anos, e há quatro trabalha como tradutora. Futuramente pretende cursar história ou Relações Internacionais.";
banco['brasil']['monique'] = "Tem 17 anos, estuda no IFRS - Campus Bento Gonçalves e trabalha como bolsista na mesma instituição. Pretende, futuramente, fazer Publicidade e Propaganda devido ao grande interesse na área de criação.";
banco['brasil']['registro'] = "REGISTRE SUA INSITUIÇÃO";
banco['brasil']['r'] = "Categoria:";
banco['brasil']['r1'] = "Nome:";
banco['brasil']['r2'] = "Descrição do trabalho:";
banco['brasil']['r3'] = "Email:";
banco['brasil']['r4'] = "Telefone:";
banco['brasil']['r5'] = "Endereço:";
banco['brasil']['r6'] = "Cidade:";
banco['brasil']['r7'] = "Estado:";
banco['brasil']['r8'] = "Redes Sociais:";
banco['brasil']['r9'] = "Atendimento:";
banco['brasil']['r10'] = "Site:";
banco['brasil']['r11'] = "Nome do solicitante:";
banco['brasil']['r12'] = "Email do solicitante:";
banco['brasil']['r13'] = "Solicitar cadastro";
banco['brasil']['doe'] = "<h1>DOE</h1><p> &nbsp; &nbsp; Contribua! Além de ajudarmos as entidades com a divulgação das mesmas, arrecadamos fundos para que sejam repassados para instituições beneficentes de acolhimento a refugiados e imigrantes. Se você realizar uma doação, estará ajudando muitas pessoas em grande necessidade. Estará também contribuindo com o prosseguimento deste projeto(5% da sua doação será destinada para a manutenção do site e do aplicativo. Para mais informações, contate: contatohelpinghand@gmail.com)</p>";
banco['brasil']['fale'] = "<h1>FALE CONOSCO</h1><p class='faleingles'>Envie sua crítica, sugestão, opinião e retornaremos seu contato. Outros meios: contatohelpinghand@gmail.com ou <a href=\"https://www.facebook.com/helpinghandbr?ref=aymt_homepage_panel\" target=\"_blank\"> Facebook</a>.</p>";
banco['brasil']['f'] = "Nome";
banco['brasil']['f1'] = "Email";
banco['brasil']['f2'] = "Mensagem";
banco['brasil']['f3'] = "Enviar";

banco['brasil']['option1'] = 'Agências internacionais';
banco['brasil']['option2'] = 'Assistência jurídica';
banco['brasil']['option3'] = 'Aulas de Português';
banco['brasil']['option4'] = 'Centros de Apoio, Entidades e Instituições Beneficentes';
banco['brasil']['option5'] = 'Comunidades/Sociedades';
banco['brasil']['option6'] = 'Consulados/Embaixadas';
banco['brasil']['option7'] = 'Instituições de Ensino';
banco['brasil']['option8'] = 'Oportunidade de emprego';
banco['brasil']['option9'] = 'Órgãos governamentais';
banco['brasil']['option10'] = 'Templos Religiosos';
banco['brasil']['option11'] = 'Utilidade Pública';

banco['brasil']['verLegenda'] = 'Ver Legenda';


//eua
banco['eua']['m1'] = "Home";
banco['eua']['m2'] = "Map";
banco['eua']['m3'] = "Organizations";
banco['eua']['m4'] = "Article";
banco['eua']['m5'] = "About us";
banco['eua']['m6'] = "Register";
banco['eua']['m7'] = "Donate";
banco['eua']['m8'] = "Talk to us";
banco['eua']['home'] = "The Helping Hand intended to provide access to necessary information of places that may help you, immigrant or refugee. Among the available information, you can find: international agencies, legal aid, support centers, communities and societies, religious temples, government agencies, consulates and embassies, educational institutions, Portuguese lessons, employment opportunities and hospitals which are close to the region that you live.";
banco['eua']['mapa'] = "MAP";
banco['eua']['e'] = "ORGANIZATIONS";
banco['eua']['e1'] = "Find organizations through the state and/or category.";
banco['eua']['e2'] = "<select name=\"categoria\" id=\"categoria\"><option></option><option value=\"Agências internacionais\">International agencies</option><option value=\"Assistência jurídica\">Legal aid</option><option value=\"Aulas de Português\">Portuguese lessons</option><option value=\"Centros de Apoio, Entidades e Instituições Beneficentes\">Support centers</option><option value=\"Comunidades/Sociedades\">Communities and societies</option><option value=\"Consulados/Embaixadas\">Consulates and embassies</option><option value=\"Instituições de Ensino\">Educational institutions</option><option value=\"Oportunidade de emprego\">Employment opportunities</option><option value=\"Órgãos governamentais\">Government agencies</option><option value=\"Templos Religiosos\">Religious temples</option><option value=\"Utilidade Pública\">Hospitals</option></select>";
banco['eua']['e3'] = "Search";
banco['eua']['e4'] = "Any organizations at this category and/or state.";
banco['eua']['e5'] = "SEE IT ON THE MAP";
banco['eua']['e6'] = "SEE ALL";
banco['eua']['reportagem'] = "<h1>ABOUT THE REFUGEES, STATELESS AND IMMIGRANTS</h1><p><b>Refugees: </b> According to the 1951 Convention related to the State of Refugees, it is considered refugee everyone who are outside of their country because of the fear of persecution for reasons of race, religion, nationality, political opinion or participation in social groups, and for these motives can not (or don’t want to) go home. Currently other definitions are adopted, it is also incorporated the group of people that are forced to leave their country due to armed conflict, generalized violence and massive violation of human rights. </p><p><b>Stateless: </b>These are the people who are born without a nationality or have their nationality removed by the State, and therefore, does not have the protection of a nation state.</p><p><b>Immigrant: </b> It’s considered an immigrant every person who immigrates or is established on a different region or country of his, but does not do it, necessarily, for fear or political persecution, religious, etc.</p><h1> FENÔMENO MIGRATÓRIO </h1><p> Segundo o último censo realizado em 2010, o Brasil tinha uma população total de 190.732.694  habitantes, desses, acredita-se que em torno de 7.289 refugiados vivem em nosso país e estima-se que o Brasil também abriga em torno de 268.201 imigrantes espalhados por todo território nacional.  </p>";

banco['eua']['sobre'] = "<h1>ABOUT HELPING HAND </h1><p> &nbsp; &nbsp;  The Helping Hand application has the objective to help refugees and immigrants that live in Brazil. We propose the mapping of several institutions spread all over the national territory, however we focus on Rio Grande do Sul which provides support of this foreigners. We locate schools, charities, government agencies and others. This system were developed in five languages: Portuguese, English, Spanish, French and Arabic, feature that is necessary because the idiom is a difficulty to the most of our  public and the great team goal is to reintegrate them to the community, offering access to the information in a easy way. <br/>&nbsp; &nbsp; Our team consists of five students of high school integrated to the computer technician for internet: Aline Weber, Ingrid Smalti Baggio, Laís Belisnki Roman, Luana Lazzarotto Bianchi e Monique Machado Invernizzi .<br/><b> &nbsp;&nbsp; People who helped in the development of this project:</b>Filippo Petrolli, Marcelo Haydu, Marcio Bigolin, Nina Kerouanton, Rangel Rottoli e Tiago Martins da Silva Goulart.</p>";
banco['eua']['aline'] = "18 years old, student of IFRS - Campus Bento Gonçalves in her last year. Nowadays, she is a trainee at EMBRAPA, on software development, and, in the future, she intends to stay on this area, studying Computer Science or Software Engineering.";
banco['eua']['lais'] = "She is 17 years old, she studies in IFRS - Campus Bento Gonçalves and she has been engaged in research projects on the Human Rights field in the same institution for four years. Also, she participates of social projects that acts for the education of citizens since childhood through music and culture.";
banco['eua']['luana'] = "She is 17 years old, studies in IFRS - Campus Bento Gonçalves and she does an internship at Embrapa Uva e Vinho in the software development field to speed up the process of the enterprise. She intends, in future, to study Computer Science or Software Engineering, and after this, to create a software development company.";
banco['eua']['ingrid'] = "Student of the  IFRS - Campus Bento Gonçalves, on the 4th year of high school integrated to the Technical Course, and receives research grant in the same institution. She is 17 years old, and she started to work as a translator four years ago. She intends in future to study History or International Relations.";
banco['eua']['monique'] = "She is 17 years old, she studies in IFRS - Campus Bento Gonçalves and she receives research grant in the same institution. She intends, in future, to study Publicity and Advertising due to the great interest in the creative field.";
banco['eua']['registro'] = "REGISTER YOUR ORGANIZATION";
banco['eua']['r'] = "Category:";
banco['eua']['r1'] = "Name:";
banco['eua']['r2'] = "Work description:";
banco['eua']['r3'] = "Email:";
banco['eua']['r4'] = "Telephone:";
banco['eua']['r5'] = "Address:";
banco['eua']['r6'] = "City:";
banco['eua']['r7'] = "State:";
banco['eua']['r8'] = "Social networks:";
banco['eua']['r9'] = "Opening hours:";
banco['eua']['r10'] = "Website:";
banco['eua']['r11'] = "Requestor name:";
banco['eua']['r12'] = "Requestor email:";
banco['eua']['r13'] = "Request register";
banco['eua']['doe'] = "<h1>DONATE</h1><p> &nbsp; &nbsp; Contribute! In addition to help the organizations with its disclosure, we collect funds to be passed to institutions which help refugees and immigrants. If you make a donation, you will help many people in great need, also, you will give support to the continuation of this project (5% of your donation will be used to maintain the site and the application. For more information, please contact: contatohelpinghand@gmail.com).</p>";
banco['eua']['fale'] = "<h1>TALK TO US</h1><p class='faleingles'>Send your opinion, suggestion or critics and we will aswer you! Another ways: contatohelpinghand@gmail.com or <a href=\"https://www.facebook.com/helpinghandbr?ref=aymt_homepage_panel\" target=\"_blank\"> Facebook</a>.</p>";
banco['eua']['f'] = "Name";
banco['eua']['f1'] = "Email";
banco['eua']['f2'] = "Message";
banco['eua']['f3'] = "Send";

banco['eua']['option1'] = 'International agencies';
banco['eua']['option2'] = 'Legal aid';
banco['eua']['option3'] = 'Portuguese lessons';
banco['eua']['option4'] = 'Support centers';
banco['eua']['option5'] = 'Communities and societies';
banco['eua']['option6'] = 'Consulates and embassies';
banco['eua']['option7'] = 'Educational institutions';
banco['eua']['option8'] = 'Employment opportunities';
banco['eua']['option9'] = 'Government agencies';
banco['eua']['option10'] = 'Religious temples';
banco['eua']['option11'] = 'Hospitals';

banco['eua']['verLegenda'] = 'See caption';

//france

banco['franca']['m1'] = "Home";
banco['franca']['m2'] = "Carte";
banco['franca']['m3'] = "Organisations";
banco['franca']['m4'] = "Articles";
banco['franca']['m5'] = "Sur nous";
banco['franca']['m6'] = "Inscription";
banco['franca']['m7'] = "Donne";
banco['franca']['m8'] = "Contactez-nous";
banco['franca']['home'] = "Helping Hand a pour objectif de fournir un accès à des informations sur des lieux utiles et importants, qui  pourront  aider  immigrants ou réfugiés.  Dans les informations disponibles, vous pourrez trouver des informations sur : des  agences internationales, l’assistance juridique, des centres d’aide, des comunnautés et des sociétés, des lieux religieux, des organes gouvernementaux, des consulats et ambassades, des organismes d’enseignement, des cours de portugais, des opportunités d’emploi et des hôpitaux proches de la région où vous habitez.";
banco['franca']['mapa'] = "CARTE";
banco['franca']['e'] = "ORGANISATIONS";
banco['franca']['e1'] = "Chercher organisation au le lieux et/ou catégorie.";
banco['franca']['e2'] = "<select name=\"categoria\" id=\"categoria\"><option></option><option value=\"Agências internacionais\">Agences internationales</option><option value=\"Assistência jurídica\">Assistance juridique</option><option value=\"Aulas de Português\">Cours de portugais</option><option value=\"Centros de Apoio, Entidades e Instituições Beneficentes\">Centres d’aide,  organismes et  entités bénéficiantes</option><option value=\"Comunidades/Sociedades\">Comunnautés et  sociétés</option><option value=\"Consulados/Embaixadas\">Consulats et ambassade</option><option value=\"Instituições de Ensino\">Organismes d’enseignement</option><option value=\"Oportunidade de emprego\">Opportunités d’emploi</option><option value=\"Órgãos governamentais\">Organes gouvernementau</option><option value=\"Templos Religiosos\">Lieux religieux</option><option value=\"Utilidade Pública\">Utilité publique</option></select>";
banco['franca']['e3'] = "Chercher";
banco['franca']['e4'] = "Aucune institution dans cette lieux et/ou catégorie.";
banco['franca']['e5'] = "VOIR SUR LA CARTE";
banco['franca']['e6'] = "TOUT VOIR";
banco['franca']['reportagem'] = "<h1>SUR LES REFUGIES, APATRIDES ET IMMIGRANTS</h1><p><b>Réfugié: </b> En accord avec la Convention de 1951 relative au Statut des Réfugiés, est considéré réfugié toute personne qui se trouve en dehors de son pays pour cause de peur fondée de persécutions pour motif racial, religieux, de nationalité, d’opinion politique ou de participation à des groupes sociaux, et qui ne peut pas (ou qui ne veut pas) retourner chez lui.  Actuellement d’autres définitions sont adoptées, incorporant aussi à ces groupes de personnes obligées à quitter leur pays à cause de conflits armés, de violence généralisée ou de violations massives des droits de l’Homme.</p><p><b>Apatride: </b>Ce sont des personnes qui sont nées sans nationalité ou à qui, la nationalité a été retirée par l’Etat, restant, sur une période donnée, sans protection d’un Etat national.</p><p><b>Immigrant: </b> est considéré immigrant toute personne qui immigre ou qui s’établie dans une région ou un pays différent du sien, mais qui ne le fait pas nécessairement par peur ou persécutions politiques, religieuses...etc.</p><h1> PHENOMENE MIGRATOIRE </h1><p> Selon le dernier recencement réalisé en 2010, le Brésil avait une population totale de 190.732.694 habitants, de ceux-là, on atteste qu’environ 7.289 réfugiés vivent dans notre pays et on estime que le Brésil abrite aussi 268.201 immigrants éparpillés sur tout le territoire national. </p>";
banco['franca']['sobre'] = "<h1> SUR HELPING HAND </h1><p> &nbsp; &nbsp;  L'applicatif  Helping Hand se concentre sur les réfugiés et les immigrants résidents au Brésil. Nous proposons à travers, un \"mapage\" de diverses institutions éparpillées sur tout le territoire national -mais en mettant l'accent surtout sur l'Etat de Rio Grande do Sul- qui soutiennent ces étrangers, comme des institutions d'enseignement, des entités bénéficiantes, des organes gouvernementaux, entre autres. Nous développons ce système dans cinq langues : le portugais, l'anglais, l'espagnol, le français et l'arabe. Cette ressource est indispensable car la langue est -nous nous sommes rendues compte-   une barrière pour la grande majorité de notre public visé, et, le grand objectif de notre équipe et de les réintégrer dans la communauté, proposant un accès à des informations de manière facilité.</br>&nbsp; &nbsp; Notre equipe est  formée de cinq étudiantes de « l’enseignement moyen technique» (ce qui correpondrait au lycée en France): Aline Weber, Ingrid Smalti Baggio, Laís Belisnki Roman, Luana Lazzarotto Bianchi e Monique Machado Invernizzi .<br/><b> &nbsp;&nbsp; Personnes qui ont aidé dans le développement de cette projet:</b>Ahmed Shatat, Filippo Petroli, Glenda Heller Cáceres, Marcelo Haydu, Marcio Bigolin, Nina Kerouanton, Priscila Werner, Rangel Rottoli et Tiago Martins da Silva Goulart. </p>";
banco['franca']['aline'] = "<b>Aline Weber:</b> 18 ans, étudiante de l’IFRS – Campus Bento Gonçalves dans sa dernière année. Elle fait actuellement un stage à l’EMBRAPA, dans le secteur du développement de software. Dans l’avenir, elle prétend continuer dans ce secteur, en y mêlant les sicences de la computation  ou l’ingénieurie de software.";
banco['franca']['lais'] = "<b>Laís Belinski Roman:</b> a 17 ans, et étudie à l’IFRS – Campus Bento Gonçalves. Elle a participé à des projets de recherches dans le domaine des Droits de l’Homme, dans le même institution cela fait quatre ans. Elle participe aussi à des projets sociaux qui contribuent à enseigner la musique et la culture aux enfants, afin qu’ils deviennent de meilleurs citoyens.";
banco['franca']['luana'] = "<b>Luana Lazzarotto Bianchi:</b> a 17 ans et étudie à l’IFRS – Campus Bento Gonçalves.  Elle fait un stage à l’Embrapa Raisin et Vin, dans le secteur du développement de software. Plus tard, elle prétend faire une filière de Sciences de la Computation ou de l‘Ingénieurie des software, et ensuite gérer une entreprise de développement de software.";
banco['franca']['ingrid'] = "<b>Ingrid Baggio Smalti:</b> Etudiante de l’IFRS – Campus Bento Gonçalves, dans sa quatrième année de “l’enseignement moyen » intégrant le cours technique, et étant boursière de la même institution. Elle a 17 ans,  et travaille depuis quatre ans comme traductrice. Plus tard, elle prétend se présenter au concours pour faire la filière Histoire ou Relations Internationales.";
banco['franca']['monique'] = "<b>Monique Machado Invernizzi:</b> a 17 ans et étudie à l’IFRS – Campus Bento Gonçalves. Elle travaille en tant que boursière dans la même institution.  Elle prétend, plus tard, faire une filère Publicité et Propagande, car elle porte  un grand intérêt au domaine de la création.";
banco['franca']['registro'] = "INCRIVES VOTRE INSTITUTION";
banco['franca']['r'] = "Categorie:";
banco['franca']['r1'] = "Nom:";
banco['franca']['r2'] = "Description de poste:";
banco['franca']['r3'] = "Émail:";
banco['franca']['r4'] = "Téléphone:";
banco['franca']['r5'] = "Adresse:";
banco['franca']['r6'] = "Ville:";
banco['franca']['r7'] = "États:";
banco['franca']['r8'] = "Réseaux sociaux:";
banco['franca']['r9'] = "Heures de service:";
banco['franca']['r10'] = "Site web:";
banco['franca']['r11'] = "Nom du demandeur:";
banco['franca']['r12'] = "Émail du demandeur:";
banco['franca']['r13'] = "Requiert une inscription";
banco['franca']['doe'] = "<h1>DONNE</h1><p> &nbsp; &nbsp; Contribuez !  En plus que d’aider à la divulgation de différentes entités, nous conservons des fonds pour qu’ils puissent être redistribués aux institutions qui aident directement les réfugiés et immigrants. Si vous faites une donnation, vous aiderez plein de personnes qui sont dans le besoin. Cela contribuera aussi au développement  de ce projet  (en effet  5%  de votre donnation sera destinée à la manutention du site et de l’application. Pour plus d’informations, contactez nous: contatohelphandind@gmail.com).</p>";
banco['franca']['fale'] = "<h1>CONTACTEZ-NOUS</h1><p class='falefrances'>Envoyer vos critiques, suggestions, avis et nous retourner votre contact.D'autres moyens: contatohelpinghand@gmail.com ou <a href=\"https://www.facebook.com/helpinghandbr?ref=aymt_homepage_panel\" target=\"_blank\"> Facebook</a>.</p>";
banco['franca']['f'] = "Nom";
banco['franca']['f1'] = "Émail";
banco['franca']['f2'] = "Message";
banco['franca']['f3'] = "Envoyer";

banco['franca']['option1'] = 'Agences internationales';
banco['franca']['option2'] = 'Assistance juridique';
banco['franca']['option3'] = 'Portuguese lessons';
banco['franca']['option4'] = 'Centres d’aide,  organismes et  entités bénéficiantes';
banco['franca']['option5'] = 'Comunnautés et  sociétés';
banco['franca']['option6'] = 'Consulats et ambassade';
banco['franca']['option7'] = 'Organismes d’enseignement';
banco['franca']['option8'] = 'Opportunités d’emploi';
banco['franca']['option9'] = 'Organes gouvernementau';
banco['franca']['option10'] = 'Lieux religieux';
banco['franca']['option11'] = 'Utilité publique';

banco['franca']['verLegenda'] = 'Voir la légende';

//espanha

banco['espanha']['m1'] = "Página inicial";
banco['espanha']['m2'] = "Mapa";
banco['espanha']['m3'] = "Organizaciones";
banco['espanha']['m4'] = "Reportajes";
banco['espanha']['m5'] = "Sobre nosotras";
banco['espanha']['m6'] = "Regístrate";
banco['espanha']['m7'] = "Done ahora";
banco['espanha']['m8'] = "Habla con nosotras";
banco['espanha']['home'] = "El Helping Hand tiene como objetivo proveer informaciones necesarias de lugares que podrán ayudarte si estás en la situación de inmigrante o refugiado. Dentro de las informaciones a disposición, podrás encontrar: agencias internacionales, templos religiosos, organismos gubernamentales, consulados y embajadas, instituciones de educación, clases de portugués, oportunidades de empleo y hospitales cerca de la region en que vives.";
banco['espanha']['mapa'] = "MAPA";
banco['espanha']['e'] = "ORGANIZACIONES";
banco['espanha']['e1'] = "Encuentre una entidad a través del lugar y/o categoría escogidos.";
banco['espanha']['e2'] = "<select name=\"categoria\" id=\"categoria\"><option></option><option value=\"Agências internacionais\">Agencias internacionales</option><option value=\"Assistência jurídica\">Asistencia jurídica</option><option value=\"Aulas de Português\">Clases de portugués</option><option value=\"Centros de Apoio, Entidades e Instituições Beneficentes\">Centros de apoyo, entidades e instituciones de beneficencia</option><option value=\"Comunidades/Sociedades\">Comunidades/Sociedades</option><option value=\"Consulados/Embaixadas\">Consulados/Embajadas</option><option value=\"Instituições de Ensino\">Instituciones de enseñanza</option><option value=\"Oportunidade de emprego\">Oportunidad de empleo</option><option value=\"Órgãos governamentais\">Organismos gubernamentales</option><option value=\"Templos Religiosos\">Templos Religiosos</option><option value=\"Utilidade Pública\">Utilidad Pública</option></select>";
banco['espanha']['e3'] = "Buscar";
banco['espanha']['e4'] = "Ninguna institución en esta categoría o provincia.";
banco['espanha']['e5'] = "VER EN EL MAPA";
banco['espanha']['e6'] = "VER TODOS";
banco['espanha']['reportagem'] = "<h1>SOBRE LOS REFUGIADOS, APÁTRIDAS E INMIGRANTES</h1><p><b>Refugiado: </b> De acuerdo con la Convención de 1951 relativa al Estatuto de los Refugiados, se considera refugiado todo aquel que se encuentra fuera de su país por razón de  temor de persecución por motivos de raza, religión, nacionalidad, opiniones políticas o participación en grupos sociales y que no puede (o no quiere) volver a casa. Actualmente otras definiciones son adoptadas, incluyendo también a este grupo a las personas obligadas a dejar su país debido a conflictos armados, violencia generalizada y violación masiva de los derechos humanos.</p><p><b>Apátrida: </b>Son personas que nacen sin nacionalidad o tienen su nacionalidad destituida por el gobierno, quedando, por lo tanto, sin protección de un Estado nacional.</p><p><b>Inmigrante: </b>Se considera inmigrante todo aquel que inmigra o se establece en una región o país diferente del suyo de origen, pero no lo hace necesariamente por temores o persecuciones políticas, religiosas, etc.</p><h1> FENÓMENO MIGRATORIO </h1><p>Según el último censo realizado en 2010, Brasil tenía una población total de 190.732.694 habitantes. De estos, se cree que alrededor de 7.289 refugiados viven en nuestros país y se estima que Brasil también abriga cerca de 268.201 inmigrantes distribuidos por todo el territorio nacional.</p>";

banco['espanha']['sobre'] = "<h1> SOBRE O HELPING HAND </h1><p> &nbsp; &nbsp;  La aplicación Helping Hand tiene un enfoque orientado a refugiados e inmigrantes que viven en Brasil. Por medio de la aplicación se propone el mapeamiento - como forma de apoyo a los extranjeros - de diversas instituciones en todo el territorio nacional, pero con un énfasis en Rio Grande do Sul, como instituciones de enseñanza, entidades de beneficencia, organismos gubernamentales, entre otros. Desarrollamos este sistema en cinco lenguas: portugués, inglés, español, francés y árabe. Este recurso es necesario debido a que el idioma es suele ser una barrera para la mayoría de nuestro público y el gran objetivo del equipo es  integrarlos nuevamente en la comunidad, propondo acceso a la información de manera facilitada.<br/>&nbsp; &nbsp; Nuestro equipo está compuesto por cinco estudiantes de la enseñanza secundaria tecnológica:  Aline Weber, Ingrid Smalti Baggio, Laís Belisnki Roman, Luana Lazzarotto Bianchi e Monique Machado Invernizzi .<br/><b> &nbsp;&nbsp; Personas que ayudaron en el desarrollo de este proyecto:</b>Ahmed Shatat, Filippo Petroli, Glenda Heller Cáceres, Marcelo Haydu, Marcio Bigolin, Nina Kerouanton, Priscila Werner, Rangel Rottoli y Tiago Martins da Silva Goulart.</p>";
banco['espanha']['aline'] = "<b>Aline Weber</b>18 anõs, estudiante del último año de la secundaria y de la formación técnica en informática en eI IFRS -  Campus Bento Gonçalves. Actualmente hace las prácticas finales en la EMBRAPA (Empresa Brasileña de Investigación Agropecuaria) en el área de desarrollo de software. En el futuro, desea seguir trabajando y estudiando en el área, en la carrera de ciencias de la computación o ingeniería de software.";
banco['espanha']['lais'] = "<b>Laís Belinski Roman</b>Tiene 17 años, estudia en el IFRS - Campus Bento Gonçalves y participa de proyectos de investigación en el área de los derechos humanos en la misma institución hace cuatro años. También participa de proyectos sociales activos en favor de la formación de ciudadanos desde la infancia, a través de la música y de la cultura.";
banco['espanha']['luana'] = "<b>Luana Lazzarotto Bianchi</b>Tiene 17 años, estudia en el IFRS - Campus Bento Gonçalves y hace las prácticas finales en la Embrapa - Uva y Vino en el área de desarrollo de software para la agilización de los procesos de la empresa. Próximamente, desea seguir estudiando ciencias de la computación o ingeniería de software.";
banco['espanha']['ingrid'] = "<b>Ingrid Baggio Smalti</b>Estudiante del IFRS - Campus Bento Gonçalves, frecuenta el 4º año de la enseñanza secundaria integrada al curso tecnico de informática y es becaria en la misma institución. Tiene 17 años y trabaja como traductora (portugués-italiano) hace cuatro años. Piensa dar continuidad a sus estudios en la carrera de historia o de relaciones internacionales.";
banco['espanha']['monique'] = "<b>Monique Machado Invernizzi</b>Tiene 17 años, estudia en el IFRS - Campus Bento Gonçalves y trabaja como becaria en la misma institución. Desea, en el futuro, cursar la carrera de publicidad, teniendo en cuenta su gran interés por el área de creación. ";
banco['espanha']['registro'] = "REGISTRA TU INSTITUCIÓN";
banco['espanha']['r'] = "Categoría:";
banco['espanha']['r1'] = "Nombre:";
banco['espanha']['r2'] = "Descripción del trabajo que se realiza en la institución:";
banco['espanha']['r3'] = "Correo electrónico:";
banco['espanha']['r4'] = "Teléfono:";
banco['espanha']['r5'] = "Dirección:";
banco['espanha']['r6'] = "Ciudad:";
banco['espanha']['r7'] = "Provincia o departamento:";
banco['espanha']['r8'] = "Red Social:";
banco['espanha']['r9'] = "Horarios de atención:";
banco['espanha']['r10'] = "Sitio web:";
banco['espanha']['r11'] = "Nombre del aplicante:";
banco['espanha']['r12'] = "Correo electrónico del solicitante:";
banco['espanha']['r13'] = "Solicitud de inscripción";
banco['espanha']['doe'] = "<h1>DONA AHORA</h1><p> &nbsp; &nbsp; Contribuye! Además de ayudarnos con la divulgación de las entidades, recaudamos fondos para que sean transferidos para las instituciones que apoyan a refugiados e inmigrantes. Si haces una donación, ayudarás a muchas personas que tienen necesidades, así como contribuirás con la continuación de este proyecto. Nota: el 5% de su donación será destinada a la manutención de la página web y de la aplicación. Para obtener informaciones más detalladas, contacta a: contatohelpinghand@gmail.com</p>";
banco['espanha']['fale'] = "<h1>HABLA CON NOSOTRAS</h1><p class='faleingles'>Envía tus críticas, sugerencias u opiniones y nosotras nos pondremos en contacto contigo. Otros medios: contatohelpinghand@gmail.com o <a href=\"https://www.facebook.com/helpinghandbr?ref=aymt_homepage_panel\" target=\"_blank\"> Facebook</a>.</p>";
banco['espanha']['f'] = "Nombre";
banco['espanha']['f1'] = "Correo electrónico";
banco['espanha']['f2'] = "Mensaje";
banco['espanha']['f3'] = "Enviar";

banco['espanha']['option1'] = 'Agencias internacionales';
banco['espanha']['option2'] = 'Asistencia jurídica';
banco['espanha']['option3'] = 'Clases de portugués';
banco['espanha']['option4'] = 'Centros de apoyo, entidades e instituciones de beneficencia';
banco['espanha']['option5'] = 'Comunidades/Sociedades';
banco['espanha']['option6'] = 'Consulados/Embajadas';
banco['espanha']['option7'] = 'Instituciones de enseñanza';
banco['espanha']['option8'] = 'Oportunidad de empleo';
banco['espanha']['option9'] = 'Organismos gubernamentales';
banco['espanha']['option10'] = 'Templos Religiosos';
banco['espanha']['option11'] = 'Utilidad Pública';

banco['espanha']['verLegenda'] = 'Ver leyenda';

//arabe

//arabe
banco['arabe']['m1'] = "الرئيسية";
banco['arabe']['m2'] = "خريطة";
banco['arabe']['m3'] = "منظمات";
banco['arabe']['m4'] = "مقالات";
banco['arabe']['m5'] = "من نحن";
banco['arabe']['m6'] = "التسجيل";
banco['arabe']['m7'] = "التبرع";
banco['arabe']['m8'] = "تحدث لنا";
banco['arabe']['home'] = "يد العون تهدف الى تقديم الوصول للمعلومات اللازمة التي قد تساعد المهاجرين او اللاجئين. من خلال المعلومات المتاحة بإمكانك أن تجد: وكالات دولية، مساعدة قانونية، مراكز دعم، مؤسسات المجتمع المدني، معابد دينية، وكالات حكومية، سفارات وقنصليات، مؤسسات تعليمية، دروس في اللغة البرتغالية، فرص عمل، والمستشفيات القريبة من منطقة سكنك";
banco['arabe']['mapa'] = "خريطة";
banco['arabe']['e'] = "منظمات";
banco['arabe']['e1'] = "Find organizations through the state and/or category.";
banco['arabe']['e2'] = "<select name=\"categoria\" id=\"categoria\"><option></option><option value=\"Agências internacionais\">International agencies</option><option value=\"Assistência jurídica\">Legal aid</option><option value=\"Aulas de Português\">Portuguese lessons</option><option value=\"Centros de Apoio, Entidades e Instituições Beneficentes\">Support centers</option><option value=\"Comunidades/Sociedades\">Communities and societies</option><option value=\"Consulados/Embaixadas\">Consulates and embassies</option><option value=\"Instituições de Ensino\">Educational institutions</option><option value=\"Oportunidade de emprego\">Employment opportunities</option><option value=\"Órgãos governamentais\">Government agencies</option><option value=\"Templos Religiosos\">Religious temples</option><option value=\"Utilidade Pública\">Hospitals</option></select>";
banco['arabe']['e3'] = "Search";
banco['arabe']['e4'] = "Any organizations at this category and/or state.";
banco['arabe']['e5'] = "SEE IT ON THE MAP";
banco['arabe']['e6'] = "SEE ALL";
banco['arabe']['reportagem'] = "<h1>حول اللاجئين، عديمو الجنسية، والمهاجرين</h1><p><b>اللاجئين: </b> وفقاً لاتفاقية عام 1951 المتعلقة بحالة اللاجئين، يعتبر اللاجئ هو كل شخص خارج بلده بسبب الخوف من الاضطهاد بسبب العرق، الدين، الجنسية، الآراء السياسية، أو المشاركة في الفئات الاجتماعية، ولأجل ذلك لا يستطيع (أو لا يرغب) في العودة الى بلده. في الآونة الأخيرة اعتمدت تعريفات أخرى، أدرج ايضاً المجموعة من الأشخاص الذين أجبروا على مغادرة بلدهم بسبب الصراع المسلح، العنف المعمم والانتهاكات الجسيمة لحقوق الإنسان.</p><p><b>عديمو الجنسية: </b> وهم الأشخاص الذين ولدو بدون جنسية أو لديهم تحفظ على جنسيتهم من قبل الدولة، وبالتالي ليس ليدهم الحماية من الدولة القومي.</p><p><b>المهاجر: </b> يعتبر المهاجر هو كل شخص هاجر أو نشأ في منطقة أو بلد مختلف، ولكن لم يكن دافعه الخوف من الاضطهاد السياسي والدينيوالخ.</p><h1> FENÔMENO MIGRATÓRIO </h1><p> Segundo o último censo realizado em 2010, o Brasil tinha uma população total de 190.732.694  habitantes, desses, acredita-se que em torno de 7.289 refugiados vivem em nosso país e estima-se que o Brasil também abriga em torno de 268.201 imigrantes espalhados por todo território nacional.  </p>";

banco['arabe']['sobre'] = "<h1>حول يد العون</h1><p> &nbsp; &nbsp;  تطبيق يد العون يهدف الى مساعدة اللاجئين والمهاجرين الذين يعيشون في البرازيل. نقدم الخرائط للعديد من المؤسسات المنتشرة على أراضي الوطن. مع ذلك نركز على ريو قراند ديو سول، التي تقدم الدعم لهؤلاء الأجانب. تم تحديد أماكن مدارس، جمعيات خيرية، وكالات حكومية وأخرى. هذا النظام تم تطويره بخمس لغات: البرتغالية، الإنجليزية، الإسبانية، الفرنسية والعربية، هذه الميزة ضرورية بسبب صعوبة المصطلحات للعامة والهدف الأساسي للفريق هو دمجهم في المجتمع، وتقديم المعلومات بأسهل طريقة</p><br/><p><b> &nbsp;&nbsp; الأشخاص الذين ساعدوا في تطوير هذا المشروع:</b>Ahmed Shatat, فيليبوبيترولي, غلينداهيلركاسيريس, مارسيلو هايدو, مارسيوبيقولين, نينا كيروانتون, Priscila Werner, رانغلروتولي and تياجومارتينزداسيلفاجولارت.</p><br/><h1>من نحن</h1><p>	&nbsp; &nbsp; يتكون فريق العمل من خمس طلاب في المدرسة الثانويةوالمعهد التقني للكمبيوتر والانترنت، ويهدف الى تطوير أداة لمساعدة أصحاب الحاجة، مثل اللاجئين والمهاجرين. لقد تم البدء في هذا المشروع في 2015، بغرض تقديمه في برنامج التكنوفيشنوالذي يهدف الى حل المشكلات في مجتمعنا. الفكرة المبدئية للمشروع ظهرت بعد عدةأبحاث مدرسية عن الهجرة المعاصرة.  مما جعلنا ندرك أهمية الموقف حيث الآلاف من المهاجرين واللاجئين يتعاملونمع ويواجهون العديد من المشاكل والعقبات يومياً. بناء هذا النظام، تطلب ساعات كثيرة من الاستطلاعات والمساعدة من العديد من الأشخاص الذين أمدونا بكل المعلومات المطلوبة لإعداد هذا التطبيق/الموقع.</p>";
banco['arabe']['aline'] = "<b>ألين ويبر:</b> 18 سنة، طالبة في المعهد الاتحاديريو غرانديدو سول–بنتوقونسالفيسفي السنة الأخيرة. حاليا، متدربة في المؤسسة البرازيلية للبحوث الزراعية في تطوير البرامج، وترغب في المستقبل ان تبقى في المنطقة، لدراسة علوم الكمبيوتر وهندسة البرامج.";
banco['arabe']['lais'] = "<b>لاييزبلينسكي رومان:</b> 17 سنة، طالبة في المعهد الاتحاديريو غرانديدو سول –بنتوقونسالفيس، ومرتبطة في مشاريع البحث في مجال حقوق الانسان في نفس المعهد لمدة أربع سنوات. أيضاً، تشارك في المشاريع المجتمعية منذ الطفولةوالعمل معالموسيقى والثقافة";
banco['arabe']['luana'] = "<b>لوانا لازاروتوبيانكي:</b>17 سنة، طالبة في المعهد الاتحاديريو غرانديدو سول –بنتوقونسالفيس، تدربت المؤسسة البرازيلية للبحوث الزراعية في تطوير البرامجلزيادة سرعة العمليات في المؤسسات. ترغب في المستقبل في دراسة علوم الحاسوب أو هندسة البرامج، وتحلم بإنشاء شركة لتطوير البرام.";
banco['arabe']['ingrid'] = "<b>انقريدباقيوسمالتي:</b> طالبة في المعهد الاتحاديريو غرانديدو سول –بنتوقونسالفيسفي السنة الرابعة في المدرسة الثانوية وطالبة في المعهد التقني للكمبيوتر والانترنت، وتحصل على منحة البحث في نفس المؤسسة.تبلغ من العمر 17 سنة، ولقد بدأت العمل كمترجمة منذ أربع سنوات. ترغب في المستقبل في دراسة التاريخ أو العلاقات الدولية.";
banco['arabe']['monique'] = "<b>مونيكيماشادوانفيرنيزي: </b>17 سنة، طالبة في المعهد الاتحاديريو غرانديدو سول –بنتوقونسالفيسوتحصل على منحة البحث في نفس المؤسسة. ترغب في المستقبل في دراسة الدعاية والإعلان بمقتضى اهتمامها الكبير في مجال الإبداع.";
banco['arabe']['registro'] = "REGISTER YOUR ORGANIZATION";
banco['arabe']['r'] = "الفئة:";
banco['arabe']['r1'] = "الاسم:";
banco['arabe']['r2'] = "Work description:";
banco['arabe']['r3'] = "البريد الالكتروني:";
banco['arabe']['r4'] = "الهاتف:";
banco['arabe']['r5'] = "العنوان:";
banco['arabe']['r6'] = "المدينة:";
banco['arabe']['r7'] = "الدولة:";
banco['arabe']['r8'] = "شبكات اجتماعية:";
banco['arabe']['r9'] = "ساعات العمل:";
banco['arabe']['r10'] = "الموقع الإلكتروني:";
banco['arabe']['r11'] = "Requestor name:";
banco['arabe']['r12'] = "Requestor email:";
banco['arabe']['r13'] = "Request register";
banco['arabe']['doe'] = "<h1>التبرع</h1><p> &nbsp; &nbsp; المساهمة إضافة الى مساعدة المنظمات بالكشف عنها. نجن نجمع الأموال لتمريرها الى المؤسسات التي تساعد اللاجئين والمهاجرين. بتبرعك سوف تساعد الكثير من الناس الذين هم في حاجة كبيرة، بالإضافة الى أنك سوف تدعم استمرارية هذا المشروع (5% من تبرعك سوف يستخدم للحفاظ على الموقع والتطبيق) للمزيد من المعلومات راسلنا على: contatohelpinghand@gmail.com</p>";
banco['arabe']['fale'] = "<h1>تحدث لنا</h1><p>ارسل نقدك، اقتراحاتك، رأيك، وسوفAnother ways: contatohelpinghand@gmail.com or <a href=\"https://www.facebook.com/helpinghandbr?ref=aymt_homepage_panel\" target=\"_blank\"> Facebook</a>.</p>";
banco['arabe']['f'] = "الاسم";
banco['arabe']['f1'] = "البريد الالكتروني";
banco['arabe']['f2'] = "الموضوع";
banco['arabe']['f3'] = "Send";


banco['arabe']['option1'] = 'International agencies';
banco['arabe']['option2'] = 'Legal aid';
banco['arabe']['option3'] = 'Portuguese lessons';
banco['arabe']['option4'] = 'Support centers';
banco['arabe']['option5'] = 'Communities and societies';
banco['arabe']['option6'] = 'Consulates and embassies';
banco['arabe']['option7'] = 'Educational institutions';
banco['arabe']['option8'] = 'Employment opportunities';
banco['arabe']['option9'] = 'Government agencies';
banco['arabe']['option10'] = 'Religious temples';
banco['arabe']['option11'] = 'Hospitals';

banco['arabe']['verLegenda'] = 'انظر أسطورة';

$('#m1').html(banco[idioma]['m1']);
document.getElementById("m2").innerHTML = banco[idioma]['m2'];
document.getElementById("m3").innerHTML = banco[idioma]['m3'];
//document.getElementById("m4").innerHTML = banco[idioma]['m4'];
document.getElementById("m5").innerHTML = banco[idioma]['m5'];
document.getElementById("m6").innerHTML = banco[idioma]['m6'];
document.getElementById("m7").innerHTML = banco[idioma]['m7'];
document.getElementById("m8").innerHTML = banco[idioma]['m8'];

//MarcaÃ§Ã£o Menu
x = window.location;
str = x.href;
arr = str.split('/');

if (str.indexOf("index") >= 0 || arr[arr.length -1] == ''){
	document.getElementById("home").innerHTML = banco[idioma]['home'];
}
else if (str.indexOf("mapa") >= 0){
	//document.getElementById("mapa").innerHTML = banco[idioma]['mapa'];
	document.getElementById("verLegenda").innerHTML = banco[idioma]['verLegenda'];
}
else if (str.indexOf("entidades") >= 0){
	document.getElementById("e").innerHTML = banco[idioma]['e'];
	document.getElementById("e1").innerHTML = banco[idioma]['e1'];
	//document.getElementById("categorias").innerHTML = banco[idioma]['e2'];
	document.getElementById("e3").value = banco[idioma]['e3'];
	document.getElementById("verTodos").innerHTML = banco[idioma]['e6'];
	$('.e5').each(function(){ 
               $(this).html(banco[idioma]['e5']);
            }); 
	if($('#e4').length){
		document.getElementById("e4").innerHTML = banco[idioma]['e4'];
	}

	$('#option1').text(banco[idioma]['option1']);
	$('#option2').text(banco[idioma]['option2']);
	$('#option3').text(banco[idioma]['option3']);
	$('#option4').text(banco[idioma]['option4']);
	$('#option5').text(banco[idioma]['option5']);
	$('#option6').text(banco[idioma]['option6']);
	$('#option7').text(banco[idioma]['option7']);
	$('#option8').text(banco[idioma]['option8']);
	$('#option9').text(banco[idioma]['option9']);
	$('#option10').text(banco[idioma]['option10']);
	$('#option11').text(banco[idioma]['option11']);
}
else if (str.indexOf("reportagem") >= 0){
	document.getElementById("reportagem").innerHTML = banco[idioma]['reportagem'];
}
else if (str.indexOf("sobre") >= 0){
	document.getElementById("sobre").innerHTML = banco[idioma]['sobre'];
}
else if (str.indexOf("registre") >= 0 || str.indexOf("inserir") >= 0){

	document.getElementById("categorias").innerHTML = banco[idioma]['e2'];
	document.getElementById("registro").innerHTML = banco[idioma]['registro'];
	document.getElementById("r").innerHTML = banco[idioma]['r'];
	document.getElementById("r1").innerHTML = banco[idioma]['r1'];
	document.getElementById("r2").innerHTML = banco[idioma]['r2'];
	document.getElementById("r3").innerHTML = banco[idioma]['r3'];
	document.getElementById("r4").innerHTML = banco[idioma]['r4'];
	document.getElementById("r5").innerHTML = banco[idioma]['r5'];
	document.getElementById("r6").innerHTML = banco[idioma]['r6'];
	document.getElementById("r7").innerHTML = banco[idioma]['r7'];
	document.getElementById("r8").innerHTML = banco[idioma]['r8'];
	document.getElementById("r9").innerHTML = banco[idioma]['r9'];
	document.getElementById("r10").innerHTML = banco[idioma]['r10'];
	document.getElementById("r11").innerHTML = banco[idioma]['r11'];
	document.getElementById("r12").innerHTML = banco[idioma]['r12'];
	document.getElementById("r13").value = banco[idioma]['r13'];


	
}
else if (str.indexOf("doe") >= 0){
	document.getElementById("doe").innerHTML = banco[idioma]['doe'];
}
else if (str.indexOf("contato") >= 0 || str.indexOf("email") >= 0){
	document.getElementById("fale").innerHTML = banco[idioma]['fale'];
	document.getElementById("f").innerHTML = banco[idioma]['f'];
	document.getElementById("f1").innerHTML = banco[idioma]['f1'];
	document.getElementById("f2").innerHTML = banco[idioma]['f2'];
	document.getElementById("f3").value = banco[idioma]['f3'];
}
else if (str.indexOf("verInstituicao") >= 0){
	if($('#i').length){
		document.getElementById("i").innerHTML = banco[idioma]['r'];
	}
	if($('#i1').length){
		document.getElementById("i1").innerHTML = banco[idioma]['r6'];
	}
	if($('#i2').length){
		document.getElementById("i2").innerHTML = banco[idioma]['r7'];
	}
	if($('#i3').length){
		document.getElementById("i3").innerHTML = banco[idioma]['r5'];
	}
	if($('#i4').length){
		document.getElementById("i4").innerHTML = banco[idioma]['r4'];
	}
	if($('#i5').length){
		document.getElementById("i5").innerHTML = banco[idioma]['r3'];
	}
	if($('#i6').length){
		document.getElementById("i6").innerHTML = banco[idioma]['r8'];
	}
	if($('#i7').length){
		document.getElementById("i7").innerHTML = banco[idioma]['r10'];
	}
	if($('#i8').length){
		document.getElementById("i8").innerHTML = banco[idioma]['r2'];
	}
	if($('#i9').length){
		document.getElementById("i9").innerHTML = banco[idioma]['r9'];
	}
	if($('#i10').length){
		document.getElementById("i10").innerHTML = banco[idioma]['e5'];
	}
}
 $('.idiomas').click(function(){
       	idioma = $(this).attr("id");
       	localStorage.setItem('idioma', idioma);

       	if(idioma == 'arabe'){
	$('#tudo').addClass('arabe');
}else{
	$('#tudo').removeClass('arabe');
}

        document.getElementById("m1").innerHTML = banco[idioma]['m1'];
		document.getElementById("m2").innerHTML = banco[idioma]['m2'];
		document.getElementById("m3").innerHTML = banco[idioma]['m3'];
		//document.getElementById("m4").innerHTML = banco[idioma]['m4'];
		document.getElementById("m5").innerHTML = banco[idioma]['m5'];
		document.getElementById("m6").innerHTML = banco[idioma]['m6'];
		document.getElementById("m7").innerHTML = banco[idioma]['m7'];
		document.getElementById("m8").innerHTML = banco[idioma]['m8'];

		//MarcaÃ§Ã£o Menu
		x = window.location;
		str = x.href;
		arr = str.split('/');

		if (str.indexOf("index") >= 0 || arr[arr.length -1] == ''){
			document.getElementById("home").innerHTML = banco[idioma]['home'];
		}
		else if (str.indexOf("mapa") >= 0){
			//document.getElementById("mapa").innerHTML = banco[idioma]['mapa'];
			document.getElementById("verLegenda").innerHTML = banco[idioma]['verLegenda'];
		}
		else if (str.indexOf("entidades") >= 0){
			document.getElementById("e").innerHTML = banco[idioma]['e'];
			document.getElementById("e1").innerHTML = banco[idioma]['e1'];
			//document.getElementById("categorias").innerHTML = banco[idioma]['e2'];
			document.getElementById("e3").value = banco[idioma]['e3'];
			document.getElementById("verTodos").innerHTML = banco[idioma]['e6'];
			$('.e5').each(function(){ 
               $(this).html(banco[idioma]['e5']);
            }); 
			if($('#e4').length){
				document.getElementById("e4").innerHTML = banco[idioma]['e4'];
			}

			$('#option1').text(banco[idioma]['option1']);
			$('#option2').text(banco[idioma]['option2']);
			$('#option3').text(banco[idioma]['option3']);
			$('#option4').text(banco[idioma]['option4']);
			$('#option5').text(banco[idioma]['option5']);
			$('#option6').text(banco[idioma]['option6']);
			$('#option7').text(banco[idioma]['option7']);
			$('#option8').text(banco[idioma]['option8']);
			$('#option9').text(banco[idioma]['option9']);
			$('#option10').text(banco[idioma]['option10']);
			$('#option11').text(banco[idioma]['option11']);
		}
		else if (str.indexOf("reportagem") >= 0){
			document.getElementById("reportagem").innerHTML = banco[idioma]['reportagem'];
		}
		else if (str.indexOf("sobre") >= 0){
			document.getElementById("sobre").innerHTML = banco[idioma]['sobre'];
		}
		else if (str.indexOf("registre") >= 0 || str.indexOf("inserir") >= 0){

			document.getElementById("categorias").innerHTML = banco[idioma]['e2'];
			document.getElementById("registro").innerHTML = banco[idioma]['registro'];
			document.getElementById("r").innerHTML = banco[idioma]['r'];
			document.getElementById("r1").innerHTML = banco[idioma]['r1'];
			document.getElementById("r2").innerHTML = banco[idioma]['r2'];
			document.getElementById("r3").innerHTML = banco[idioma]['r3'];
			document.getElementById("r4").innerHTML = banco[idioma]['r4'];
			document.getElementById("r5").innerHTML = banco[idioma]['r5'];
			document.getElementById("r6").innerHTML = banco[idioma]['r6'];
			document.getElementById("r7").innerHTML = banco[idioma]['r7'];
			document.getElementById("r8").innerHTML = banco[idioma]['r8'];
			document.getElementById("r9").innerHTML = banco[idioma]['r9'];
			document.getElementById("r10").innerHTML = banco[idioma]['r10'];
			document.getElementById("r11").innerHTML = banco[idioma]['r11'];
			document.getElementById("r12").innerHTML = banco[idioma]['r12'];
		}
		else if (str.indexOf("doe") >= 0){
			document.getElementById("doe").innerHTML = banco[idioma]['doe'];
		}
		else if (str.indexOf("contato") >= 0 || str.indexOf("email") >= 0){
			document.getElementById("fale").innerHTML = banco[idioma]['fale'];
			document.getElementById("f").innerHTML = banco[idioma]['f'];
			document.getElementById("f1").innerHTML = banco[idioma]['f1'];
			document.getElementById("f2").innerHTML = banco[idioma]['f2'];
			document.getElementById("f3").value = banco[idioma]['f3'];
		}

		else if (str.indexOf("verInstituicao") >= 0){
			if($('#i').length){
				document.getElementById("i").innerHTML = banco[idioma]['r'];
			}
			if($('#i1').length){
				document.getElementById("i1").innerHTML = banco[idioma]['r6'];
			}
			if($('#i2').length){
				document.getElementById("i2").innerHTML = banco[idioma]['r7'];
			}
			if($('#i3').length){
				document.getElementById("i3").innerHTML = banco[idioma]['r5'];
			}
			if($('#i4').length){
				document.getElementById("i4").innerHTML = banco[idioma]['r4'];
			}
			if($('#i5').length){
				document.getElementById("i5").innerHTML = banco[idioma]['r3'];
			}
			if($('#i6').length){
				document.getElementById("i6").innerHTML = banco[idioma]['r8'];
			}
			if($('#i7').length){
				document.getElementById("i7").innerHTML = banco[idioma]['r10'];
			}
			if($('#i8').length){
				document.getElementById("i8").innerHTML = banco[idioma]['r2'];
			}
			if($('#i9').length){
				document.getElementById("i9").innerHTML = banco[idioma]['r9'];
			}
			if($('#i10').length){
				document.getElementById("i10").innerHTML = banco[idioma]['e5'];
			}
		}
    })
