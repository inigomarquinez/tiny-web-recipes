import { Sandpack } from "@codesandbox/sandpack-react";

export default ({ htmlFile, jsFile = "", cssFile = "" }) => (
  <Sandpack
    template="vanilla"
    files={{
      "/index.html": htmlFile,
      "/index.js": jsFile,
      "/index.css": cssFile
    }}
  />
);
