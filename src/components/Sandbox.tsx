import { Sandpack } from "@codesandbox/sandpack-react";
import _ from "lodash";
import commonCssFile from "@/codeExamples/common/common.css?raw";
import commonHtmlFile from "@/codeExamples/common/common.html?raw";
import commonJsFile from "@/codeExamples/common/common.js?raw";

const mergeCss = (cssFile: string): string => {
  return `
${commonCssFile}

${cssFile}
`;
}

const mergeHtml = (title: string, htmlFile: string): string => {
  const compiled = _.template(commonHtmlFile);

  return compiled({
    title,
    body: htmlFile,
  });
}

const mergeJs = (jsFile: string): string => {
  return `
${commonJsFile}
${jsFile}
  `;
}

interface SandpackProps {
  title: string;
  htmlFile: string;
  jsFile: string;
  cssFile: string;
}

export default ({ title, htmlFile, jsFile = "", cssFile = "" }: SandpackProps) => (
  <Sandpack
    template="vanilla"
    files={{
      "/index.html": mergeHtml(title, htmlFile),
      "/index.js": mergeJs(jsFile),
      "/index.css": mergeCss(cssFile)
    }}
    options={{
      showTabs: true,
      showLineNumbers: true,
      editorHeight: 400,
      wrapContent: true,
    }}
  />
);
