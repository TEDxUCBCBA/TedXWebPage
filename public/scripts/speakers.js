const speakerSection = document.getElementById('speakers');
const body = document.querySelector('body');
const navbarElment = document.querySelector('#navbar');

speakerSection.addEventListener('click', showInfo)

function showInfo(event) {
    const target = event.target.parentElement.parentElement;

    switch(target.id) {
        case 'adri-zurita':
            createModal('Adriana Zurita', 'Es licenciada en Derecho, egresada en Ciencias Políticas, y con una maestría en Comunicación Corporativa. Actualmente forma parte del equipo de la campaña “Actúa Detén la Violencia” en la ciudad de La Paz, que se encarga de apoyar y dar a conocer sobre los derechos de la mujer y evitar la violencia. Tema de su charla:  Amor y violencia en tiempos de Redes Sociale.Una reflexión sobre el papel de los ciberespacios, sobre como pueden convertirse un un lugar para generar relaciones sanas o un lugar más para reproducir violencia.¿Mayor motivación? El amor y la esperanza ambos como una fuente de revolución.¿Mayor admiración? Cualquier persona revolucionaria.');
            break;

        case 'amples-regani':
            createModal('Amples Regiani', 'Brasileño con más de once años de experiencia publicitaria en diferentes países de Latinoamerica. Ha sido co-creador de la campaña “Soy Capaz”, el mayor movimiento en favor de la paz en la historia de Colombia, involucrando centenas de marcas, artistas, deportistas y millones de personas. Durante su carrera fue reconocido con premios internacionales en Argentina, Estados Unidos, Alemania, Francia, Inglaterra y Colombia por su trabajo para marcas como Coca-Cola, Nestlé, Kimberly Clark, Tramontina, Lexus y otras.  Tema de su charla: ¿Estamos reprimiendo nuestras emociones?Una nueva perspectiva a cerca de las emociones y sentimientos por medio de la revelación de un paradigma presente en nuestra sociedad.¿Mayor motivación? Crear, pensar en nuevas ideas y tratar de entender el mundo.¿A quien admira?Elon Musk¿Dato curioso?Gracias a una charla TEDx cambió su vida, hoy vive según los principios del minimalismo.');
            break;

        case 'andres-palacios':
            createModal('Andrés Palacios', 'Artista plástico boliviano y manager de diseño y desarrollo de productos del Museo Metropolitano de Arte de Nueva York (El MET), uno de los museos de arte más grandes y concurridos del mundo. El trabajo de Andrés se caracteriza por el diseño de productos vinculados a la identidad y patrimonio cultural. Tema de su charla:  El camino de un polímata. Esta se basara en mostrar una perspectiva poco conocida sobre el aprendizaje y potencial del ser humano para superarse y realizar sus metas y sueños.¿Motivación personal? Crear en base a la creatividad ¿Dato curioso? En su tiempo libre, Andrés realiza acrobacia aérea en tela, trapecio y aro.')
            break;

        case 'davor-pavisic':
            createModal('Davor Pavisic', 'Director de Tecnología en Jalasoft SRL, con una historia basada en el trabajo de la industria del software informático. Es sin duda un profesional con gran conocimiento sobre tecnología de la información con experiencia en bioinformática, lenguajes de bajo nivel, metodologías ágiles, diseño de software y activista de innovación. Tema de su charla:  ¿Qué hace a una sociedad innovadora y creativa? Una charla que tendrá el enfoque de despertar una gran motivación en la audiencia para así inspirar el espíritu innovador y el cambio.¿Mayor motivación? La curiosidad de saber. ¿A quien admira? Robert M. Manning ¿Dato curioso? Desde varios años el y un grupo de amigos se dedican a fabricar y lanzar cohetes de alto poder (High Powered Rocketry).')
            break;

        case 'erna-jugstain':
            createModal('Erna Jungstein', 'Humanista, idealista, activista y politóloga de profesión. Durante un viaje de dos años por Medio Oriente y Asia del Sur, Erna descubrió la importancia de romper esquemas, expandir sus horizontes y cuestionarse a cerca de los motivos más profundos del alma humana y las relaciones interpersonales.Ella actualmente trabaja en la función pública sin dejar de lado la investigación y gestión de proyectos relacionados al empoderamiento de poblaciones vulnerables y la igualdad de oportunidades.Tema de su charla:  Es valiente e inteligente, ser amable.Una charla donde se resaltara la bondad como la mayor virtud, fortaleza y estrategia que puede desarrollar el ser humano.¿Libro favorito? La lucha es mi vida (Nelson Mandela)¿Mayor admiración? A quienes ante la dificultad, lo injusto y doloroso, deciden el amor.')
            break;

        case 'esteba-quiste':
            createModal('Esteban Quispe', 'Este joven boliviano revolucionó la creación de robots con materiales reciclados. Esteban se dedica a la investigación de la robótica con el objetivo de fabricar robots para la agricultura, innovando ideas amigables para el medio ambiente y diferentes comunidades.Tema de su charla:  Robots de Reciclaje cuidando la Madre Tierra.Una charla que se basara en re descubrir la utilidad de la basura para la tecnología y más aun en conocer una historia que dio vuelta al sistema.¿Mayor motivación? Las necesidades ante la economía para la construcción de sus robots.¿Mayor admiración? Sus padres.')
            break;

        case 'esther-coronel':
            createModal('esther-coronel', 'Con 35 años de experiencia en las áreas de Business, Educación y Desarrollo Personal, ella es conferencista y mentora de líderes a nivel internacional. Es entrenadora en PNL Programación Neurolingüística certificada por Richard Bandler y muchos más. Considera que los ingredientes imprescindibles que llevan al éxito son: claridad, confianza y autoestima.Tema de su charla: Innovación y Creatividad: Una urgente necesidad Esta misma estará enfocada en como cambiar la manera de percibir y pensar en relación al trabajo ¿Mayor motivación? Su propia esencia¿Mayor característica? Para ella son muchas, como ser visionaria, persistente, creativa e innovadora')
            break;

        case 'lesly-zerna':
            createModal('Lesly Zerna', 'Ella es Ingeniera en Telecomunicaciones y tiene una Maestría en Ciencias de la Computación en Bélgica. Actualmente, es co-embajadora de la comunidad "City.AI" en Cochabamba, que se encarga de promover experiencias sobre la Inteligencia Artificial aplicada. Asimismo, ella es activista en temas de empoderamiento de mujeres en la tecnología.Tema de su charla: Aprender y poderUna charla que se enfocara en el valor del auto aprendizaje y el porqué es importante aprender cosas nuevas por uno mismo.¿Mayor motivación? La curiosidad y la pasión por vivir nuevas aventuras.¿A quien admira? Emprendedoras y tecnólogas: Cassidy Williams y Bel Pesce ¿Dato curioso? A Lesly le gusta mucho la música, la tecnología, los viajes, la poesía y el teatro.')
            break;

        case 'manuel-laredo':
            createModal('Manuel Laredo', 'Es Director del Centro de Desarrollo Tecnológico Aguayo, CEO de la empresa de Pisos Amortiguantes Mamut y emprendedor social. Su pasión es el desarrollo de Startup Industriales bajo los valores de cuidado del medio ambiente, equidad de género y valoración de la juventud, generando impacto en países como Bolivia, Panamá y Paraguay Tema de su charla Economía Circular: Desarrollo y BienestarUna charla que tendrá llevara a conocer a la ciudadanía el verdadero cambio para asegurar la sostenibilidad del planeta. ¿Mayor admiración? Los jóvenes que están cambiando positivamente el mundo.¿Libro favorito? "Mi primo es mi Papa" Gaby Vallejo ¿Dato curioso? Viajo durante seis meses como mochilero visitando mas de 200 Ciudades, en 32 Países de cuatro continentes.')
            break;

        case 'raul-ibarnegaray':
            createModal('Raúl Ybarnegaray', 'El es psicólogo y también uno de los cantaautores más representativos de la Canción de Autor en Bolivia. Actualmente es miembro de los Colectivos "Guitarra en Mano" (Bolivia) y "Dándole Cuerda" (Latinoamérica) y autor de cinco discos con canciones propias y de la canción "Hecho en Bolivia"Tema de su charla: La ropa y el alma de las canciones.Esta misma se tratara de una reflexión sobre la superficialidad en diferentes planos de nuestro día a día, donde a veces no nos detenemos para percibir las cosas más sencillas.¿Mayor motivación? El Arte, una herramienta que considera poderosa para el cambio social.¿Mayor admiración? Aquella persona que puede sembrar mañanas, mientras muere de tristeza por dentro.')
            break;

        case 'steve-camargo':
            createModal('Steve Camargo', 'El es fotógrafo y su principal enfoque es el documental y el fotoreportaje. Actualmente trabaja para las agencias Photoshot (UK) y Avalon (UK) y es documentalista freelance como también docente universitario. Entre sus reconocimientos destacan premios documental como Humanity Photo Awards, Selección Oficial Photofest y Adocs.Tema de su charla:  Una imagen vale más que mil palabras. ¿Se puede aplicar esta afirmación a todas las fotografías?¿Libro favorito? Antología de la literatura fantástica¿Mayor admiración? Werner Herzog, en días impares.')
            break;

        case 'tessa-henwood':
            createModal('Tessa Henwood-Mitchell', 'Emprendedora social australiana y experta en el campo del desarrollo internacional y empoderamiento de jóvenes. Es la Fundadora y Directora Internacional de TIA, una organización en Bolivia, sin ánimo de lucro, que trabaja junto con jóvenes durante la etapa de transición del cuidado estatal a la independencia, con la idea de poder empoderarlos para que se conviertan en miembros prósperos de la sociedad Tema de su charla:  Ser la persona que cree en alguien, puede hacer toda la diferencia.Una charla que se enfocara en descubrir la empatía para demostrar a las personas que cada uno de ellos puede tener un impacto positivo en el mundo. ¿Mayor motivación? El deseo de ver a los jóvenes triunfar en la vida, en sus propios términos¿Mayor admiración? Su mamá, a quien define como una persona fuerte, resiliente, y que da todo de ella a los demás.')
            break;
    }
}

