function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***********************
  Menu Component
 ***********************/

const Menu = (props) => {
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: `menu-container ${props.showMenu}` } /*#__PURE__*/,
    React.createElement("div", { className: "overlay" }) /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "menu-items" } /*#__PURE__*/,
      React.createElement(
        "ul",
        null /*#__PURE__*/,
        React.createElement(
          "li",
          null /*#__PURE__*/,
          React.createElement(
            "a",
            { href: "#welcome-section", onClick: props.toggleMenu },
            "HOME"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "li",
          null /*#__PURE__*/,
          React.createElement(
            "a",
            { href: "#about", onClick: props.toggleMenu },
            "SOBRE"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "li",
          null /*#__PURE__*/,
          React.createElement(
            "a",
            { href: "#projects", onClick: props.toggleMenu },
            "PORTIFÓLIO"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "li",
          null /*#__PURE__*/,
          React.createElement(
            "a",
            { href: "#contact", onClick: props.toggleMenu },
            "CONTATO"
          )
        )
      ) /*#__PURE__*/,

      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
  Nav Component
 ***********************/

const Nav = (props) => {
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null /*#__PURE__*/,
    React.createElement(
      "nav",
      { id: "navbar" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "nav-wrapper" } /*#__PURE__*/,
        React.createElement(
          "p",
          { className: "brand" },
          "joão" /*#__PURE__*/,

          React.createElement("strong", null, "emmanuel")
        ) /*#__PURE__*/,

        React.createElement(
          "a",
          {
            onClick: props.toggleMenu,
            className:
              props.showMenu === "active"
                ? "menu-button active"
                : "menu-button",
          } /*#__PURE__*/,

          React.createElement("span", null)
        )
      )
    )
  );
};

/***********************
  Header Component
 ***********************/

const Header = (props) => {
  return /*#__PURE__*/ React.createElement(
    "header",
    { id: "welcome-section" } /*#__PURE__*/,
    React.createElement("div", { className: "forest" }) /*#__PURE__*/,
    React.createElement("div", { className: "silhouette" }) /*#__PURE__*/,
    React.createElement("div", { className: "moon" }) /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "container" } /*#__PURE__*/,
      React.createElement(
        "h1",
        null /*#__PURE__*/,
        React.createElement(
          "span",
          { className: "line" },
          "eu faço "
        ) /*#__PURE__*/,
        React.createElement(
          "span",
          { className: "line" },
          " códigos"
        ) /*#__PURE__*/,
        React.createElement(
          "span",
          { className: "line" } /*#__PURE__*/,
          React.createElement("span", { className: "color" }, "&"),
          " crio bugs"
        )
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        { className: "buttons" } /*#__PURE__*/,
        React.createElement(
          "a",
          { href: "#projects" },
          "portifólio"
        ) /*#__PURE__*/,
        React.createElement(
          "a",
          { href: "#contact", className: "cta" },
          "Contato"
        )
      )
    )
  );
};

/***********************
  About Component
 ***********************/

const About = (props) => {
  return /*#__PURE__*/ React.createElement(
    "section",
    { id: "about" } /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "wrapper" } /*#__PURE__*/,
      React.createElement(
        "article",
        null /*#__PURE__*/,
        React.createElement(
          "div",
          { className: "title" } /*#__PURE__*/,
          React.createElement("h3", null, "Quem eu sou?") /*#__PURE__*/,
          React.createElement("p", { className: "separator" })
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "desc full" } /*#__PURE__*/,
          React.createElement(
            "h4",
            { className: "subtitle" },
            "Meu nome é João."
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Eu sou um desenvolvedor web com anos de experiência adquirida estudando tanto no Canadá quanto no Brasil."
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            " Meu objetivo é sempre resolver problemas de maneira eficiente e elegante e sempre estou buscando novos desafios e oportunidades para aprender e crescer como profissional, além disso, sou apaixonado por poutine, como amo poutine..."
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "title" } /*#__PURE__*/,
          React.createElement("h3", null, "O que eu faço?") /*#__PURE__*/,
          React.createElement("p", { className: "separator" })
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "desc" } /*#__PURE__*/,
          React.createElement(
            "h4",
            { className: "subtitle" },
            "Sou programador."
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Para o desenvolvimento de front-end, eu geralmente utilizo Javascript, tanto sozinho quanto combinado com frameworks populares como ReactJS e VueJS. Além disso, eu aplico estilos aos sites com Sass, CSS e, se necessário, frameworks de estilo como Bootstrap ou Bulma."
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Eu tenho experiência em desenvolvimento de back-end com Javascript (NodeJS, Express, MongoDB, etc) e, se necessário, também posso trabalhar com PHP (Wordpress, Laravel, etc)."
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "desc" } /*#__PURE__*/,
          React.createElement(
            "h4",
            { className: "subtitle" },
            "Também sou estudante."
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Eu estou estudando Engenharia de Software para alcançar meus objetivos profissionais a longo prazo. Acredito que esta área é fundamental para o desenvolvimento de soluções tecnológicas eficientes e efetivas. A Engenharia de Software abrange várias áreas, como análise de requisitos, projeto, testes, manutenção e evolução de software. Além disso, ao me formar nesta área, estarei capacitado a atuar em equipe, gerenciar projetos de maneira eficaz, bem como identificar e resolver problemas complexos no desenvolvimento de software."
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Acredito que a Engenharia de Software é a chave para o sucesso em minha carreira e estou empenhado em alcançar meus objetivos nesta área."
          )
        )
      )
    )
  );
};

