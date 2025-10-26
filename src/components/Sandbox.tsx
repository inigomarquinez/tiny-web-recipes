import { Sandpack } from "@codesandbox/sandpack-react";
import _ from "lodash";
import commonCssFile from "@/codeExamples/common/common.css?raw";
import commonHtmlFile from "@/codeExamples/common/common.html?raw";
import commonJsFile from "@/codeExamples/common/common.js?raw";
import { useState, useEffect } from "react";

const mergeCss = (cssFile: string): string => {
  return `
${commonCssFile}

${cssFile}
`;
};

const mergeHtml = (title: string, htmlFile: string): string => {
  const compiled = _.template(commonHtmlFile);

  return compiled({
    title,
    body: htmlFile,
  });
};

const mergeJs = (jsFile: string): string => {
  return `
${commonJsFile}
${jsFile}
  `;
};

const fileModules = import.meta.glob("/src/codeExamples/**/index.{html,css,js}", {
  query: "?raw",
  import: "default",
});

interface SandpackProps {
  title: string;
  path: string;
}

export default ({ title, path }: SandpackProps) => {
  const [files, setFiles] = useState({
    "/index.html": "",
    "/index.css": "",
    "/index.js": "",
  });
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const basePath = `/src/codeExamples/${path}`;
    const htmlPath = `${basePath}/index.html`;
    const cssPath = `${basePath}/index.css`;
    const jsPath = `${basePath}/index.js`;

    const loadFiles = async () => {
      const [html, css, js] = await Promise.all([
        fileModules[htmlPath]?.() ?? Promise.resolve(""),
        fileModules[cssPath]?.() ?? Promise.resolve(""),
        fileModules[jsPath]?.() ?? Promise.resolve(""),
      ]);

      setFiles({
        "/index.html": mergeHtml(title, html as string),
        "/index.css": mergeCss(css as string),
        "/index.js": mergeJs(js as string),
      });
      setLoaded(true);
    };

    loadFiles();
  }, [path, title]);

  return isLoaded ? (
    <Sandpack
      template="vanilla"
      files={files}
      options={{
        showTabs: true,
        showLineNumbers: true,
        editorHeight: 400,
        wrapContent: true,
      }}
    />
  ) : <div>Loading</div>
};