function createModal(title, description) {
    
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const header = document.createElement('header') 
    const closeButton = document.createElement('span');
    const container = document.createElement('div');
    const text = document.createElement('p');
    const Headertitle = document.createElement('h2');


    function addClasses() {
        modal.classList.add('w3-modal');
        modal.classList.add('w3-animate-opacity');
        modalContent.classList.add('w3-modal-content');
        header.classList.add('w3-container');
        header.classList.add('w3-white');
        closeButton.classList.add('w3-button');
        closeButton.classList.add('w3-display-topright');
        container.classList.add('w3-container');
    }

    function addLogic() {
        modal.style.display = 'block';
        navbarElment.style.display = 'none';
        closeButton.addEventListener('click', () => {
             modal.style.display = 'none';
             navbarElment.style.display = 'block';
         });
    }

    function addContent(title,description) {
        Headertitle.textContent = title;
        text.textContent = description;
        closeButton.textContent = 'X';
    }

    function appendToBody() {
        container.appendChild(text);
        header.appendChild(Headertitle);
        header.appendChild(closeButton);
        modalContent.appendChild(header);
        modalContent.appendChild(container);
        modal.appendChild(modalContent);
        body.appendChild(modal);
    }

    
    addClasses();
    addLogic();
    addContent(title, description);
    appendToBody();

}