/***********************
  Project Component
 ***********************/

const Project = (props) => {
  const tech = {
    sass: "fab fa-sass",
    css: "fab fa-css3-alt",
    js: "fab fa-js-square",
    react: "fab fa-react",
    vue: "fab fa-vuejs",
    d3: "far fa-chart-bar",
    node: "fab fa-node",
  };

  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "project" } /*#__PURE__*/,
    React.createElement(
      "a",
      {
        className: "project-link",
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      } /*#__PURE__*/,
      React.createElement("img", {
        className: "project-image",
        src: props.img,
        alt: "Screenshot of " + props.title,
      })
    ) /*#__PURE__*/,

    React.createElement(
      "div",
      { className: "project-details" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "project-tile" } /*#__PURE__*/,
        React.createElement(
          "p",
          { className: "icons" },
          props.tech
            .split(" ")
            .map((t /*#__PURE__*/) =>
              React.createElement("i", { className: tech[t], key: t })
            )
        ),

        props.title,
        " "
      ),

      props.children /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "buttons" } /*#__PURE__*/,
        React.createElement(
          "a",
          { href: repo, target: "_blank", rel: "noopener noreferrer" },
          "Ver código " /*#__PURE__*/,
          React.createElement("i", { className: "fas fa-external-link-alt" })
        ) /*#__PURE__*/,

        React.createElement(
          "a",
          { href: link, target: "_blank", rel: "noopener noreferrer" },
          "Ver site " /*#__PURE__*/,
          React.createElement("i", { className: "fas fa-external-link-alt" })
        )
      )
    )
  );
};

/***********************
  Projects Component
 ***********************/

