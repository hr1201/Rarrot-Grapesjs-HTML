export const addColumn = (editor, opt) => {
  const bm = editor.BlockManager;
  const stylePrefix = opt.stylePrefix || '';
  const clsRow = `${stylePrefix}row`;
  const clsCell = `${stylePrefix}cell`;
  const labelRow = opt.labelRow || 'Row';
  const labelCell = opt.labelColumn || 'Column';

  const attrsToString = (attrs) => {
    const result = [];
    for (let key in attrs) {
      let value = attrs[key];
      const toParse = value instanceof Array || value instanceof Object;
      value = toParse ? JSON.stringify(value) : value;
      result.push(`${key}=${toParse ? `'${value}'` : `"${value}"`}`);
    }
    return result.length ? ` ${result.join(' ')}` : '';
  };

  const keyWidth = 'flex-basis';
  const step = 0.2;
  const minDim = 1;
  const currentUnit = 1;
  const resizerBtm = {
    tl: 0,
    tc: 0,
    tr: 0,
    cl: 0,
    cr: 0,
    bl: 0,
    br: 0,
    minDim,
  };
  const resizerRight = {
    ...resizerBtm,
    cr: 1,
    bc: 0,
    keyWidth,
    currentUnit,
    minDim,
    step,
  };
  const rowAttr = {
    class: clsRow,
    'data-gjs-droppable': `.${clsCell}`,
    'data-gjs-resizable': resizerBtm,
    'data-gjs-custom-name': labelRow,
  };

  const colAttr = {
    class: clsCell,
    'data-gjs-draggable': `.${clsRow}`,
    'data-gjs-resizable': resizerRight,
    'data-gjs-custom-name': labelCell,
    'data-gjs-unstylable': ['width'],
    'data-gjs-stylable-require': ['flex-basis'],
  };

  const privateCls = [`.${clsRow}`, `.${clsCell}`];
  editor.on(
    'selector:add',
    (selector) =>
      privateCls.indexOf(selector.getFullName()) >= 0 &&
      selector.set('private', 1)
  );

  const label = 'Column';
  const category = 'Basic';
  const attrsRow = attrsToString(rowAttr);
  const attrsCell = attrsToString(colAttr);
  const styleRow = `
    .${clsRow} {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
      padding: 10px;
    }
    @media (max-width: 768px) {
      .${clsRow} {
        flex-wrap: wrap;
      }
    }
    `;
  const styleClm = `
    .${clsCell} {
      min-height: 75px;
      flex-grow: 1;
      flex-basis: 100%;
    }`;

  bm.add('Column', {
    label,
    category,
    attributes: { class: 'gjs-fonts gjs-f-b2' },
    media:`<svg xmlns="http://www.w3.org/2000/svg"  height="30" width="30" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-120q-33 0-56.5-23.5T80-200v-640l67 67 66-67 67 67 67-67 66 67 67-67 67 67 66-67 67 67 67-67 66 67 67-67v640q0 33-23.5 56.5T800-120H160Zm0-80h280v-240H160v240Zm360 0h280v-80H520v80Zm0-160h280v-80H520v80ZM160-520h640v-120H160v120Z"/></svg>`,
    content: `
        <div>
          <h2 style="padding-left: 10px;">${opt.title || '栏目标题'}</h2>
          <div ${attrsRow}>
            <div ${attrsCell}></div>
          </div>
        </div>
        <style>
          ${styleRow}
          ${styleClm}
        </style>
        `,
    ...opt.ColumnBlock,
  });
};
