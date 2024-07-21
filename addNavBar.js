export const addNavBar = (editor, opts) => {
  const { Components } = editor;
  const { id, label } = opts;

  const navbarPfx = opts.classPrefix;
  const idContainer = `${id}-container`;
  const idNavMenu = `${id}-nav-menu`;
  const idNavMenuLink = `${id}-nav-menu-link`;
  const idBurgerMenu = `${id}-burger-menu`;
  const idBurgerMenuLine = `${id}-burger-menu-line`;

  Components.addType(id, {
    model: {
      defaults: {
        droppable: false,
        name: label,
        attributes: { class: navbarPfx },
        components: { type: idContainer },
        styles:
          (opts.style ||
            `
          .${navbarPfx} {
            background-color: #fff;
            color: #000;
            min-height: 50px;
            width: 100%;
            border-bottom:2.5px solid #e9e9e9;
          }

          .${navbarPfx}-container {
            // max-width: 1200px;
            margin: 0 auto;
            width: 96%;
          }

          .${navbarPfx}-items-c {
            display: inline-block;
            float: right;
          }

          .${navbarPfx}-container::after {
            content: "";
            clear: both;
            display: block;
          }

          .${navbarPfx}-logo {
            vertical-align: top;
            display: inline-block;
            padding: 10px 5px 1px 5px;
            min-height: 50px; 
            min-width: 50px;  
            max-height: 150px; 
            max-width: 150px;  
            object-fit: contain; /* 确保图像保持纵横比 */
            color: inherit;
            text-decoration: none;
          }

          .${navbarPfx}-menu {
            padding: 10px 0;
            display: block;
            float: right;
            margin: 0;
          }

          .${navbarPfx}-menu-link {
            margin: 0;
            color: inherit;
            text-decoration: none;
            display: inline-block;
            padding: 10px 15px;
          }

          .${navbarPfx}-burger {
            margin: 10px 0;
            width: 45px;
            padding: 5px 10px;
            display: none;
            float: right;
            cursor: pointer;
          }

          .${navbarPfx}-burger-line {
            padding: 1px;
            background-color: black;
            margin: 5px 0;
          }

          @media (max-width: 768px) {
            .${navbarPfx}-items-c {
              display: none;
              width: 100%;
            }

            .${navbarPfx}-burger {
              display: block;
            }

            .${navbarPfx}-menu {
              width: 100%;
            }

            .${navbarPfx}-menu-link {
              display: block;
            }
          }
        `) + opts.styleAdditional,
      },
    },
  });

  Components.addType(idContainer, {
    model: {
      defaults: {
        attributes: { class: `${navbarPfx}-container`, 'data-gjs': 'navbar' },
        name: 'Navbar Container',
        droppable: false,
        draggable: false,
        removable: false,
        copyable: false,
        highlightable: false,
        components: [
          {
            type: 'image',
            attributes: { class: `${navbarPfx}-logo`, src: 'https://cdn.jsdelivr.net/gh/hr1201/img@main/imgs/file.png', alt: 'Brand' },
          },
          { type: idBurgerMenu },
          {
            attributes: {
              class: `${navbarPfx}-items-c`,
              'data-gjs': 'navbar-items',
            },
            components: { type: idNavMenu },
          },
        ],
      },
    },
  });

  Components.addType(idNavMenu, {
    model: {
      defaults: {
        name: 'Navbar Menu',
        tagName: 'nav',
        attributes: { class: `${navbarPfx}-menu` },
        components: [
          { type: idNavMenuLink, components: '导航' },
          { type: idNavMenuLink, components: '博客' },
          { type: idNavMenuLink, components: '前端' },
          { type: idNavMenuLink, components: '后端' },
          { type: idNavMenuLink, components: '工具' },
          { type: idNavMenuLink, components: '动画' },
        ],
      },
    },
  });

  Components.addType(idNavMenuLink, {
    extend: 'link',
    model: {
      defaults: {
        name: 'Menu link',
        draggable: `[data-gjs-type="${idNavMenu}"]`,
        attributes: { class: `${navbarPfx}-menu-link` },
      },
    },
  });

  Components.addType(idBurgerMenu, {
    model: {
      defaults: {
        name: 'Burger',
        draggable: false,
        droppable: false,
        copyable: false,
        removable: false,
        script: function () {
          // @ts-ignore
          const currentEl = this;
          const stringCollapse = 'gjs-collapse';
          const clickEvent = 'click';
          const transitProp = 'max-height';
          let transEndAdded;
          let isAnimating = 0;

          const getTransitionEvent = function () {
            const el = document.createElement('void');
            const transitions = {
              transition: 'transitionend',
              OTransition: 'oTransitionEnd',
              MozTransition: 'transitionend',
              WebkitTransition: 'webkitTransitionEnd',
            };

            for (let t in transitions) {
              // @ts-ignore
              if (el.style[t] !== undefined) {
                return transitions[t];
              }
            }
          };

          const transitEndEvent = getTransitionEvent();

          var getElHeight = function (el) {
            const style = window.getComputedStyle(el);
            const elDisplay = style.display;
            // @ts-ignore
            const elMaxHeight = parseInt(style[transitProp]);

            if (elDisplay !== 'none' && elMaxHeight !== 0) {
              return el.offsetHeight;
            }

            el.style.height = 'auto';
            el.style.display = 'block';
            el.style.position = 'absolute';
            el.style.visibility = 'hidden';
            const height = el.offsetHeight;
            el.style.height = '';
            el.style.display = '';
            el.style.position = '';
            el.style.visibility = '';

            return height;
          };

          var toggleSlide = function (el) {
            isAnimating = 1;
            var elMaxHeight = getElHeight(el);
            var elStyle = el.style;
            elStyle.display = 'block';
            elStyle.transition = `${transitProp} 0.25s ease-in-out`;
            elStyle.overflowY = 'hidden';

            if (elStyle[transitProp] == '') {
              elStyle[transitProp] = 0;
            }

            if (parseInt(elStyle[transitProp]) == 0) {
              elStyle[transitProp] = '0';
              setTimeout(function () {
                elStyle[transitProp] = elMaxHeight + 'px';
              }, 10);
            } else {
              elStyle[transitProp] = '0';
            }
          };

          const toggle = function (ev) {
            ev.preventDefault();
            if (isAnimating) return;

            const navParent = currentEl.closest('[data-gjs=navbar]');
            const navItems = navParent.querySelector('[data-gjs=navbar-items]');
            navItems && toggleSlide(navItems);

            if (!transEndAdded) {
              navItems.addEventListener(transitEndEvent, function () {
                isAnimating = 0;
                const itemsStyle = navItems.style;
                if (parseInt(itemsStyle[transitProp]) == 0) {
                  itemsStyle.display = '';
                  itemsStyle[transitProp] = '';
                }
              });
              transEndAdded = 1;
            }
          };

          if (!(stringCollapse in currentEl)) {
            currentEl.addEventListener(clickEvent, toggle);
          }

          // @ts-ignore
          currentEl[stringCollapse] = 1;
        },
        attributes: { class: `${navbarPfx}-burger` },
        components: [
          { type: idBurgerMenuLine },
          { type: idBurgerMenuLine },
          { type: idBurgerMenuLine },
        ],
      },
    },
  });

  Components.addType(idBurgerMenuLine, {
    model: {
      defaults: {
        name: 'Burger Line',
        droppable: false,
        draggable: false,
        highlightable: false,
        attributes: { class: `${navbarPfx}-burger-line` },
      },
    },
  });
};