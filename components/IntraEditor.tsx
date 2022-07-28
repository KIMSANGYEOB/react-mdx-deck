import { Editor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import editorStyle from 'styles/editor/editor.module.css'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import { useEditor } from '@tiptap/react';

const IntraEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Table.configure({
      resizable: true,
    }),
    TableRow,
    TableHeader,
    TableCell,],
    editorProps: {
      attributes: {
        class: 'prose w-full h-[800px] text-left ' +
          'max-w-none overflow-auto ' +
          'px-6 py-3 pb-3 border border-gray-200 rounded-2xl ' +
          editorStyle.intraEditor,
      },
    },
    content: `
    <h1>2022. 08. 01 ~ 2022. 08. 05</h3>
    <h2> 개발 처리건 </h2>
    <ul>
      <li>개발1</li>
      <li>개발2</li>
    </ul>
    <h2> 요청 처리건 </h2>
    <table>
      <tbody>
        <tr>
          <th>고객사</th>
          <th>연락처</th>
          <th>제품</th>
          <th>내용</th>
        </tr>
        <tr>
          <td>삼성 SDS</td>
          <td>02-1234-4567</td>
          <td>리얼그리드</td>
          <td>발주 요청중</td>
        </tr>
        <tr>
          <td>한국환경분석연구원</td>
          <td>031-1111-2222</td>
          <td>아이랩</td>
          <td>신규기관 세팅 진행중</td>
        </tr>
      </tbody>
    </table>`
  });

  
  return (
    <EditorContent editor={editor}></EditorContent>
  );
};

export default IntraEditor;
