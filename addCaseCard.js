export const addCaseCard = (editor) => {
  const { Components } = editor;

  Components.addType('CaseCard', {
    model: {
      defaults: {
        name: 'CaseCard',
        droppable: false,
        attributes: { class: 'case-card' },
        components: [
          {
            type: 'div',
            attributes: { class: 'case-card-wrapper' },
            components: [
              {
                type: 'image',
                // 当拖动图片时，会通过.case-card-image类来更改样式，
                // 但是没有设置class时，会使用随机生成的id来进行属性选择器修改宽高
                attributes: {
                  src: 'https://cdn.jsdelivr.net/gh/hr1201/img@main/imgs/rarrot.webp',
                },
              },
              {
                type: 'text',
                attributes: { class: 'case-card-description' },
                content: "Welcome to Mr.Rarrot's Blog",
              },
            ],
          },
        ],
        // script() {
        //   const El = document.getElementById(Id);
        // },
        styles: `
          .case-card-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #e9e9e9;
            padding: 10px;
            margin: 10px;
            width: 350px;
          }
          .case-card-wrapper img {
            max-width: 100%;
            margin-bottom: 10px;
          }
          .case-card-description {
            text-align: center;
          }
        `,
      },
    },
  });
};