const Projects = (props) => {
  return /*#__PURE__*/ React.createElement(
    "section",
    { id: "projects" } /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "projects-container" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "heading" } /*#__PURE__*/,
        React.createElement(
          "h3",
          { className: "title" },
          "Meus trabalhos"
        ) /*#__PURE__*/,
        React.createElement("p", { className: "separator" }) /*#__PURE__*/,
        React.createElement(
          "p",
          { className: "subtitle" },
          "Aqui está uma " /*#__PURE__*/,
          React.createElement("u", null, ""),
          "  lista da maioria dos projetos nos quais tenho trabalhado ultimamente. Tudo isso foi construído durante minha aventura no mundo da codificação,",
          " " /*#__PURE__*/,
          React.createElement(
            "a",
            { href: "#", target: "_blank", rel: "noopener noreferrer" },
            ""
          ),
          ", onde codifico sem parar até concluir todos os projetos necessários para obter minha certificação Full-Stack Developer."
        )
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        { className: "projects-wrapper" } /*#__PURE__*/,
        React.createElement(
          Project,
          {
            title: "site Stellantis.",
            img: "https://raw.githubusercontent.com/elmanuzin/stellantiswebOfficial/main/stellantos.png",
            tech: "js css",
            link: "https://elmanuzin.github.io/stellantiswebOfficial/index.html",
            repo: "https://github.com/elmanuzin/stellantiswebOfficial",
          } /*#__PURE__*/,

          React.createElement(
            "small",
            null,
            "Feito usando HTML, CSS, JS + jQuery e muito amor."
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Este site foi criado com o objetivo de tornar o trabalho da operação mais fácil e evitar erros. Adorei trabalhar neste projeto, pois me deu a oportunidade de aprender muitas coisas novas."
          )
        ) /*#__PURE__*/,

        React.createElement(
          Project,
          {
            title: "Nexus Cetus Exchange.",
            img: "https://raw.githubusercontent.com/elmanuzin/NexusCetus/main/aviaosemfundo.png",
            tech: "js css",
            link: "https://elmanuzin.github.io/NexusCetus/",
            repo: "https://github.com/elmanuzin/NexusCetus",
          } /*#__PURE__*/,

          React.createElement(
            "small",
            null,
            "Feito usando HTML, CSS, e muita alegria."
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Esse foi um dos meus primeiros projetos que eu fiz sozinho, gosto muito dele, ainda está em andamento, pretendo mudar muita coisa ainda."
          )
        ) /*#__PURE__*/,

        React.createElement(
          Project,
          {
            title: "Bitcoin History Book.",
            img: "https://raw.githubusercontent.com/elmanuzin/TimeLineBitcoin/main/bitcoinHistoryBook.png",
            tech: "css",
            link: "https://elmanuzin.github.io/TimeLineBitcoin/",
            repo: "https://github.com/elmanuzin/TimeLineBitcoin",
          } /*#__PURE__*/,

          React.createElement(
            "small",
            null,
            "Feito usando somente html,css,JS."
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Esse site foi usado para estudar programação e também estudar a história do Bitcoin, e mostrar minha paixão por Cryptomoedas e códigos."
          )
        ) /*#__PURE__*/,

        React.createElement(
          Project,
          {
            title: "Carrosel.",
            img: "https://raw.githubusercontent.com/elmanuzin/carrosel/main/Screenshot%202023-02-27%20105540.png",
            tech: "js css",
            link: "https://elmanuzin.github.io/carrosel/",
            repo: "https://github.com/elmanuzin/carrosel",
          } /*#__PURE__*/,

          React.createElement(
            "small",
            null,
            "Feito usando html,css,JS."
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Ao criar um site, eu sempre priorizo a usabilidade do usuário. Para mim, é fundamental que o site seja desenvolvido de forma que os usuários possam utilizá-lo de maneira fácil e eficiente, por isso descidi fazer esse projeto."
          )
        ) /*#__PURE__*/,

        React.createElement(
          Project,
          {
            title: "Jogo da Velha.",
            img: "https://raw.githubusercontent.com/elmanuzin/jogodavelha/main/Screenshot%202023-02-27%20124303.png",
            tech: "js css",
            link: "https://elmanuzin.github.io/jogodavelha/",
            repo: "https://github.com/elmanuzin/jogodavelha",
          } /*#__PURE__*/,

          React.createElement(
            "small",
            null,
            "Feito usando html,css,JS."
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Fiz meu primeiro Jogo usando HTMl, CSS e JS"
          )
        ) /*#__PURE__*/,

        React.createElement(
          Project,
          {
            title: "jogo acerte o número.",
            img: "https://raw.githubusercontent.com/elmanuzin/acerteonumero/main/Screenshot%202023-02-27%20131900.png",
            tech: "python",
            link: "https://cortala.glitch.me/example",
            repo: "https://github.com/elmanuzin/acerteonumero",
          } /*#__PURE__*/,

          React.createElement(
            "small",
            null,
            "Feito usando Python"
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Jogo feito usando python, foi meu primeiro jogo feito nessa linguagem."
          )
        ) /*#__PURE__*/,

        React.createElement(
          Project,
          {
            title: "Somando Matrizes.",
            img: "https://raw.githubusercontent.com/elmanuzin/matriz/main/Screenshot%202023-02-27%20132038.png",
            tech: "",
            link: "https://cortala.glitch.me/example",
            repo: "https://github.com/elmanuzin/matriz",
          } /*#__PURE__*/,

          React.createElement(
            "small",
            null,
            "Para somar a matriz utilizei apenas Python"
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Para fazer esse calculo usei python, o intuido foi calcular o material que uma fabrica usa para produzir um número de camisetas."
          )
        ) /*#__PURE__*/,

        React.createElement(
          Project,
          {
            title: "Aprender digitação",
            img: "https://raw.githubusercontent.com/elmanuzin/digita-o/main/Screenshot%202023-02-27%20143458.png",
            tech: "js css",
            link: "https://elmanuzin.github.io/digita-o/",
            repo: "https://github.com/elmanuzin/digita-o",
          } /*#__PURE__*/,

        
        )
      )
    )
  );
};

