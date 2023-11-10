const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const biscoito = document.querySelector("#biscoito");
const btnBiscoito = document.querySelector(".btnBiscoito");
let frase = document.querySelector(".frase");

let frasesParaCriseDeAnsiedade = [
  "Você está seguro(a). Este momento vai passar.",
  "Concentre-se na sua respiração. Inspire, expire. Você está no controle.",
  "Essa ansiedade é temporária. Você é mais forte do que ela.",
  "Lembre-se de que as crises sempre diminuem. Você vai superar isso.",
  "Seu corpo está reagindo ao estresse, mas você está seguro(a).",
  "Dê um passo de cada vez. Você não está sozinho(a).",
  "Esta tempestade vai passar. Mantenha a calma e respire.",
  "Você já superou crises antes. Você pode superar esta também.",
  "Este momento é difícil, mas não define quem você é. Você é resiliente.",
  "Não lute contra a ansiedade. Aceite-a, respire e deixe-a passar.",
  "Você é mais forte do que imagina. Essa ansiedade não é mais forte do que você.",
  "Você está enfrentando seus medos. Isso é coragem.",
  "Feche os olhos, respire fundo e lembre-se de que isso é temporário.",
  "Essa crise não é o seu destino. Você tem o poder de mudar isso.",
  "Concentre-se no presente. Você está seguro(a) neste momento.",
  "Lembre-se de todas as vezes em que superou a ansiedade. Você pode fazer isso de novo.",
  "Cada respiração traz calma. Continue respirando.",
  "Esta ansiedade não define quem você é. Você é muito mais do que seus medos.",
  "Pode parecer esmagador agora, mas você vai superar isso. Acredite em si mesmo(a).",
  "Você não está sozinho(a). Há apoio ao seu redor.",
  "Dê-se permissão para sentir, mas também para deixar ir. Você está em controle.",
  "Lembre-se de suas habilidades de enfrentamento. Você tem recursos para lidar com isso.",
  "Sua força interior é mais poderosa do que qualquer tempestade emocional.",
  "Cada respiração é um lembrete de que você está vivo(a) e capaz de superar desafios.",
  "Seu corpo e mente estão conectados. Respire fundo para acalmar ambos.",
  "Aceite o que você está sentindo, mas lembre-se de que os sentimentos são passageiros.",
  "Você tem a força necessária para enfrentar essa crise. Confie em si mesmo(a).",
  "Você é mais do que suas preocupações. Você é uma pessoa valiosa e corajosa.",
  "A ansiedade pode ser intensa, mas você é mais forte do que qualquer desconforto.",
  "Você é resiliente e capaz de se recuperar mesmo nos momentos mais difíceis.",
  "Este é um momento desafiador, mas você já superou momentos desafiadores antes.",
  "As ondas de ansiedade vêm e vão. Lembre-se de que você é mais estável do que elas.",
  "Cada passo que você dá afasta você um pouco mais da ansiedade. Continue caminhando.",
  "Você não está sozinho(a) nisso. Há pessoas que se importam e estão dispostas a ajudar.",
  "Seus pensamentos não definem quem você é. Você é mais do que as preocupações em sua mente.",
  "Cada respiração é uma oportunidade para se conectar consigo mesmo(a) e encontrar calma.",
  "Esta crise não é permanente. Confie no processo de cura e crescimento.",
  "Você é digno(a) de paz. Dê a si mesmo(a) a permissão para buscar a tranquilidade.",
  "Seja gentil consigo mesmo(a) durante esta crise. Você merece compaixão e cuidado.",
  "A ansiedade pode ser desafiadora, mas você é mais desafiador(a).",
  "Este é apenas um capítulo da sua história, e muitos capítulos ainda estão por vir.",
  "Você está enfrentando essa crise com coragem e determinação. Continue assim.",
  "Cada pequeno passo em direção à calma é uma vitória. Celebre suas conquistas.",
  "A ansiedade pode ser assustadora, mas você está enfrentando o medo com bravura.",
  "Sua resiliência é como uma luz que brilha nos momentos mais escuros da ansiedade.",
  "Lembre-se de suas fortalezas. Elas são mais poderosas do que os desafios que enfrenta.",
  "Você não precisa carregar o peso da ansiedade sozinho(a). Compartilhe sua carga com outros.",
  "A mente pode ser um lugar turbulento, mas você tem o poder de encontrar a calma dentro dela.",
  "Cada respiração consciente é uma jornada de volta ao momento presente. Esteja aqui, agora.",
  "Você está em um processo de crescimento e cura. Confie na jornada, mesmo nos momentos difíceis.",
  "Sua capacidade de enfrentar a ansiedade é uma prova de sua força interior.",
  "Lembre-se de que você já superou crises antes e pode superar esta também.",
  "A ansiedade não define quem você é. Você é mais do que qualquer desafio que enfrenta.",
  "Você merece gentileza e amor, especialmente nos momentos mais difíceis.",
  "A ansiedade pode ser desafiadora, mas você é mais desafiador(a).",
  "Este é apenas um capítulo da sua história, e muitos capítulos ainda estão por vir.",
  "Você está enfrentando essa crise com coragem e determinação. Continue assim.",
  "Cada pequeno passo em direção à calma é uma vitória. Celebre suas conquistas.",
  "A ansiedade pode ser assustadora, mas você está enfrentando o medo com bravura.",
  "Sua resiliência é como uma luz que brilha nos momentos mais escuros da ansiedade.",
  "Lembre-se de suas fortalezas. Elas são mais poderosas do que os desafios que enfrenta.",
  "Você não precisa carregar o peso da ansiedade sozinho(a). Compartilhe sua carga com outros.",
  "A mente pode ser um lugar turbulento, mas você tem o poder de encontrar a calma dentro dela.",
  "Cada respiração consciente é uma jornada de volta ao momento presente. Esteja aqui, agora.",
  "Você está em um processo de crescimento e cura. Confie na jornada, mesmo nos momentos difíceis.",
  "Sua capacidade de enfrentar a ansiedade é uma prova de sua força interior.",
  "Lembre-se de que você já superou crises antes e pode superar esta também.",
  "A ansiedade não define quem você é. Você é mais do que qualquer desafio que enfrenta.",
  "Você merece gentileza e amor, especialmente nos momentos mais difíceis.",
  "Sua coragem em enfrentar a ansiedade é notável. Continue avançando, um passo de cada vez.",
  "A ansiedade pode ser intensa, mas você é mais forte. Você está no controle.",
  "Este é um momento desafiador, mas você é capaz de superar desafios.",
  "Cada respiração consciente é um ato de amor próprio. Cuide-se com carinho.",
  "A ansiedade pode ser um turbilhão, mas você é a calma no centro da tempestade.",
  "Você é capaz de encontrar paz interior, mesmo nos momentos mais turbulentos.",
  "Este momento é difícil, mas você é mais resistente do que imagina.",
  "A ansiedade pode ser uma nuvem passageira. Logo, o céu claro da serenidade aparecerá.",
  "Sua força interior é inabalável. Você superará esta crise com coragem.",
  "Cada dia é uma oportunidade para cultivar a calma e a paz interior.",
  "Você é mais do que suas preocupações. Sua essência é luz, não sombras.",
  "A ansiedade pode ser desafiadora, mas você é mais resiliente do que imagina.",
  "Você não está sozinho(a). Há apoio e compreensão ao seu redor.",
  "Cada respiração é uma oportunidade para se reconectar consigo mesmo(a) e com a tranquilidade.",
  "A ansiedade pode tentar te desviar do caminho, mas você é o(a) condutor(a) da sua jornada.",
  "Este é apenas um momento. Você é eterno(a). Supere este desafio com coragem.",
  "Você está crescendo, aprendendo e se adaptando. Sua jornada é valiosa e única.",
  "A ansiedade pode ser um fardo, mas você tem a força para carregá-lo e superá-lo.",
  "Lembre-se, esta crise é temporária. Você tem a capacidade de se recuperar.",
  "A ansiedade pode ser desafiadora, mas cada desafio é uma oportunidade para crescer.",
  "Você é mais forte do que os pensamentos ansiosos que tentam te dominar.",
  "Este é um capítulo, não a história completa. Continue escrevendo sua narrativa com coragem.",
  "Você está em sintonia com sua força interior. Deixe-a guiá-lo(a) através desta crise.",
  "Cada respiração profunda é uma declaração de que você está no controle da sua ansiedade.",
  "Sua jornada é única, e você está progredindo, mesmo que não pareça assim agora.",
  "A ansiedade não define quem você é. Sua essência é mais profunda e mais forte.",
  "Cada passo em direção à cura é um ato de amor próprio. Continue avançando com gentileza.",
  "Você é resiliente, mesmo nos momentos em que se sente vulnerável.",
  "Sua força interior é mais poderosa do que qualquer tempestade emocional.",
  "Mesmo nos momentos difíceis, você está crescendo e se fortalecendo.",
  "Sua jornada é valiosa, e você está progredindo, mesmo que não pareça assim.",
  "A ansiedade não define sua identidade. Você é muito mais do que seus medos.",
  "Permita-se buscar momentos de tranquilidade em meio à agitação da ansiedade.",
  "Você é resiliente, mesmo nos momentos em que se sente vulnerável.",
  "Sua força interior é maior do que qualquer desafio que a ansiedade possa apresentar.",
  "Cada passo em direção à cura é um passo corajoso. Celebre o progresso, não importa o quão pequeno seja.",
  "Se permita sentir e, em seguida, libere. Você é livre para escolher a paz.",
  "Você é digno(a) de amor, compreensão e apoio, especialmente nos dias difíceis.",
  "Sua jornada de autocuidado é única e valiosa. Dê a si mesmo(a) o tempo e o espaço necessários.",
  "A ansiedade é um desafio, mas você está crescendo e se adaptando a cada experiência.",
  "Sua coragem em enfrentar a ansiedade é admirável. Continue avançando, um passo de cada vez.",
];

function gerarFrase() {
  let fraseAleatoriaParaCriseDeAnsiedade =
    frasesParaCriseDeAnsiedade[
      Math.floor(Math.random() * frasesParaCriseDeAnsiedade.length)
    ];

  return fraseAleatoriaParaCriseDeAnsiedade;
}

function abrirBiscoito() {
  screen1.id = "hide";
  screen2.id = "";
  let fraseAleatoria = gerarFrase();

  frase.innerText = fraseAleatoria;
}

function outroBiscoito() {
  screen1.id = "";
  screen2.id = "hide";
}

biscoito.addEventListener("click", abrirBiscoito);
btnBiscoito.addEventListener("click", outroBiscoito);