/***********************
  Contact Component
 ***********************/

const Contact = (props) => {
  return /*#__PURE__*/ React.createElement(
    "section",
    { id: "contact" } /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "container" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "heading-wrapper" } /*#__PURE__*/,
        React.createElement(
          "div",
          { className: "heading" } /*#__PURE__*/,
          React.createElement(
            "p",
            { className: "title" },
            "Quer entrar " /*#__PURE__*/,
            React.createElement("br", null),
            "em contato comigo?"
          ) /*#__PURE__*/,

          React.createElement("p", { className: "separator" }) /*#__PURE__*/,
          React.createElement(
            "p",
            { className: "subtitle" },
            "Porfavor, use o formulario abaixo ou envie um email para ",
            "" /*#__PURE__*/,
            React.createElement(
              "span",
              { className: "mail" },
              "joaoemmanuelbrl" /*#__PURE__*/,

              React.createElement("i", { className: "fas fa-at at" }),
              "gmail" /*#__PURE__*/,

              React.createElement("i", { className: "fas fa-circle dot" }),
              "com"
            ),
            ":"
          )
        ) /*#__PURE__*/,

        React.createElement(SocialLinks, null)
      ) /*#__PURE__*/,

      React.createElement(
        "form",
        { id: "contact-form", action: "#" } /*#__PURE__*/,
        React.createElement("input", {
          placeholder: "Nome",
          name: "name",
          type: "text",
          required: true,
        }) /*#__PURE__*/,
        React.createElement("input", {
          placeholder: "E-mail",
          name: "email",
          type: "email",
          required: true,
        }) /*#__PURE__*/,
        React.createElement("textarea", {
          placeholder: "Mensagem",
          type: "text",
          name: "message",
        }) /*#__PURE__*/,
        React.createElement("input", {
          className: "button",
          id: "submit",
          value: "enviar",
          type: "submit",
        })
      )
    )
  );
};

/***********************
  Footer Component
 ***********************/

const Footer = (props) => {
  return /*#__PURE__*/ React.createElement(
    "footer",
    null /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "wrapper" } /*#__PURE__*/,
      React.createElement("h3", null, "THANKS FOR VISITING") /*#__PURE__*/,
      React.createElement(
        "p",
        null,
        "\xA9 ",
        new Date().getFullYear(),
        " Yago Est\xE9vez."
      ) /*#__PURE__*/,
      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
  Social Links Component
 ***********************/

const SocialLinks = (props) => {
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "social" } /*#__PURE__*/,
    React.createElement(
      "a",
      {
        target: "",
        rel: "",
        title: "#",
      },

      " " /*#__PURE__*/,
      React.createElement("i", { className: "" })
    ) /*#__PURE__*/,

    React.createElement(
      "a",
      {
        id: "profile-link",
        href: "https://github.com/elmanuzin",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's GitHub Profile",
      },

      " " /*#__PURE__*/,
      React.createElement("i", { className: "fab fa-github" })
    ) /*#__PURE__*/,

    React.createElement(
      "a",
      {
        href: "",
        target: "",
        rel: "",
        title: "#",
      },

      " " /*#__PURE__*/,
      React.createElement("i", { className: "" })
    )
  );
};

/***********************
  Main Component
 ***********************/

class App extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      menuState: false,
    });
    _defineProperty(
      this,
      "toggleMenu",

      () => {
        this.setState((state) => ({
          menuState: !state.menuState
            ? "active"
            : state.menuState === "deactive"
            ? "active"
            : "deactive",
        }));
      }
    );
  }

  render() {
    return /*#__PURE__*/ React.createElement(
      React.Fragment,
      null /*#__PURE__*/,
      React.createElement(Menu, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }) /*#__PURE__*/,
      React.createElement(Nav, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }) /*#__PURE__*/,
      React.createElement(Header, null) /*#__PURE__*/,
      React.createElement(About, null) /*#__PURE__*/,
      React.createElement(Projects, null) /*#__PURE__*/,
      React.createElement(Contact, null) /*#__PURE__*/,
      React.createElement(Footer, null)
    );
  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible";
      else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    })();
  }
}

ReactDOM.render(
  /*#__PURE__*/ React.createElement(App, null),
  document.getElementById("app")
);
